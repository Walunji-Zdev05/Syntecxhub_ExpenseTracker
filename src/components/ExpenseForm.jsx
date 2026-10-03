import { useState, useRef, useEffect } from "react";

function ExpenseForm({addExpense}){
    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const nameInputRef = useRef(null);
    const categoryInputRef = useRef(null);
    const descriptionInputRef = useRef(null)
    useEffect(()=>{
        nameInputRef.current.focus()
    }, [])
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
                ref={nameInputRef}
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
                onChange={(e)=> setCategory(e.target.value)
                 }
                 ref={categoryInputRef}
                />
            <textarea
                placeholder="Description"
                value = {description}
                onChange={(e) => setDescription(e.target.value)}
                ref={descriptionInputRef}
                 />
            <button type="submit">Add Expense</button>
       </form>

    );

    
}
export default ExpenseForm;