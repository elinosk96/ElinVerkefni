import "./Card.css";

const NewBill = () => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 CardContianer">
      <div class="CardBox">
        <h3>--- Bills ---</h3>
        <form>
          <label>Description:</label>
          <input type="text" />
          <label>Amount:</label>
          <input type="number" />
          <label>Date:</label>
          <select name="Day" id="Day">
            <option value="01">01</option>
          </select>
          <select name="Month" id="Month">
            <option value="Jan">Janúar</option>
          </select>
          <select name="Year" id="Year">
            <option value="2021">2021</option>
          </select>
          <button>Add</button>
        </form>
      </div>
    </div>
  );
};

export default NewBill;
