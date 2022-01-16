import { useEffect } from "react";
import {useSelector} from 'react-redux'

const Map = () => {
    
  const rest = useSelector(state => state)

  let ymaps = window.ymaps;

    
  //подключаем карты
  function init(){
    let myMap = new ymaps.Map("map", {
      center: [55.706541,37.5948184],
      zoom: 14,
      controls: ['zoomControl'],
      behaviors: ['drag', 'scrollZoom']
        })
      // Создадим объекты на основе JSON-описания геометрий.
      let  objects = ymaps.geoQuery([
          {
              type: 'Point',
              coordinates: [55.706541,37.5948184]
          },
          {
              type: 'Point',
              coordinates: [55.75, 37.64]
          },
          {
              type: 'Point',
              coordinates: [55.75, 37.62]
          }
      ]).addToMap(myMap)

      objects.searchInside(myMap)
        // И затем добавим найденные объекты на карту.
        .addToMap(myMap);
    
    myMap.events.add('boundschange', function () {
        // После каждого сдвига карты будем смотреть, какие объекты попадают в видимую область.
        let visibleObjects = objects.searchInside(myMap).addToMap(myMap);

        console.log(visibleObjects)
        // Оставшиеся объекты будем удалять с карты.
        objects.remove(visibleObjects).removeFromMap(myMap);
    });
  }

    useEffect(() => {
      ymaps.ready(init);
    }, [])

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
