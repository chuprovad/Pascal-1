import { useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { signUpAdmin } from "../../redux/actions/userinfo.action";
import classes from './Admin.module.css'
import Selector from "../UI/Selector/Selector";

function Admin() {

  const upload = useRef()

  const [options, setOptions] = useState([
    { value: '1', name: 'Bar' },
    { value: '2', name: 'Restaurant' },
    { value: '3', name: 'Coffee shop' },
    { value: '4', name: 'Cafe' },
    { value: '5', name: 'Burgers' },
  ])

  const [items, setItems] = useState([
    { value: '1', name: 'Italian' },
    { value: '2', name: 'French' },
    { value: '3', name: 'Japanese' },
    { value: '4', name: 'Irish' },
    { value: '5', name: 'Russian' },
    { value: '5', name: 'Belgian' }
  ])


  const [userAdminSignUp, setUserAdminSignUp] = useState({
    name: '',
    email: '',
    password: '',
    title: '',
    categoryId: "1",
    cuisineId: "1",
    avarageCoast: '',
    capacity: '',
    city: '',
    street: '',
    building: ''
  })
  const changeHandler = (e) => {
    console.log('gdr')
    setUserAdminSignUp(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }


  const dispatch = useDispatch()
  let navigate = useNavigate()

  const submitHandler = (e) => {

    e.preventDefault()

    let payload = Object.entries(userAdminSignUp).filter((el) => el[1] ? el[1].trim() : el[1])
    console.log(userAdminSignUp)
    console.log(payload)
    if (payload.length) {
      payload = Object.fromEntries(payload)
      dispatch(signUpAdmin(payload, navigate))
    }
  }

  return (
    <div className={classes.form}>
      <h1 className={classes.form__title}>USER &nbsp;INFORMATION</h1>
      <div className={classes.form__box}>
        <input onChange={changeHandler} name="name" value={userAdminSignUp.name} placeholder='name' type="text" />
        <input onChange={changeHandler} name="email" value={userAdminSignUp.email} placeholder='email' type="email" />
        <input onChange={changeHandler} name="password" value={userAdminSignUp.password} placeholder='password' type='password' />
      </div>
      <h1 className={classes.form__title}>Information &nbsp;about &nbsp;your &nbsp;restaurant</h1>
      <div className={classes.form__row}>
        <div className={classes.form__col}>
          <input onChange={changeHandler} placeholder='title' name="title" value={userAdminSignUp.title} type="text" />
          {/*<input onChange={changeHandler} placeholder='category' name="categoryI" value={userAdminSignUp.categoryId} type='text' />*/}

          {/*<input onChange={changeHandler} placeholder='cuisine' name="cuisineId" value={userAdminSignUp.cuisineId} type='text' />*/}
          <select value={userAdminSignUp.categoryId ? userAdminSignUp.categoryId : 1}
                  className={classes.form__select}
                  onChange={changeHandler} placeholder='category' name="categoryId"
          >
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
          </select>
          <select 
                  className={classes.form__select}
                  value={userAdminSignUp.cuisineId ? userAdminSignUp.cuisineId : 1}

                  onChange={changeHandler} placeholder='cuisine' name="cuisineId"
          >
            {items.map(item =>
                <option key={item.value} value={item.value}>{item.name}</option>
            )}
          </select>
          <input onChange={changeHandler} placeholder='average cost' name="avarageCoast" value={userAdminSignUp.avarageCoast} type='number' />
        </div>
        <div className={classes.form__col}>
          <input onChange={changeHandler} placeholder='capacity' name="capacity" value={userAdminSignUp.capaciti} type='text' />
          <input onChange={changeHandler} placeholder='city' name="city" value={userAdminSignUp.city} type='text' />
          <input onChange={changeHandler} placeholder='street' name="street" value={userAdminSignUp.street} type='text' />
          <input onChange={changeHandler} placeholder='building' name="building" value={userAdminSignUp.building} type='text' />
        </div>

      </div>

      <div className={classes.form__btn_wrapper}>
        <button onClick={submitHandler} >Sign up</button>
      </div>
    </div>
  )
}

export default Admin
