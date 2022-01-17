import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { allRestaurants, allRestByCoord } from "../../redux/actions/restaurant.action";

const Map = () => {

  

  let ymaps = window.ymaps;
  const dispatch = useDispatch()

  const coordinates = useSelector(state => state.restaurant)
  console.log(coordinates)

  const [myLocation, setmyLocation] = useState(getMyAdress())
  // console.log(myLocation)
  const [points, setPoints] = useState()


  async function getMyAdress() {
    navigator.geolocation.getCurrentPosition(async (geoData) => {
      const { longitude, latitude } = geoData.coords;
      // console.log(latitude, longitude)
      setmyLocation([latitude, longitude])
      // const YapiK = '8e593647-2d9f-4250-8947-44b467394541'; // Ya API Key
      // const ftch = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=${YapiK}&geocode=${longitude},${latitude}&format=json`);
      // const adress = await ftch.json();
      // console.log(adress.response.GeoObjectCollection.featureMember[0].GeoObject.description, ',', adress.response.GeoObjectCollection.featureMember[0].GeoObject.name);
    });
  };

  useEffect(() => {
    dispatch(allRestaurants())
    if (coordinates.length)
      ymaps.ready(init);
  }, [coordinates.length])



  //подключаем карты
  function init() {
    let myMap = new ymaps.Map("map", {
      center: [55.7066426, 37.5973765],
      zoom: 10,
      controls: ['zoomControl'],
      behaviors: ['drag', 'scrollZoom']
    })
    // Создадим объекты на основе JSON-описания геометрий.
    let objects = ymaps?.geoQuery(coordinates).addToMap(myMap)

    objects.searchInside(myMap)
      // И затем добавим найденные объекты на карту.
      .addToMap(myMap);

    myMap.events.add('boundschange', function () {
      // После каждого сдвига карты будем смотреть, какие объекты попадают в видимую область.
      let visibleObjects = objects.searchInside(myMap).addToMap(myMap);
      const coord = visibleObjects._objects.map(el => el.geometry._coordinates)
      // Оставшиеся объекты будем удалять с карты.
      objects.remove(visibleObjects).removeFromMap(myMap);
      dispatch(allRestByCoord(coord))
    });
  }



  const buttonHandler = () => {

    //   fetch('https://geocode-maps.yandex.ru/1.x/?apikey=8e593647-2d9f-4250-8947-44b467394541&geocode=37.63336273141365,55.75765672968874&format=json')
    //   .then(res => res.json())
    //   .then(data => console.log(data.response.GeoObjectCollection.featureMember[1].GeoObject.name)) 
  }
  return (
    <>
      <div style={{ width: '500px', height: '500px' }} id="map" />
      <br />
      <button onClick={buttonHandler}>Верни мне мой json</button>
    </>
  )
}

export default Map
