import "./App.css";
import { Navbar } from "./components/Navbar";
import { TextArea } from "./components/TextArea";
import {useState} from "react";
import { Alert } from "./components/Alert";

function App() {
  const [color, setcolor] = useState("light")//for color
  const [setToast, setsetToast] = useState(null)//for toast 
  const changeC=()=>{
    if(color==='light'){
      setcolor('dark')
      setsetToast("Dark Mode Successfully Enabled")
      document.body.style.backgroundColor="#00224b"
    }else{
      setcolor('light')
      document.body.style.backgroundColor="white"
      setsetToast("Light Mode Successfully Enabled")
    }
  }
  const toastClick=(mess)=>{
    console.log("in");
    setsetToast(mess)
  }
  
  
  return (
    <div className="App">
      <Navbar title="Quesbuddy" color={color} changeC={changeC} />
      <Alert setToast={setToast}/>
      <div className="container">
        <TextArea color={color} toastClick={toastClick}/>
      </div>  
    </div>
  );
}

export default App;
