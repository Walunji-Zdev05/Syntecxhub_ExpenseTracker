function ExpenseItem({expense}){
    return(
       <div >
            <h3>{expense.name}</h3>
            <p>Amount: {expense.amount}</p>
            <p>Category: {expense.category}</p>
            <p>{expense.description}</p>
        </div>
            
    );
}
export default ExpenseItem;