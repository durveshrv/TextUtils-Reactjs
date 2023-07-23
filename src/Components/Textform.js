import React,{useState} from 'react'


export default function Textform(props) {
  const [text,setText]=useState("") 
  const handleUpClick=()=>{
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase","success");
  }
  const handleLowClick=()=>{
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase","success");
  }
  const handleClearClick=()=>{
    setText("")
  }
  const handleCopy=()=>{
    var text=document.getElementById("exampleFormControlTextarea1");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied the text","success");
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed the extra spaces","success");
  }
  const handleOnChange=(event)=>{
    setText(event.target.value)
  }
  return (
    <>
    <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',
      color:props.mode==='light'?'black':'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button className='btn btn-primary'onClick={handleUpClick}>Convert Upper-case</button>
      <button className='btn btn-primary mx-2'onClick={handleLowClick}>Convert Lower-case</button>
      <button className='btn btn-primary mx-2'onClick={handleClearClick}>Clear the text</button>
      <button className='btn btn-primary mx-2'onClick={handleCopy}>Copy the text</button>
      <button className='btn btn-primary mx-2'onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
