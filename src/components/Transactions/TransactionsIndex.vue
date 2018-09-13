<template>
  <div class="transactions-container">
    <div class="transactions-filters">
      <app-select-component :options="getTransactionsTypes" v-model="typeFilter">
        <span slot="all-value-label"> All types</span>
      </app-select-component>
      <app-select-component :options="getTransactionsCurrencies" v-model="currencyFilter">
        <span slot="all-value-label"> All currencies</span>
      </app-select-component>
    </div>
    <div class="transactions-grid">
      <app-transactions-grid :transactions="getFilteredTransactions"></app-transactions-grid>
    </div>
  </div>
</template>

<script>
import TransactionsGrid from '@/components/Transactions/TransactionsGrid'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    appTransactionsGrid: TransactionsGrid
  },
  data () {
    return {
      typeFilter: '',
      currencyFilter: '',
      typeFilter2: []
    }
  },
  computed: {
    ...mapGetters(
      [
        'getTransactionsRequestError',
        'getFilteredTransactions',
        'getTransactionsTypes',
        'getTransactionsCurrencies'
      ]
    )
  },
  methods: {
    ...mapActions(['setTypeFilter', 'setCurrencyFilter'])
  },
  watch: {
    typeFilter (newValue, oldValue) {
      this.setTypeFilter(newValue)
    },
    currencyFilter (newValue, oldValue) {
      this.setCurrencyFilter(newValue)
    }
  }
}
</script>

<style>
.transactions-container {
  margin: 0px auto;
  padding: 15px;
  max-width: 1200px;
}

.transactions-filters {
  margin-bottom: 15px;
  display: flex;
  justify-content: flex-end;
}

.transactions-grid {
  background-color: #fff;
}

/* Media query for small devices */
@media (max-width: 599px) {
  .transactions-filters {
   justify-content: space-around;
  }
}
</style>
