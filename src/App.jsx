import {GlobalProvider} from './context/GlobalState'
import Header from './components/Header'
import Balance from './components/Balance'
import TransactionForm from './components/transactions/TransactionForm'
import TransactionList from './components/transactions/TransactionList'
import ExpensesIncome from './components/ExpensesIncome'


function App() {
  return (
      <GlobalProvider>
        <div className='text-white h-screen grid gap-6 mb-6 md:grid-cols-2 justify-center items-center absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
          <div className='w-full sm:w-2/3 mx-auto'>
            <Header/>
            <ExpensesIncome />
            <Balance/>
            <TransactionForm />
          </div>
          <div className='w-full sm:w-1/2'>
          <TransactionList />
          </div>
        </div>
      </GlobalProvider>
  )
}

export default App
