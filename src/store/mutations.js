const mutations = {
  setLoading: (state, payload) => {
    state.loading = payload
  },
  setTransactions: (state, payload) => {
    state.transactions = payload
  },
  setTransactionsRequestError: (state, payload) => {
    state.transactionsRequestError = payload
  },
  setTypeFilter: (state, payload) => {
    state.selectedTypeFilter = payload
  },
  setCurrencyFilter: (state, payload) => {
    state.selectedCurrencyFilter = payload
  }
}

export default mutations
