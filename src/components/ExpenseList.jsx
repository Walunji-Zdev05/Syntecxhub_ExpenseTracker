import ExpenseItem from "./ExpenseItem";
function ExpenseList({expenses}){
    return(
        <div>
            <h2 className="mb-4 text-2xl font-bold">Expenses</h2>
        
        <div className="space-y-4">
            {expenses.map((expense, index) =>(
                <ExpenseItem key={index} expense={expense}/>
            ))}
        </div>
        </div>
    );
}
export default ExpenseList;