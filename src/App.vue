<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Utils/Header.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    appHeader: Header
  },
  methods: {
    ...mapActions(['fetchTransactions'])
  },
  created () {
    this.fetchTransactions()
  }
}
</script>

<style>
body {
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0px;
  background-color: #e8ebf3;
  color: #4a4a4a;
}

.text-right {
  text-align: right;
}
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
</style>
