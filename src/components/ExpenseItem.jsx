function ExpenseItem({expense}){
    return(
       <div className="rounded-xl bg-white p-5 shadow-md">
            <h3 className="text-xl font-semibold">{expense.name}</h3>
            <p className="mt-2 text-lg font-medium">Amount: {expense.amount}</p>
            <p className="text-sm text-gray-600">Category: {expense.category}</p>
            <p className="mt-2 text-gray-700">{expense.description}</p>
        </div>
            
    );
}
export default ExpenseItem;