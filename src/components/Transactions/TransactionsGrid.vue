<template>
  <div id="transactions-grid">
    <table>
       <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Last 4 digits</th>
            <th>Transaction type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
       </thead>
       <tbody>
          <tr v-for="(transaction, index) in transactions" :key="index">
            <td>{{ transaction.card.holderName }}</td>
            <td>{{ transaction.brandId }}</td>
            <td>{{ 'XXXX ' + transaction.card.lastFourDigits }}</td>
            <td>{{ transaction.action}}</td>
            <td>{{ transaction.amount}}</td>
            <td>{{ transaction.currencyCode }}</td>
          </tr>
       </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['transactions'],
  data () {
    return {}
  }
}
</script>

<style>
#transactions-grid {
  margin: 20px;
  background-color: #fff;
}

th {
  width: 20%;
}
</style>
