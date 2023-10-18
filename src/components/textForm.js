import React, {useState} from 'react'

export default function TextForm(props) {
  
    const [ text, setText] = useState('Enter text here');
    
    
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText (newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    
    const handleDownClick = ()=>{
        let newText1 = text.toLowerCase();
        setText (newText1);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick = ()=>{
        let newText2 = "Enter text here";
        setText (newText2);
        props.showAlert("Text cleared!", "success");
    }
 
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    
    return (
        <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#244969':'white' , color:props.mode==='dark'?'white':'black'}} id="myBox" rows="16"></textarea>
        </div>
        <button className="btn btn-primary m-1 my-1" showAle onClick={handleUpClick} >Convert to uppercase</button>
        <button className="btn btn-success m-1 my-1" onClick={handleDownClick} >Convert to lowercase</button>
        <button className="btn btn-danger  m-1 my-1 rounded-5 " onClick={handleClearClick} >Clear</button>
        
    </div>
    <div className="container m-3 " style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
    </div>
    </>
  )
}
