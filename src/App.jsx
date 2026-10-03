import { useCallback, useEffect, useMemo, useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import './index.css'
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);
  const addExpense = useCallback((newExpense)=>{
  setExpenses([...expenses, newExpense]);
  }, [expenses])
  //use effect
  useEffect(() => {
  async function fetchExpenses() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const data = await response.json();
    const expenses = data.slice(0, 5).map((item) => ({
      name: item.title,
      amount: item.id * 100,
      category: "Other",
      description: item.body
    }));

    setExpenses(expenses);
  }
  fetchExpenses()}, []);
  //usememo
  const total = useMemo(()=>{
    return expenses.reduce(
      (sum, expense) => sum + Number(expense.amount), 
      0
    );
  }, [expenses])
  return (
    <div>
      <h1 className= "text-4xl font-bold">Expense Tracker</h1>
      <h2>total: {total}</h2>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
      
    </div>
    
  );
}


export default App
