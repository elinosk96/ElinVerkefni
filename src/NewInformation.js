import NewIncome from "./NewIncome";
import NewExpense from "./NewExpense";
import NewBill from "./NewBill";
import NewPlan from "./NewPlan";

const NewInformation = () => {
  return (
    <div className="container row">
      <NewIncome />
      <NewExpense />
      <NewBill />
      <NewPlan />
    </div>
  );
};

export default NewInformation;
