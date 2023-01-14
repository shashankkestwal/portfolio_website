import {useState} from "react"

export default function useTextState(){
  const [state, setState ] = useState(""); 

  function handleChange(e) {
    setState(e.target.value);
  }

  return [state, handleChange]
}