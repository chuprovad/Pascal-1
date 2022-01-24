import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import { THUNK_addReservationToDB, THUNK_addReservationToDBAdmin, THUNK_editRestaurant, THUNK_getRestaurantFromDB, THUNK_minusReservationToDB } from "../../redux/actions/restaurant.action";
import { addNewIncident, getIncidents } from "../../redux/actions/upload.action";
import { checkAuth } from "../../redux/actions/userinfo.action";
import CapacityProgressBar from "../UI/CapacityProgressBar/CapacityProgressBar";
import PicturesGallery from "../UI/PicturesGallery/PicturesGallery";
import StarRating from "../UI/StarRating/StarRating";
import classes from './PageAdmin.module.css'

function PageAdmin() {

  const [loader, setLoader] = useState(true)
  const [newInput, setNewInput] = useState(false)



  const userState = useSelector(state => state.userInfo)
  const allState = useSelector(state => state)
  const restState = useSelector(state => state.restaurant)

  const [edit, setEdit] = useState(false)
  const [visible, setVisible] = useState(true)
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

  const dispatch = useDispatch()
  useEffect(() => {

    if (userState && userState.restaurantId) {
      dispatch(THUNK_getRestaurantFromDB(userState.restaurantId))

    }
  }, [userState])

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


  function clickChange() {

    setNewInput(!newInput)
  }

  const capactityPercantage = Math.round((restState?.bookedTables / restState?.capacity * 100));
 

  const ratingArr = restState?.rating;
  let restaurantRating = 0;
  if (ratingArr?.length > 0) {
    restaurantRating = (ratingArr?.reduce((sum, current) => sum + current, 0) / ratingArr?.length).toFixed(1)
  }

  const notify1 = () => toast.warn("Reservation canceled!");

  function minus() {
    let restaurantId = userState.restaurantId
    dispatch(THUNK_minusReservationToDB({ restaurantId }))
    notify1()
  }

  const notify = () => toast.success("Add new reservation");

  function onePlus() {
    let restaurantId = userState.restaurantId
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


  const upload = useRef()

  function handleSubmit(e) {
    e.preventDefault();
    const newIncident = {
      restaurantId: restState.id,
      img: upload.current.value,
    };
    dispatch(addNewIncident(newIncident, upload.current.files[0]));
    dispatch(getIncidents());
  }

  const [image, setImage] = useState(null);
  const [reader] = useState(new FileReader());


  function imageHandler() {
    reader.readAsDataURL(upload.current.files[0]);
    reader.addEventListener("load", function () {
      setImage(reader.result);
    });
  }




  return (

    <div className={classes.wrapper}>

      {loader && (

        <div className={classes.form__wrapper}>
          {edit === false && (
            <>
            <h1 className={classes.form__title}>
                {restState?.title}
            </h1>
            <div className={classes.form}>
   
              <div className={classes.rest__info}>


                <div className={classes.order__info}>
                  <ul className={classes.ul__info}>
                    <li>
                      Booked tables:
                      <CapacityProgressBar bgcolor={getProgressBarColor(Number(capactityPercantage))} completed={Number(capactityPercantage)} />
                    </li>
                    <li><StarRating restaurantRating={Math.round(Number(restaurantRating))} /></li>
                    <li>Rating: {restaurantRating}</li>
                    <li>Average cost: {restState?.avarageCoast}</li>
                    <li>Category: {restState?.category}</li>
                    <li>Cuisine: {restState?.cuisine}</li>
                    <li>City: {restState["Adress.city"]}</li>
                    <li>Street: {restState["Adress.street"]}</li>
                    <li>Building: {restState["Adress.building"]}</li>
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

              </div>
              {/*  */}
              <div className={classes.booking_and_photo}>
                <div className={classes.order__info} >
                  <div className={classes.booked__tables}>Booked tables: {restState?.bookedTables}</div>
                  <button className={classes.btn__count} onClick={minus} >Cancel</button>
                  <button className={classes.btn__count} onClick={onePlus} >Add</button>
                </div>
                  <form className={classes.order__info_form} onSubmit={handleSubmit} >
                    <label className={visible ? `${classes.img__label} ${classes.active}` :  `${classes.img__label} ${classes.non_active}`} htmlFor="file">Add photo</label>
                  <input 
                    className={classes.img__input}
                    type="file"
                    name="file"
                    id="file"
                    ref={upload}
                    onChange={imageHandler}
                    onClick ={()=>setVisible(false)}
                  />
                  <div className={classes.send__btn}>
                      <button className={classes.send__btn1} type="submit">
                      Upload photo
                    </button>
                  </div>
                </form>
              </div>

              <div className={classes.img__wrap}>
                {allState.incident.length === 1 && (
                  <>
                    <img className={classes.img__rest} src={`http://localhost:3002/uploads/${allState.incident[0]?.path}`} />

                  </>
                )}
              </div>
              
            </div>
            </>

          )}

          {edit && (
            <div className={classes.edit}>
              <h1 className={classes.edit__title}>Edit rest info</h1>
              <div className={classes.edit__form}>
                <div className={classes.edit__col}>
                  <p>title</p>
                  <input onChange={changeHandler} name="title" value={dataRest?.title} placeholder='title' type="text" />
                </div>
                <div className={classes.edit__col}>
                  <p>average cost</p>
                  <input onChange={changeHandler} name="avarageCoast" value={dataRest?.avarageCoast} placeholder='average cost' type="text" />
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

                <button onClick={editRest}>Save changes</button>

              


              </div>
            </div>
          )}
        </div>
      )}      
    </div>
  )
}


export default PageAdmin
