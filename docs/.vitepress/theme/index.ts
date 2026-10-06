import DefaultTheme from 'vitepress/theme'
import './custom.css'
import PracticeChecklist from './PracticeChecklist.vue'
export default { extends: DefaultTheme, enhanceApp({ app }) { app.component('PracticeChecklist', PracticeChecklist) } }
