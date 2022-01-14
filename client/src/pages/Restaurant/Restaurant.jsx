import classes from './Restaurant.module.css';

import { useEffect, useState } from 'react';
import BookingModal from '../../components/UI/BookingModal/BookingModal';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import RestaurantForm from '../../components/RestaurantForm/RestaurantForm';
import ButtonCreate from '../../components/UI/ButtonCreate/ButtonCreate';
import { useDispatch, useSelector } from 'react-redux';
import { THUNK_getRestaurantFromDB } from '../../redux/actions/restaurant.action';
import PicturesGallery from '../../components/UI/PicturesGallery/PicturesGallery';

//TODO: restaurantID получить из useParams
const restaurantId = 2;

export default function Restaurant() {
  const dispatch = useDispatch();

  // Получить данные одного ресторана с бэка при монтировании компонента
  useEffect(() => {
    console.log('TEST222');
    dispatch(THUNK_getRestaurantFromDB(restaurantId));
  }, [])

  // Получить данные одного ресторана из стейта
  const restaurantDataFromState = useSelector(state => state.restaurant);
  console.log(restaurantDataFromState.pictures);

  // Стейт для отображения модалки
  const [modal, setModal] = useState(false);

  const bookTableHandler = (event) => {
    // TODO: записать данные в БД
    setModal(false);
  };

  return (
    <div className={classes.container}>
        <RestaurantCard restaurantDataFromState={restaurantDataFromState}/>

        <ButtonCreate type="button" onClick={()=> setModal(true)}>Book a table</ButtonCreate>
        
        <BookingModal visible={modal} setVisible={setModal}>
          <RestaurantForm bookTableHandler={bookTableHandler} />
        </BookingModal>

        {/* <hr style={{ margin: '15px 0' }} /> */}
        <h2>{restaurantDataFromState?.pictures?.length} Photos</h2>
      
        <PicturesGallery restaurantDataFromState={restaurantDataFromState} />
    </div>
  );
}
