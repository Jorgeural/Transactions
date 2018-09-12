<template>
  <div class="transactions-grid-container">
    <!-- <pre> {{ transactions }}</pre> -->
    <div class="table">
      <!-- Table Header -->
      <div class="table-row header">
        <div class="col">Name</div>
        <div class="col">Brand</div>
        <div class="col text-center">Last 4 digits</div>
        <div class="col">Transaction type</div>
        <div class="col text-right">Amount</div>
        <div class="col">Currency</div>
      </div>
      <!-- Responsive table header -->
      <div class="table-row header-responsive-sm">
        <div class="col text-center"> Payments Info</div>
      </div>
      <!-- Rows -->
      <app-transactions-row
       v-for="(transaction, index) in transactions"
        :key="index">
        <!-- Data Slot -->
        <div slot="data" class="table-row data">
          <div class="col">{{ transaction.card.holderName }}</div>
          <div class="col">{{ transaction.brandId }}</div>
          <div class="col text-center">{{ 'XXXX ' + transaction.card.lastFourDigits }}</div>
          <div class="col">{{ transaction.action}}</div>
          <div class="col text-right">{{ transaction.amount}}</div>
          <div class="col">{{ transaction.currencyCode }}</div>
        </div>
        <!-- Details Slot -->
        <div slot="details" class="details">
          <div class="table-row">
            <div class="table-column">
              <div class="table-row">
                <div class="col title"> ID: </div>
                <div class="col">{{ transaction.id }}</div>
              </div>
              <div class="table-row">
                <div class="col title"> Tracking code: </div>
                <div class="col">{{ transaction.trackingCode }}</div>
              </div>
              <div class="table-row">
                <div class="col title"> Brand ID: </div>
                <div class="col">{{ transaction.brandId }}</div>
              </div>
            </div>
            <div class="table-column">
              <div class="table-row">
                <div class="col title">First 6 digits: </div>
                <div class="col">{{ transaction.card.lastFourDigits + ' XXXX'}}</div>
              </div>
              <div class="table-row">
                <div class="col title">Expity month: </div>
                <div class="col">{{ transaction.card.expiryMonth}}</div>
              </div>
              <div class="table-row">
                <div class="col title"> Expiry Year: </div>
                <div class="col">{{ transaction.card.expiryYear}}</div>
              </div>
            </div>
          </div>
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
  max-width: 1200px;
  background-color: #fff;
  /* overflow-x:auto; */
}

.header {
  color: #213d8f;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
}

.table-row.header-responsive-sm {
  display: none;
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

  .table-row.data > .col:last-child, .table-row.header > .col:last-child {
      flex: 0.5;
  }

.table-column {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.details {
  background-color: #F6F7FB;
  font-size: 16px;
  padding: 0 25px;
}

  .details > .table-row {
    flex-wrap: wrap;
  }

.details .title {
  color: #213d8f;
  flex: 0.5;
}

/* Media query for small devices */
@media (max-width: 599px) {
  .transactions-grid-container {
    margin: 15px;
  }

  .table-row.header-responsive-sm {
    display: flex;
    background-color: #213d8f;
    color: #fff;
    font-weight: 600;
  }

  .header {
    display: none;
  }

  .table-row.data{
    flex-wrap: wrap;
  }
}
</style>
