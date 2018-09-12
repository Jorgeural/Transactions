<template>
  <div class="transactions-container">
    <div class="transactions-filters">
      <select name="typeFilter" v-model="typeFilter">
          <option value="">All Types</option>
          <option v-for="(type, index) in getTransactionsTypes" :key="index">{{ type }}</option>
      </select>
     <select name="currencyFilter" v-model="currencyFilter">
          <option value="">All Currencies</option>
          <option v-for="(currency, index) in getTransactionsCurrencies" :key="index">{{ currency }}</option>
      </select>

      <base-select-component></base-select-component>
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
      currencyFilter: ''
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
