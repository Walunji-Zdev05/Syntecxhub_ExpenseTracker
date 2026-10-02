import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import './index.css'
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);
  function addExpense(newExpense)
  {
  setExpenses([...expenses, newExpense]);
  }


  

  return (
    <div>
      <h1 className= "text-4xl font-bold">Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
      
    </div>
    
  );
}


export default App
