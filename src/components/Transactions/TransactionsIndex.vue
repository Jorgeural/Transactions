<template>
  <div class="transactions-container">
    <!-- Transactions grid -->
    <div v-if="!getTransactionsRequestError">
      <!-- Filters -->
      <div class="transactions-filters">
        <app-select-component :options="getTransactionsTypes" :title="'Filter by type'" v-model="typeFilter">
          <span slot="all-value-label"> All types</span>
        </app-select-component>
        <app-select-component :options="getTransactionsCurrencies" :title="'Filter by currency'" v-model="currencyFilter">
          <span slot="all-value-label"> All currencies</span>
        </app-select-component>
        <div class="actions-btns">
          <i title="Refresh transactions" @click="refreshTransactions" class="fas fa-sync-alt"></i>
        </div>
      </div>
      <!-- Grid -->
      <div class="transactions-grid">
        <app-transactions-grid :transactions="getFilteredTransactions"></app-transactions-grid>
      </div>
    </div>

    <!-- Error msg -->
    <div v-if="getTransactionsRequestError" class="text-center">
      <h1>Ooops.</h1>
      <h2>An error has ocurred, we are working to solve it as soon as posible.</h2>
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
    ...mapActions(['setTypeFilter', 'setCurrencyFilter', 'fetchTransactions']),
    clearFilters () {
      this.setTypeFilter('')
      this.setCurrencyFilter('')
    },
    refreshTransactions () {
      this.fetchTransactions()
    }
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
.actions-btns {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #8ec03f;
}

.actions-btns > i {
  padding: 5px;
  margin-left: 5px;
  cursor: pointer;
}

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
