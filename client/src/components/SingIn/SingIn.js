import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { signIn } from "../../redux/ac/userinfoAc"

function SingIn() {



  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  }
  )

  const changeHandler = (e) => {
    setInputValue(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const dispatch = useDispatch()
  let navigate = useNavigate()


  const submitHandler = (e) => {
    e.preventDefault()
    let payload = Object.entries(inputValue).filter((el) => el[1] ? el[1].trim() : el[1])
    if (payload.length) {
      payload = Object.fromEntries(payload)
      dispatch(signIn(payload, navigate))
    }
    
    

  }

  return (
    <div>
      <input onChange={changeHandler} name="email" value={inputValue.email} placeholder='email' type="email" />
      <br />
      <input onChange={changeHandler} name="password" value={inputValue.password} placeholder='password' type='password' />
      <br />
      <button onClick={submitHandler}>войти</button>
    </div>
  )
}

export default SingIn
