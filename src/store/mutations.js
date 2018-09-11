const mutations = {
  setTransactions: (state, payload) => {
    state.transactions = payload
  },
  setTransactionsRequestError: (state, payload) => {
    state.transactionsRequestError = payload
  }
}

export default mutations
