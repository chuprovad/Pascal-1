import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { THUNK_editRestaurant, THUNK_getRestaurantFromDB } from "../../redux/actions/restaurant.action";
import CapacityProgressBar from "../UI/CapacityProgressBar/CapacityProgressBar";
import StarRating from "../UI/StarRating/StarRating";

function PageAdmin() {

  const userState = useSelector(state => state.userInfo)
  const allState = useSelector(state => state)
  const restState = useSelector(state => state.restaurant)
  let restId = userState.restaurantId
  const [edit, setEdit] = useState(false)

  const [dataRest, setDataRest] = useState({
    title: '',
    categoryId: '',
    cuisineId: '',
    avarageCoast: '',
    capacity: ''
  })

  const changeHandler = (e) => {
    setDataRest(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }



  // console.log(allState);
  console.log(userState);
  console.log(userState.restaurantId);
  const dispatch = useDispatch()
  useEffect(() => {
    if (userState.restaurantId) {
      console.log('useeffect')
      dispatch(THUNK_getRestaurantFromDB(userState.restaurantId))
    }
  }, [userState.restaurantId])


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
    let payload = Object.entries(dataRest).filter((el) => el[1] ? el[1].trim() : el[1])
    if (payload.length) {
      payload = Object.fromEntries(payload)
      dispatch(THUNK_editRestaurant(payload, restId))
      setEdit(false)
    }
  }
  console.log(edit);

  return (
    <div>
      {edit === false && (
        <div>
          <h1>
            {restState.title}
          </h1>

          <ul>
            <li>
              Booked tables:
              <CapacityProgressBar bgcolor={getProgressBarColor(10)} completed={10} />
            </li>
            <li><StarRating restaurantRating={Math.round(4)} /></li>
            <li>avarageCoast: {restState.avarageCoast}</li>
            <li>Category: {restState.categoryId}</li>
            <li>Cuisine: {restState.cuisineId}</li>
          </ul>
          <button onClick={getInput}>Редактировать</button>

        </div>

      )}
      {edit && (
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
          <button onClick={editRest}>Сохранить изменения</button>
        </div>
      )}

    </div>
  )
}


export default PageAdmin
