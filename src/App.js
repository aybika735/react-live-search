import { fakeDatabase } from "./fakeDatabase";
import { useState } from "react";

function App() {
  const [todos] = useState(fakeDatabase);
  const [copytodos, setCopytodos] = useState(todos);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
    console.log(value);
    const filteredtodo = todos.filter((todo) => {
      return todo.text.toLowerCase().includes(value.toLowerCase());
    });
    setCopytodos(filteredtodo);
    if (e.target.value === "") {
      setCopytodos(todos);
    }
  };
  return (
    <div className="App">
      <form className="form-card">
        <input className="input-card" onChange={(e) => handleChange(e)} />
      </form>
      <div className="container">
        {copytodos.map((item) => {
          return (
            <div className="card">
              <div className="card-image">
                <img src={item.image} alt="" />
              </div>
              <div className="card-info">
                <div lassName="card-poFd">
                  <div className="card-inf">
                    <div className="card-name">{item.text}</div>
                    <div className="inf-button">
                      <button className="btn_detalis">Детали</button>
                    </div>
                  </div>
                  <div className="card-price">$ {item.price} </div>
                </div>
                <hr></hr>
                <div className="card-text">
                  loreem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi, dignissimos.
                </div>
                <div className="card-button">
                  <button className="btn">Добавить в корзину</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
