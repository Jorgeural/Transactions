<template>
  <div class="transactions-grid-container">
    <!-- <pre> {{ transactions }}</pre> -->
    <div class="table">
      <!-- Table Header -->
      <div class="table-row header header-title">
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
      <div class="table-row text-center header-title subheader-responsive-sm">
        <div class="table-column">
          <div class="col">Name</div>
          <div class="col">Last 4 digits</div>
          <div class="col ">Amount</div>
        </div>
        <div class="table-column">
          <div class="col">Brand</div>
          <div class="col">Transaction type</div>
          <div class="col">Currency</div>
        </div>
      </div>

      <!-- LOADING SPINNER -->
      <app-spinner></app-spinner>

      <!-- Rows -->
      <div class="transactions-wrapper">
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
                  <div class="col details-title "> ID: </div>
                  <div class="col">{{ transaction.id }}</div>
                </div>
                <div class="table-row">
                  <div class="col details-title "> Tracking code: </div>
                  <div class="col">{{ transaction.trackingCode }}</div>
                </div>
                <div class="table-row ">
                  <div class="col details-title"> Brand ID: </div>
                  <div class="col">{{ transaction.brandId }}</div>
                </div>
              </div>
              <div class="table-column">
                <div class="table-row">
                  <div class="col details-title ">First 6 digits: </div>
                  <div class="col">{{ transaction.card.lastFourDigits + ' XXXX'}}</div>
                </div>
                <div class="table-row">
                  <div class="col details-title ">Expity month: </div>
                  <div class="col">{{ transaction.card.expiryMonth}}</div>
                </div>
                <div class="table-row">
                  <div class="col details-title "> Expiry Year: </div>
                  <div class="col">{{ transaction.card.expiryYear}}</div>
                </div>
              </div>
            </div>
          </div>
        </app-transactions-row>
      </div>
    </div>
  </div>
</template>

<script>
import TransactionsRow from '@/components/Transactions/TransactionsRow'
import Spinner from '@/components/Utils/Spinner'

export default {
  props: ['transactions'],
  components: {
    appTransactionsRow: TransactionsRow,
    appSpinner: Spinner
  },
  data () {
    return {
      expand: false
    }
  }
}
</script>

<style>
.header-title {
  color: #213d8f;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
}

.table-row.header-responsive-sm, .table-row.subheader-responsive-sm {
  display: none;
}

.data {
  border-top: 1px solid #EAEDF4;
  cursor: pointer;
}
  .data:hover {
  background-color: #F6F7FB;
}

.table-row {
  padding: 0 15px;
  display: flex;
}
  .table-row > .col {
    flex: 1;
    padding: 1em 0.5em;
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

.details-title {
  color: #213d8f;
  flex: 0.5;
}

/* Media query for small devices */
@media (max-width: 599px) {
  .header {
    display: none;
  }

  .table-row.header-responsive-sm {
    display: flex;
    background-color: #213d8f;
    color: #fff;
    font-weight: 600;
  }

  .table-row.subheader-responsive-sm {
    display: flex;
  }

  .subheader-responsive-sm .col{
    padding: 5px 0;
  }

  .table-row > .col {
    flex-basis: 33%;
    text-align: center;
  }

  .table-row.data{
    flex-wrap: wrap;
  }

  .transactions-wrapper {
    overflow-y: auto;
    max-height: 72vh;
  }

  .transactions-wrapper::-webkit-scrollbar{
    width: 5px;
  }
  .transactions-wrapper::-webkit-scrollbar-track{
    background: #ddd
  }
  .transactions-wrapper::-webkit-scrollbar-thumb{
    background: #aaa
  }
}
</style>
