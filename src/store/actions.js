import axios from 'axios'

const actions = {
  fetchTransactions: (context) => {
    axios.get('https://jovs5zmau3.execute-api.eu-west-1.amazonaws.com/prod/transactions',
      {
        auth: {
          username: 'code-challenge',
          password: 'payvisioner'}
      })
      .then((response) => {
        // console.log(response)
        if (response.status === 200) {
          context.commit('setTransactions', response.data)
        } else {
          context.commit('setTransactionsRequestError', response.statusText)
        }
      })
      .catch((error) => {
        console.log(error)
        context.commit('setTransactionsRequestError', error.message)
      })
  }
}

export default actions
