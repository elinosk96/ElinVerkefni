import Header from "./Header";
import NewInformation from "./NewInformation";

import "./App.css";

function App() {
  const totalMoney = "273.749";

  const nextPlan = "3";

  return (
    <div className="App">
      <Header money={totalMoney} plan={nextPlan} />
      <NewInformation />
    </div>
  );
}

export default App;
