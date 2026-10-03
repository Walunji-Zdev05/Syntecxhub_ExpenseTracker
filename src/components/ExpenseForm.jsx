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
        <form onSubmit={handleSubmit}
        className="mb-8 rounded-xl bg-white p-6 shadow-md"
        >
            <div className="space-y-4">

            <input 
                type="text" 
                placeholder="Expense Name"
                value= {name}
                onChange={(e) => setName(e.target.value)}
                ref={nameInputRef}
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
                />
            <input
                type="number" 
                placeholder="Amount"
                value={amount} 
                onChange={(e) => setAmount(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
                />
            <input 
                type="text" 
                placeholder="Category"
                value={category}
                onChange={(e)=> setCategory(e.target.value)
                }
                ref={categoryInputRef}
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
                />
            <textarea
                placeholder="Description"
                value = {description}
                onChange={(e) => setDescription(e.target.value)}
                ref={descriptionInputRef}
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
                 />
            <button type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700">
                Add Expense
            </button>
            </div>
       </form>

    );

    
}
export default ExpenseForm;