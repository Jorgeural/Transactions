<template>
  <div class="transactions-grid-container">
    <!-- <pre> {{ transactions }}</pre> -->
    <div class="table">
      <!-- Table Header -->
      <div class="table-row header">
        <div class="col text-left">Name</div>
        <div class="col text-left">Brand</div>
        <div class="col text-center">Last 4 digits</div>
        <div class="col text-left">Transaction type</div>
        <div class="col text-right">Amount</div>
        <div class="col text-left">Currency</div>
      </div>
      <!-- Rows -->
      <app-transactions-row
       v-for="(transaction, index) in transactions"
        :key="index">
        <!-- Data Slot -->
        <div slot="data" class="table-row data">
          <div class="col text-left">{{ transaction.card.holderName }}</div>
          <div class="col text-left">{{ transaction.brandId }}</div>
          <div class="col text-center">{{ 'XXXX ' + transaction.card.lastFourDigits }}</div>
          <div class="col text-left">{{ transaction.action}}</div>
          <div class="col text-right">{{ transaction.amount}}</div>
          <div class="col text-left">{{ transaction.currencyCode }}</div>
        </div>
        <!-- Details Slot -->
        <div slot="details" class="details">
          hola
        </div>
      </app-transactions-row>
    </div>
  </div>
</template>

<script>
import TransactionsRow from '@/components/Transactions/TransactionsRow'

export default {
  props: ['transactions'],
  components: {
    appTransactionsRow: TransactionsRow
  },
  data () {
    return {
      expand: false
    }
  }
}
</script>

<style>
.transactions-grid-container {
  margin: 20px auto;
  max-width: 900px;
  background-color: #fff;
}

/* prueba */

.header {
  color: #213d8f;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
}

.data {
  border-top: 1px solid #EAEDF4;
}

.table-row {
  padding: 0 15px;
  display: flex;
  cursor: pointer;
}
  .table-row > .col {
    flex: 1;
    padding: 1em 0.5em;
  }

  .table-row > .col:last-child {
      flex: 0.5;
  }

.details {
  background-color: #F6F7FB
}
</style>
