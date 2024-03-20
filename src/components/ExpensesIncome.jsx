import { useGlobalState } from "../context/GlobalState"

function ExpensesIncome() {

  const {transactions} = useGlobalState()
  
  const amounts = transactions.map(transaction => transaction.amount)

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)

  const expense = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0)

    console.log(income, 'Ingresos')
    console.log(expense, 'Gastos')
    
  return (
    <div className="columns-2 text-center">
      <div>
        <h3 className="">Ingresos</h3>
        <p className="text-xl">${income}</p>
      </div>
      <div>
        <h3 className="">Gastos</h3>
        <p className="text-xl">${expense}</p>
      </div>
    </div>
  )
}

export default ExpensesIncome