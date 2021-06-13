import "./Card.css";

const NewIncome = () => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 CardContainer">
      <div className="CardBox">
        <h3>--- Salary ---</h3>
        <form>
          <label>Amount:</label>
          <input type="number" />
          <label>Date:</label>
          <select name="Day" id="Day">
            <option value="01">01</option>
            <option value="02">02</option>
          </select>
          <select name="Month" id="Month">
            <option value="jan">Janúar</option>
            <option value="feb">Febrúar</option>
          </select>
          <select name="Year" id="Year">
            <option value="2020">2020</option>
            <option value="2021">2021</option>
          </select>
          <button>Add</button>
        </form>
      </div>
    </div>
  );
};

export default NewIncome;
