import "./App.css";
import { useState } from "react";
import DisplayItems from "./Components/DisplayItems";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  const YOUR_APP_ID = "a9c97ff5";
  const YOUR_APP_KEY = "a440868204f582f4f970834174b7455c";
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://api.edamam.com/search?q=${item}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`
    )
      .then((response) => response.json())
      .then((data) => setItems(data.hits));
  };
  return (
    <div className="App">
      <h1>Food Displaying App Using React JS</h1>
      <form className="m-4" onSubmit={submitHandler}>
        <input
          type="text"
          name="item"
          value={item}
          placeholder="Enter your favourate item"
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <input
          type="submit"
          name="search"
          value="search"
          className="btn-success"
        />
      </form>
      {item.length > 1 ? <DisplayItems items={items} /> : null}
    </div>
  );
}

export default App;
