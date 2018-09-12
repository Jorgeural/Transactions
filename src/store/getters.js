const getters = {
  getTransactions: state => state.transactions,
  getTransactionsRequestError: state => state.transactionsRequestError,
  getTransactionsTypes: state => {
    // Obtain Types
    let types = state.transactions.map(a => a.action)

    // Filter the array to eliminate repeated years
    let uniqueTypes = types.filter((elem, pos, arr) => {
      return arr.indexOf(elem) === pos
    })

    return uniqueTypes
  },
  getTransactionsCurrencies: state => {
    // Obtain currencies
    let currencies = state.transactions.map(a => a.currencyCode)

    // Filter the array to eliminate repeated years
    let uniqueCurrencies = currencies.filter((elem, pos, arr) => {
      return arr.indexOf(elem) === pos
    })

    return uniqueCurrencies
  }
}

export default getters
