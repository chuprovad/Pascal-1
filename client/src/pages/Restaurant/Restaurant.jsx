// import classes from './Restaurant.module.css';

import { useState } from 'react';
import BookingModal from '../../components/UI/BookingModal/BookingModal';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import RestaurantForm from '../../components/RestaurantForm/RestaurantForm';
import ButtonCreate from '../../components/UI/ButtonCreate/ButtonCreate';

const path = 'https://cdn.pixabay.com/photo/2020/09/17/12/41/cafe-5579069_1280.jpg';
const path1 = 'https://cdn.pixabay.com/photo/2017/05/12/08/29/coffee-2306471_1280.jpg';
const path2 = 'https://cdn.pixabay.com/photo/2017/07/15/13/45/french-restaurant-2506490_1280.jpg';

export default function Restaurant() {
  const [modal, setModal] = useState(false);

  const bookTableHandler = (event) => {
    // TODO: записать данные в БД
    setModal(false);
  };

  return (
    <div>
      <RestaurantCard />

      <ButtonCreate type="button" onClick={()=> setModal(true)}>Book a table</ButtonCreate>
      
      <BookingModal visible={modal} setVisible={setModal}>
        <RestaurantForm bookTableHandler={bookTableHandler} />
      </BookingModal>

      <hr style={{ margin: '15px 0' }} />

      {/* TODO: создать отдельные компонент для картинок или два Pictures and Picture */}
      <div>
        <img src={path} alt="pic" style={{width: 200}}/>
        <img src={path1} alt="pic" style={{ width: 200 }}/>
        <img src={path2} alt="pic" style={{ width: 200 }}/>
      </div>
    </div>
  );
}
