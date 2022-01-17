import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { THUNK_getRestaurantFromDB } from "../../redux/actions/restaurant.action";
import CapacityProgressBar from "../UI/CapacityProgressBar/CapacityProgressBar";
import StarRating from "../UI/StarRating/StarRating";

function PageAdmin() {

  const userState = useSelector(state => state.userInfo)
  const allState = useSelector(state => state)
  const restState = useSelector(state => state.restaurant)
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


  return (
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
        <li>Category: {restState.categoryId}</li>
        <li>Cuisine: {restState.cuisineId}</li>
      </ul>
    </div>
  )
}


export default PageAdmin
