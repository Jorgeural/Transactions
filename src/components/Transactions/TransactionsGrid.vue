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
      <!-- Table rows -->
      <div v-for="(transaction, index) in transactions" :key="index" >
         <div class="table-row data" @click="openDetails(index)">
          <div class="col text-left">{{ transaction.card.holderName }}</div>
          <div class="col text-left">{{ transaction.brandId }}</div>
          <div class="col text-center">{{ 'XXXX ' + transaction.card.lastFourDigits }}</div>
          <div class="col text-left">{{ transaction.action}}</div>
          <div class="col text-right">{{ transaction.amount}}</div>
          <div class="col text-left">{{ transaction.currencyCode }}</div>
        </div>
        <div class="details">
          <div class="table-row">
            <div class="col">ID:</div>
            <div class="col">{{transaction.id}}</div>
            <div class="col">First 6 Digits:</div>
            <div class="col">{{ transaction.card.firstSixDigits}}:</div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['transactions'],
  data () {
    return {
      expand: false
    }
  },
  methods: {
    openDetails (index) {
      console.log(index)
    }
  }
}
</script>

<style>
.transactions-grid-container {
  margin: 20px auto;
  max-width: 900px;
  background-color: #f6f7fb;
}

/* prueba */

.table {
  padding: 0 15px;
}

.header {
  color: #213d8f;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
}

.data {
  border-top: 1px solid #e8ebf3;
}

.table-row{
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
    display: block;
  }
</style>
