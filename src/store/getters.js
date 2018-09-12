const getters = {
  getTransactions: state => state.transactions,
  getTransactionsRequestError: state => state.transactionsRequestError,
  getFilteredTransactions: state => {
    // Filter Transactions
    let filteredTransactions = []

    // Type
    filteredTransactions = state.transactions.filter(transaction => {
      if (state.selectedTypeFilter !== '') {
        return transaction.action === state.selectedTypeFilter
      } else {
        return true
      }
    })

    // Currency
    filteredTransactions = filteredTransactions.filter(transaction => {
      if (state.selectedCurrencyFilter !== '') {
        return transaction.currencyCode === state.selectedCurrencyFilter
      } else {
        return true
      }
    })

    // Order depending on selection
    // let key = state.selectedOrderBy.key
    // filteredTransactions.sort((a, b) => {
    //   return state.selectedOrderBy.order === 'desc' ? b[key] > a[key] : a[key] > b[key]
    // })
    return filteredTransactions
  },
  getTransactionsTypes: state => {
    // Obtain all Types
    let types = state.transactions.map(a => a.action)
    // Filter the array to eliminate repeated years
    let uniqueTypes = types.filter((elem, pos, arr) => {
      return arr.indexOf(elem) === pos
    })
    return uniqueTypes
  },
  getTransactionsCurrencies: state => {
    // Obtain all currencies
    let currencies = state.transactions.map(a => a.currencyCode)
    // Filter the array to eliminate repeated years
    let uniqueCurrencies = currencies.filter((elem, pos, arr) => {
      return arr.indexOf(elem) === pos
    })
    return uniqueCurrencies
  }
}

export default getters
