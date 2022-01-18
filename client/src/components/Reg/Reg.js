import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Admin from "../Admin/Admin";
import Inputuser from "../Inputuser/Inputuser"
import PageAdmin from "../PageAdmin/PageAdmin";





function Reg() {
const user = useSelector(state => state.userInfo)
  const [who, setWho] = useState(false)

  function clickChange() {

    setWho(!who)
  }

  // useEffect(()=>{

  // }, [])

  return (
    <div>
      <input type="checkbox" onClick={clickChange} />
      <label >Check me out</label>
      <br />
      <Inputuser who={who} />
      {who === true && (
        <Admin />
      )
      }
    
    </div >

  )
}

export default Reg
