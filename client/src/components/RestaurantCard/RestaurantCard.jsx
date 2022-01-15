import CapacityProgressBar from "../UI/CapacityProgressBar/CapacityProgressBar";
import StarRating from "../UI/StarRating/StarRating";
// import classes from "./RestaurantCard.module.css";

const getProgressBarColor = (percantage) => {
  let bgcolor = '';

  if (percantage <= 30) bgcolor = "green";
  else if (percantage <= 70) bgcolor = "orange";
  else bgcolor = "red" ;

  return bgcolor;
}

export default function RestaurantCard({ restaurantDataFromState }) {

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
        <li><StarRating restaurantRating={restaurantDataFromState.rating} /></li> 
        {/* <li>Rating: {restaurantDataFromState.rating}</li>  */}
        <li>Category: {restaurantDataFromState.category}</li>
        <li>Address: {restaurantDataFromState.address}</li>
        <li>Cuisine: {restaurantDataFromState.cuisine}</li>
      </ul>
    </div>
  );
}
