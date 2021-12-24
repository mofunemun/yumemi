<template id="app">
  <div>
    <app-title></app-title>
    <app-checks-checkbox prefName="栃木県"></app-checks-checkbox>
    <app-checks></app-checks>
    <app-graph></app-graph>
  </div>
</template>

<script>
import appTitle from './components/AppTitle.vue'
import appChecksCheckbox from './components/AppChecksCheckbox.vue'
import appChecks from './components/AppChecks.vue'
import appGraph from './components/AppGraph.vue'

  export default {
    components:{
      appTitle,
      appChecksCheckbox,
      appChecks,
      appGraph
    }
  }
</script>
