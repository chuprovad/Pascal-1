import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { THUNK_getRestaurantFromDB } from "../../redux/actions/restaurant.action";

//TODO: restaurantID получить из useParams
const restaurantId = 2;

export default function RestaurantCard() {
  
  const dispatch = useDispatch();
  
  // Получить данные одного ресторана с бэка при монтировании компонента
  useEffect(() => {
    dispatch(THUNK_getRestaurantFromDB(restaurantId));
  }, [])
  
  const restaurantDataFromState = useSelector(state => state.restaurant);
  // console.log(restaurantDataFromState);

  return (
    <div>
      <h1>
        {restaurantDataFromState.title}
      </h1>

      <ul>
        <li>Rating:{' '}{restaurantDataFromState.rating}</li>
        <li>Category:{' '}{restaurantDataFromState.category}</li>
        <li>Address:{' '}{restaurantDataFromState.address}</li>
        <li>Cuisine:{' '}{restaurantDataFromState.cuisine}</li>
      </ul>
    </div>
  );
}
