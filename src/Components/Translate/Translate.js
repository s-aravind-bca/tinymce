import React, { useState } from "react";
import "./translate.css";
import { Textarea } from "@mui/joy";
import { Button } from "@mui/material";
import axios from 'axios';
import swal from 'sweetalert2';

const Translate = () => {
  const [from, setFrom] = useState('english')
  const [to, setTo] = useState('english')
  const [text, setText] = useState('')
  const [output, setOutput] = useState('')

  const submitForm = async(e)=>{
    e.preventDefault();
    axios.post('http://localhost:7000/api/v1/user/translate',{ from, to, text } )
    .then((response)=>{
        if(!(response.status === 200)){
          swal.fire({
            title:"Error",
            text:response.data,
            icon:"error"
          })
          return
        }
        swal.fire({
          title:"Success",
          icon:"success",
          timer:1000
        })
         setOutput(response.data)
    }).catch((err)=>{
      swal.fire({
        title:"Error",
        text: err.message,
        icon:"error"
      })
    })
  }

  return ( 
    <>
      <form className="container" onSubmit={submitForm}>
        <div className="section left">
          <div className="dropdown">
            From: <select onChange={(e)=> setFrom(e.target.value)} name="language" className="select" required id="fromlang">
              <option value="english">English</option>
              <option value="tamil">Tamil</option>
              <option value="hindi">Hindi</option>
            </select>
          </div>
          <Textarea required onChange={(e)=> setText(e.target.value)} className="box" minRows={10} maxRows={10} placeholder="Type something..." />
        </div>
        <Button variant='contained' type="submit">Translate</Button>
        <div className="section right">
          <div className="dropdown">
          To: <select name="language" onChange={(e)=> setTo(e.target.value)} className="select" required id="tolang">
              <option value="english">English</option>
              <option value="tamil">Tamil</option>
              <option value="hindi">Hindi</option>
            </select>
          </div>
          <Textarea className="box" value={output} minRows={10} maxRows={10} placeholder="Your output here..." />
        </div>
      </form>
    </>
  );
};

export default Translate;