import React,{useState} from 'react'

export const TextArea = (props) => {
    const [text, settext] = useState("")
    const handleUppercase=()=>{
        let newText=text.toUpperCase();
        settext(newText);
        props.toastClick("Click Uppercase")
    }//uppercase
    const handleLowercase=()=>{
        settext(text.toLowerCase())
        props.toastClick("Click Lowercase")
    }//lowercase
    const handleEvent=(event)=>{
        settext(event.target.value);
        
    }
    const handleClear=()=>{
        settext("")
    }
    const handleExtraSpace=()=>{
        settext(text.split(/[ ]+/).join(" "))
        props.toastClick("Remove ExtraSpace")
    }
    const handleCopy=()=>{
        let text=document.getElementById("exampleFormControlTextarea1")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.toastClick("Copy in Clipboard ")
    }
    return (
        <>
            <div className="container mt-5  ">
                <h1 className={`text-left text-${props.color==='light'?'dark':'light'}`}>Enter the text here</h1>
                <div className="form-group">
                    <textarea className={`form-control bg-${props.color==='light'?'light':'dark'} text-${props.color==='light'?'dark':'light'}`} value={text} id="exampleFormControlTextarea1" rows="10" placeholder='Enter text here' onChange={handleEvent}></textarea>
                </div>
                <button className={`btn btn-primary mr-4 `} onClick={()=>{handleUppercase()}}>Convert to Uppercase</button>
                <button className={`btn btn-primary mr-4 `} onClick={handleLowercase}>Convert to Lowercase</button>
                <button className={`btn btn-primary mr-4 `} onClick={handleClear}>Clear Text</button>
                <button className={`btn btn-primary mr-4 `} onClick={handleCopy}>Copy Text</button>
                <button className={`btn btn-primary mr-4 `} onClick={handleExtraSpace}>Remove ExtraSpace</button>
            </div>
            <div className="container text-left">
                <h2 className={`text-${props.color==='light'?'dark':'light'}`}>Your text Summary</h2>
                <p className={`text-${props.color==='light'?'dark':'light'}`} >{text===""?0:text.trim().split(" ").length} words and {text.length} Characters</p>
                <p className={`text-${props.color==='light'?'dark':'light'}`}>{text===""?0:0.008* text.trim().split(" ").length} Minutes to read</p>
                <h2 className={`text-${props.color==='light'?'dark':'light'}`}>Preview</h2>
                <p className={`text-${props.color==='light'?'dark':'light'}`}>{text}</p>
            </div>
        </>
    )
}
