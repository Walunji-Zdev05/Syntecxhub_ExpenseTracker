import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import './index.css'

function App() {
  const [expenses, setExpenses] = useState([]);
  function addExpense(newExpense)
  {
  setExpenses([...expenses, newExpense]);
  }

<ExpenseForm addExpense={addExpense} />
  

  return (
    <div>
      <h1 className= "text-4xl font-bold">Expense Tracker</h1>
      
    </div>
    
  );
}


export default App
