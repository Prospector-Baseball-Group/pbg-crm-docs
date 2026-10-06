import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
const root=resolve('docs')
function files(dir){return readdirSync(dir,{withFileTypes:true}).flatMap(f=>f.name.startsWith('.')?[]:f.isDirectory()?files(resolve(dir,f.name)):[resolve(dir,f.name)])}
const pages=files(root).filter(f=>f.endsWith('.md')); const errors=[]
for(const file of pages){
  const body=readFileSync(file,'utf8')
  for(const match of body.matchAll(/!?\[[^\]]*\]\(([^\s)]+)(?:\s+[^)]*)?\)/g)){
    let link=match[1].split('#')[0]
    if(!link||/^(https?:|mailto:)/.test(link))continue
    link=decodeURIComponent(link)
    const target=link.startsWith('/images/')?resolve(root,'public',link.slice(1)):link.startsWith('/')?resolve(root,link.slice(1)):resolve(dirname(file),link)
    if(![target,target+'.md',resolve(target,'index.md')].some(existsSync))errors.push(`${file}: broken link ${link}`)
  }
  for(const rule of [/https:\/\/prospector\.(?:lightning\.force|my\.salesforce)\.com/i,/\b(?:access_token|refresh_token|Bearer\s+[A-Za-z0-9])\b/,/\b[a-z0-9._%+-]+@(?!example\.(?:com|org)\b)[a-z0-9.-]+\.[a-z]{2,}\b/i,/\b(?:00D|005|001|003|006|a0r|a0p)bV[A-Za-z0-9]{9,15}\b/])if(rule.test(body))errors.push(`${file}: review possible private information (${rule})`)
  if(/TODO|TBD SCREENSHOT|PLACEHOLDER/.test(body))errors.push(`${file}: unfinished placeholder`)
}
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log(`Checked ${pages.length} pages: local links, image references, and public-content guardrails passed.`)
