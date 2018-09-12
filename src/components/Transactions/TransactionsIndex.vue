<template>
  <div class="transactions-container">
    <div class="transactions-filters">
      <select name="Prueba">
        <option value="a">a</option>
        <option value="a">a</option>
        <option value="a">a</option>
      </select>
    </div>
    <div class="transactions-grid">
      <app-transactions-grid :transactions="getTransactions"></app-transactions-grid>
    </div>

    {{ getTransactionsCurrencies }}
    {{ getTransactionsTypes }}
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
    ...mapGetters(['getTransactions', 'getTransactionsRequestError', 'getTransactionsTypes', 'getTransactionsCurrencies'])
  }
}
</script>

<style>
.transactions-container {
  margin: 20px auto;
  max-width: 1200px;
}

.transactions-filters {
  margin-bottom: 15px;
}

.transactions-grid {
  background-color: #fff;
}

/* Media query for large devices */
@media (max-width: 1199px) {
  .transactions-container {
    margin: 15px;
  }
}
</style>
