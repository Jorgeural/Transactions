<template>
  <div>
    <app-header></app-header>
    <p>Hola</p>
  </div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/Utils/Header.vue'

export default {
  name: 'Home',
  components: {
    appHeader: Header
  },
  data () {
    return {

    }
  },
  created () {
    axios.get('https://jovs5zmau3.execute-api.eu-west-1.amazonaws.com/prod/transactions',
      {
        auth: {
          username: 'code-challenge',
          password: 'payvisioner'}
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style>

</style>
