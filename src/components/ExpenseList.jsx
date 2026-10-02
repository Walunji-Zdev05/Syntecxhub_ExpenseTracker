import ExpenseItem from "./ExpenseItem";
function ExpenseList({expenses}){
    return(
        <div>
            <h2>Expenses</h2>
            {expenses.map((expense, index) =>(
                <ExpenseItem key={index} expense={expense}/>
            ))}
        </div>
    );
}
export default ExpenseList;