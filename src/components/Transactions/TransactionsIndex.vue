<template>
  <div>
    <div id="filters">
    </div>
    <app-transactions-grid :transactions="getTransactions"></app-transactions-grid>
  </div>
</template>

<script>
import TransactionsGrid from '@/components/Transactions/TransactionsGrid'
import {mapGetters} from 'vuex'
export default {
  components: {
    appTransactionsGrid: TransactionsGrid
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['getTransactions', 'getTransactionsRequestError'])
  }
}
</script>

<style>

</style>
