<script setup>
import { computed, ref } from 'vue'
const fee=ref(2400),deposit=ref(600),balance=ref(1800),address=ref(false),due=ref(false),approved=ref(false)
const issues=computed(()=>[!address.value&&'Client signer: complete Mailing Street and ZIP / Postal Code.',!due.value&&'Usage Fee Balance: add a Due Date.',Math.round((Number(deposit.value)+Number(balance.value)-Number(fee.value))*100)!==0&&'Deposit + Usage Fee Balance must equal the Usage Fee.'].filter(Boolean))
const reset=()=>{fee.value=2400;deposit.value=600;balance.value=1800;address.value=false;due.value=false;approved.value=false}
</script>
<template>
<section class="practice" aria-label="Fictional agreement practice">
  <div class="practice-heading"><div><span class="eyebrow">TRY IT YOURSELF</span><h2>A ready-to-send rehearsal</h2></div><button @click="reset">Reset</button></div>
  <p>Fictional example. Nothing is saved or sent to Salesforce or Adobe.</p>
  <div class="amounts"><label>Usage Fee ($)<input type="number" min="0" step=".01" v-model="fee" /></label><label>Deposit ($)<input type="number" min="0" step=".01" v-model="deposit" /></label><label>Usage Fee Balance ($)<input type="number" min="0" step=".01" v-model="balance" /></label></div>
  <label class="check"><input type="checkbox" v-model="address" /> Client signer’s street and ZIP are complete</label>
  <label class="check"><input type="checkbox" v-model="due" /> Balance payment has a due date</label>
  <label class="check"><input type="checkbox" v-model="approved" /> Review is complete and agreement is approved for send</label>
  <div class="practice-result" :class="{ready:!issues.length&&approved}" role="status" aria-live="polite">
    <strong v-if="issues.length">Cannot send — {{issues.length}} {{issues.length===1?'item needs':'items need'}} attention</strong>
    <strong v-else-if="!approved">Details complete — review and approval still needed</strong>
    <strong v-else>Ready to Send</strong>
    <ul v-if="issues.length"><li v-for="issue in issues" :key="issue">{{issue}}</li></ul>
    <p v-else>{{approved?'The next action in Salesforce would notify the signers. This example sends nothing.':'A complete form alone does not send an agreement.'}}</p>
  </div>
  <p class="caption">A simplified learning exercise. The real workspace also checks the account, event details, template, signers, payment counts, and applicable requirements.</p>
</section>
</template>
<style scoped>
.practice{border:1px solid var(--vp-c-divider);border-radius:16px;padding:28px;background:var(--vp-c-bg-soft);margin:28px 0}.practice-heading{display:flex;justify-content:space-between;align-items:start;gap:10px}.practice h2{margin:7px 0!important;padding:0!important;border:0!important;font-size:23px}.practice-heading button{padding:6px 12px;border:1px solid var(--vp-c-divider);border-radius:7px;background:var(--vp-c-bg);cursor:pointer}.amounts{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin:24px 0}.amounts label{font-size:13px;font-weight:650}.amounts input{width:100%;display:block;padding:10px;margin-top:6px;border:1px solid var(--vp-c-divider);border-radius:6px;background:var(--vp-c-bg)}.check{display:flex;gap:10px;align-items:start;margin:12px 0;font-size:14px}.check input{margin-top:6px;accent-color:var(--vp-c-brand-1)}.practice-result{background:var(--vp-c-bg);border-left:4px solid #ad7640;border-radius:6px;padding:20px;margin:22px 0}.practice-result.ready{border-color:#3d856a}.practice-result p{margin-bottom:0}.practice .caption{margin:0}@media(max-width:640px){.amounts{grid-template-columns:1fr}.practice{padding:18px}}
</style>
