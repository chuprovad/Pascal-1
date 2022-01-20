import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import { THUNK_addReservationToDB, THUNK_addReservationToDBAdmin, THUNK_editRestaurant, THUNK_getRestaurantFromDB, THUNK_minusReservationToDB } from "../../redux/actions/restaurant.action";
import { checkAuth } from "../../redux/actions/userinfo.action";
import CapacityProgressBar from "../UI/CapacityProgressBar/CapacityProgressBar";
import PicturesGallery from "../UI/PicturesGallery/PicturesGallery";
import StarRating from "../UI/StarRating/StarRating";
import classes from './PageAdmin.module.css'

function PageAdmin() {



  // useEffect(() => {
  //   if (userState.restaurantId) {
  //     console.log('useeffect')
  //     dispatch(THUNK_getRestaurantFromDB(userState.restaurantId))
  //   }
  // }, [userState.restaurantId])
  const [loader, setLoader] = useState(true)
  // useEffect(() => {
  //   setLoader(false)
  // }, [])
  const [newInput, setNewInput] = useState(false)



  const userState = useSelector(state => state.userInfo)
  const allState = useSelector(state => state)
  const restState = useSelector(state => state.restaurant)
  console.log(';', restState);
  const [edit, setEdit] = useState(false)

  const [dataRest, setDataRest] = useState({
    title: '',
    categoryId: '',
    cuisineId: '',
    avarageCoast: '',
    capacity: '',
    city: '',
    street: '',
    building: ''
  })

  const changeHandler = (e) => {
    setDataRest(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }



  // console.log(allState);
  console.log("====>", { restState, userState });
  // console.log(userState.restaurantId);
  const dispatch = useDispatch()
  useEffect(() => {

    if (userState && userState.restaurantId) {
      console.log('useeffect')
      dispatch(THUNK_getRestaurantFromDB(userState.restaurantId))

    }
  }, [userState])

  // useEffect(()=>{

  // }, [])

  console.log('---->', allState);

  const getProgressBarColor = (percantage) => {
    let bgcolor = '';

    if (percantage <= 30) bgcolor = "green";
    else if (percantage <= 70) bgcolor = "orange";
    else bgcolor = "red";

    return bgcolor;
  }

  function getInput() {
    setEdit(true)
  }

  function editRest(e) {
    e.preventDefault()
    dispatch(THUNK_editRestaurant (dataRest, userState.restaurantId))
      setEdit(false)
  }
  console.log(edit);

  function clickChange() {

    setNewInput(!newInput)
  }

  const capactityPercantage = Math.round((restState?.bookedTables / restState?.capacity * 100));
  // для изменения брони
  console.log(restState?.bookedTables);
  const ratingArr = restState?.rating;
  const restaurantRating = (ratingArr?.reduce((sum, current) => sum + current, 0) / ratingArr?.length).toFixed(1)

  const notify1 = () => toast.warn("Reservation canceled!");  
  
  function minus() {
    let restaurantId = userState.restaurantId
    dispatch(THUNK_minusReservationToDB({ restaurantId }))
    notify1()
  }
  
  const notify = () => toast.success("Add new reservation");  
  
  function onePlus() {
    let restaurantId = userState.restaurantId
    console.log(restaurantId);
    dispatch(THUNK_addReservationToDBAdmin({ restaurantId }))
    notify() 
  }

  function editD() {
    setDataRest({
      title: restState.title,
      categoryId: restState?.categoryId,
      cuisineId: restState?.cuisineId,
      avarageCoast: restState?.avarageCoast,
      capacity: restState?.capacity,
      city: restState['Adress.city'],
      street: restState['Adress.street'],
      building: restState['Adress.building']
    })
  }



  return (

    <div>
      {/* //   {!loader && ( */}
      {/* //     <h1>MINYTY</h1> */}
      {/* //   )} */}

      {loader && (

        <>
          {edit === false && (
            <div className={classes.form}>
              <h1 className={classes.form__title}>
                {restState?.title}
              </h1>
              <div className={classes.rest__info}>
                <div className={classes.order__info}>
                  <ul className={classes.ul__info}>
                    <li>
                      Booked tables:
                      <CapacityProgressBar bgcolor={getProgressBarColor(capactityPercantage)} completed={capactityPercantage} />
                    </li>
                    <li><StarRating restaurantRating={Math.round(restaurantRating)} /></li>
                    <li>Rating: {restaurantRating}</li>
                    <li>avarageCoast: {restState?.avarageCoast}</li>
                    <li>Category: {restState?.categoryId}</li>
                    <li>Cuisine: {restState?.cuisineId}</li>
                  </ul>
                  <button
                    className={classes.btn__edit} onClick={() => {
                      getInput()
                      editD()
                    }}
                  >
                    Edit
                  </button>
                </div>
                <ToastContainer position="top-right"
                  theme="colored"
                  autoClose={5000}
                  hideProgressBar={true}
                  newestOnTop={false}
                  closeOnClick
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover/>
                <div className={classes.order__info} >
                  <div className={classes.foto__info}>
                    <PicturesGallery restaurantDataFromState={restState} />
                  </div>
                  <div>BookedTables: {restState?.bookedTables}</div>
                  <button className={classes.btn__count} onClick={minus} >Cancel</button>
                  <button className={classes.btn__count} onClick={onePlus} >Add</button>
                  {/* <input type="checkbox" onClick={clickChange} />
                  <label >Check me out</label> */}
                  {newInput && (
                    <>
                      <input />
                      <button> Edit</button>
                    </>
                  )}
                </div>
              </div>
            </div>

          )}

          {edit && (
            <div className={classes.edit}>
              <h1 className={classes.edit__title}>Edit Rest</h1>
              <div className={classes.edit__form}>
                <div className={classes.edit__col}>
                  <p>title</p>
                  <input onChange={changeHandler} name="title" value={dataRest?.title} placeholder='title' type="text" />
                </div>
                <div className={classes.edit__col}>
                  <p>avarageCoast</p>
                  <input onChange={changeHandler} name="avarageCoast" value={dataRest?.avarageCoast} placeholder='avarageCoast' type="text" />
                </div>
                <div className={classes.edit__col}>
                  <p>category</p>
                  <input onChange={changeHandler} name="categoryId" value={dataRest?.categoryId} placeholder='category' type="text" />
                </div>
                <div className={classes.edit__col}>
                  <p>cuisine</p>
                  <input onChange={changeHandler} name="cuisineId" value={dataRest?.cuisineId} placeholder='cuisine' type="text" />
                </div>
                <div className={classes.edit__col}>
                  <p>capacity</p>
                  <input onChange={changeHandler} name="capacity" value={dataRest?.capacity} placeholder='capacity' type="text" />
                </div>
                <div className={classes.edit__col}>
                  <p>city</p>
                  <input onChange={changeHandler} placeholder='city' name="city" value={dataRest?.city} type='text' />
                </div>
                <div className={classes.edit__col}>
                  <p>street</p>
                  <input onChange={changeHandler} placeholder='street' name="street" value={dataRest?.street} type='text' />
                </div>
                <div className={classes.edit__col}>
                  <p>building</p>
                  <input onChange={changeHandler} placeholder='building' name="building" value={dataRest?.building} type='text' />
                </div>
              <button  onClick={editRest}>Save changes</button>

              </div>
            </div>
          )}
        </>








      )}









      {/* {edit === false && (
        <div>
          <h1>
            {restState?.title}
          </h1>

          <ul>
            <li>
              Booked tables:
              <CapacityProgressBar bgcolor={getProgressBarColor(10)} completed={10} />
            </li>
            <li><StarRating restaurantRating={Math.round(4)} /></li>
            <li>avarageCoast: {restState?.avarageCoast}</li>
            <li>Category: {restState?.categoryId}</li>
            <li>Cuisine: {restState?.cuisineId}</li>
            <h1>1231</h1>
          </ul>
          <button onClick={getInput}>Редактировать</button>


          <div>
            <li>BookedTables: {restState?.bookedTables}</li>
            <button> - 1</button>
            <button> + 1</button>
            <input type="checkbox" onClick={clickChange} />
            <label >Check me out</label>
            {newInput && (
              <>
              <input />
              <button> изменить</button>
              </>
            )}
          </div>

        </div>

      )} */}
      {/* {edit && (
        <div>
          <h1>Edit Rest</h1>
          <input onChange={changeHandler} name="title" value={dataRest.title} placeholder='title' type="text" />
          <br />
          <input onChange={changeHandler} name="avarageCoast" value={dataRest.avarageCoast} placeholder='avarageCoast' type="text" />
          <br />
          <input onChange={changeHandler} name="categoryId" value={dataRest.categoryId} placeholder='category' type="text" />
          <br />
          <input onChange={changeHandler} name="cuisineId" value={dataRest.cuisineId} placeholder='cuisine' type="text" />
          <br />
          <input onChange={changeHandler} name="capacity" value={dataRest.capacity} placeholder='capacity' type="text" />
          <br />
          <input onChange={changeHandler} placeholder='city' name="city" value={dataRest.city} type='text' />
          <br />
          <input onChange={changeHandler} placeholder='street' name="street" value={dataRest.street} type='text' />
          <br />
          <input onChange={changeHandler} placeholder='building' name="building" value={dataRest.building} type='text' />
          <br />
          <button onClick={editRest}>Сохранить изменения</button>
          <br /> */}




      {/* </div> */}
      {/* )} */}

    </div>
  )
}


export default PageAdmin
