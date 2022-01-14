import { useEffect } from "react";

const Map = () => {

  let ymaps = window.ymaps;

  useEffect(() => {
    ymaps.ready(init);
  }, [])
  //подключаем карты
  async function init(){
          let map = new ymaps.Map("map", {
              center: [55.76, 37.64],
              zoom: 11,
              controls: ['zoomControl'],
              behaviors: ['drag', 'scrollZoom']
          });
      }



  const buttonHandler = () => {
    fetch ('https://geocode-maps.yandex.ru/1.x/?apikey=8e593647-2d9f-4250-8947-44b467394541&geocode=Масква,+Тверская+улица,+дом+7&format=json')
    .then(res => res.json())
    .then(data => console.log(data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos)) 
  }
  return (
  <>
  <div style={{width: '500px', height: '500px'}} id="map"/>
  <br/>
  <button onClick={buttonHandler}>Верни мне мой json</button>
  </>
  )
}

export default Map
