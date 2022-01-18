import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { signUp } from "../../redux/actions/userinfo.action";

function Inputuser({ who }) {

  const all = useSelector(state => state)
  console.log(all);
  let navigate = useNavigate()

  const [userSignUp, setUserSignUp] = useState({
    name: '',
    email: '',
    password: '',
  })

  const changeHandler = (e) => {
    setUserSignUp(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    let payload = Object.entries(userSignUp).filter((el) => el[1] ? el[1].trim() : el[1])
    if (payload.length) {
      payload = Object.fromEntries(payload)
      dispatch(signUp(payload, navigate))
      
    }
  }

  return (

    <div>
      {who === false && (
        <>
          <h1>Registr</h1>
          <input onChange={changeHandler} name="name" value={userSignUp.name} placeholder='name' type="text" />
          <br />
          <input onChange={changeHandler} name="email" value={userSignUp.email} placeholder='email' type="email" />
          <br />
          <input onChange={changeHandler} name="password" value={userSignUp.password} placeholder='password' type='password' />
          <br />
          <button onClick={submitHandler}>Зарегистрироваться как пользователь</button>
        </>
      )}
    </div>
  )
}

export default Inputuser
