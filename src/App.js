import './App.css';
import {useState} from 'react';

function App() {
  const [weight, setWeight] = useState(70);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [endresult, setEndresult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    let result = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsl = grams - (burning * time)

    if (gender === 'male') {
      result = gramsl / (weight * 0.7)
    }
    else {
      result = gramsl / (weight * 0.6)
    }
    
    if (result < 0) {
      setEndresult(0);
     }
     
     setEndresult(result);
  }


  return (
    <div className="container-fluid m-auto">
    <h3 className="row justify-content-center p-4">Calculate your alchol blood level</h3>
    <form onSubmit={handleSubmit} className="row p-3 justify-content-center">
      <div className="col-2">
        <label>Weight</label>
        <input type="number" step="1" value={weight}
        onChange={(e) => setWeight(e.target.value)}className="form-control"></input>
      </div>
      <div className="col-2">
        <label>Bottles</label>
        <select name="bottles" value={bottles} onChange={(e) => setBottles(e.target.value)} className="form-select col">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
      <div className="col-2">
        <label>Time</label>
        <select name="time" value={time} onChange={(e) => setTime(e.target.value)} className="form-select col">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        </select>
      </div>
      <div>
      </div>
      <div className="col-2">
        <label className="p-2">Gender:</label>
        <input type="radio" value="male" 
        onChange={(e) => setGender(e.target.value)}/><label className="p-2">Male</label>
        <input type="radio" value="female"
        onChange={(e) => setGender(e.target.value)} /><label className="p-2">Female</label>
      </div>
      <div>
        <p className="row justify-content-center">Your alchol blood level is:</p>
        <output className="row justify-content-center">{endresult.toFixed(2)}</output>
      </div>
      <button className="btn btn-primary col-1 m-2">Calculate</button>
    </form>
    </div>
  );
}

export default App;
