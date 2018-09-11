<template>
  <div>
    <div id="filters">
      {{ getTransactions }}
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  deata () {
    return {}
  },
  computed: {
    ...mapGetters(['getTransactions', 'getTransactionsRequestError'])
  }
}
</script>

<style>

</style>
