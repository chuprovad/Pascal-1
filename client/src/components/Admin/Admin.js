import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { signUpAdmin } from "../../redux/actions/userinfo.action";

function Admin() {

  const [userAdminSignUp, setUserAdminSignUp] = useState({
    name: '',
    email: '',
    password: '',
    title: '',
    categoryId: '',
    cuisineId: '',
    avarageCoast: '',
    capacity: ''
  })
  
  const changeHandler = (e) => {
    setUserAdminSignUp(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const dispatch = useDispatch()
  let navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    let payload = Object.entries(userAdminSignUp).filter((el) => el[1] ? el[1].trim() : el[1])
    if (payload.length) {
      payload = Object.fromEntries(payload)
      dispatch(signUpAdmin(payload, navigate))
    }
  }

  return (
    <div>
      <h1>админ</h1>
      <input onChange={changeHandler} name="name" value={userAdminSignUp.name} placeholder='name' type="text" />
      <br />
      <input onChange={changeHandler} name="email" value={userAdminSignUp.email} placeholder='email' type="email" />
      <br />
      <input onChange={changeHandler} name="password" value={userAdminSignUp.password} placeholder='password' type='password' />
      <br />
      <h1>Информация о вашем ресторане</h1>
      <input onChange={changeHandler} placeholder='title' name="title" value={userAdminSignUp.title} type="text" />
      <br />
      <input onChange={changeHandler} placeholder='categoryId' name="categoryId" value={userAdminSignUp.categoryId} type='number' />
      <br />
      {/* <select >
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option defaultValue="2">Two</option>
        <option defaultValue="3">Three</option>
      </select> */}
      <input onChange={changeHandler} placeholder='cuisineId' name="cuisineId" value={userAdminSignUp.cuisineId} type='number' />
      <br />
      <input onChange={changeHandler} placeholder='avarageCoast' name="avarageCoast" value={userAdminSignUp.avarageCoast} type='number' />
      <br />
      <input onChange={changeHandler} placeholder='capacity' name="capacity" value={userAdminSignUp.capaciti} type='text' />
      <br />
      <button onClick={submitHandler} >Зарегистрироваться</button>
    </div>
  )
}

export default Admin
