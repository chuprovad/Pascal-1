import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { THUNK_getRestaurantFromDB } from "../../redux/actions/restaurant.action";
import CapacityProgressBar from "../UI/CapacityProgressBar/CapacityProgressBar";

//TODO: restaurantID получить из useParams
const restaurantId = 2;

const getProgressBarColor = (percantage) => {
  let bgcolor = '';

  if (percantage <= 30) bgcolor = "green";
  else if (percantage <= 70) bgcolor = "orange";
  else bgcolor = "red" ;

  return bgcolor;
}

export default function RestaurantCard() {

  const dispatch = useDispatch();

  // Получить данные одного ресторана с бэка при монтировании компонента
  useEffect(() => {
    dispatch(THUNK_getRestaurantFromDB(restaurantId));
  }, [])
  
  // Получить данные одного ресторана из стейта
  const restaurantDataFromState = useSelector(state => state.restaurant);
  const capactityPercantage = restaurantDataFromState.bookedTables / restaurantDataFromState.capacity * 100;

  return (
    <div>
      <h1>
        {restaurantDataFromState.title}
      </h1>
      
      <ul>
        <li>
         Booked tables:
          <CapacityProgressBar bgcolor={getProgressBarColor(capactityPercantage)} completed={capactityPercantage} />
        </li>
        {/* //TODO: Добавить рейтинг */}
        <li>Rating:{' '}{restaurantDataFromState.rating}</li> 
        <li>Category:{' '}{restaurantDataFromState.category}</li>
        <li>Address:{' '}{restaurantDataFromState.address}</li>
        <li>Cuisine:{' '}{restaurantDataFromState.cuisine}</li>
      </ul>
    </div>
  );
}
