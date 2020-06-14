import React,{ useState } from "react";
import "./styles.css";

export default function App() {
  const [bin,setBin] = useState()
  const [submitted,setSubmitted] = useState(false)
  const handleInput = (e) => {
    setBin(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    
    setSubmitted(!submitted)
    setBin("")
  }
  return (
    <div className="App">
      {submitted?<div>{bin}</div>:<form onSubmit={handleSubmit}>
      <input type="text" value={bin} onChange={handleInput} placeholder="Enter a Decimal"/>
      <button>Decimal</button>
      </form>}
      
    </div>
  );
}
