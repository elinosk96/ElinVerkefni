import "./Card.css";

const NewPlan = () => {
  return (
    <div class="col-sm-12 col-md-6 col-lg-3 CardContianer">
      <div class="CardBox">
        <h3>--- Plans ---</h3>
        <form>
          <label>Description:</label>
          <input type="text" />
          <label>Date for plan:</label>
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

export default NewPlan;
