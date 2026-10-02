import { useState } from "react";

function ExpenseForm({addExpense}){
    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        const newExpense = {
            name,
            amount,
            category,
            description

        };
        addExpense(newExpense)
        


    }

    return(
        <form onSubmit={handleSubmit}>

            <input 
                type="text" 
                placeholder="Expense Name"
                value= {name}
                onChange={(e) => setName(e.target.value)}
                />
            <input
                type="number" 
                placeholder="Amount"
                value={amount} 
                onChange={(e) => setAmount(e.target.value)}
                />
            <input 
                type="text" 
                placeholder="Category"
                value={category}
                onChange={(e)=> setCategory(e.target.value) }
                />
            <textarea
                placeholder="Description"
                value = {description}
                onChange={(e) => setDescription(e.target.value)}
                 />
            <button type="submit">Add Expense</button>
       </form>

    );

    
}
export default ExpenseForm;