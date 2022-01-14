
const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3001;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const restaurants = [
  {
    id: 1,
    title: 'GOOD REST',
    category: 1,
    cuisine: 'italian',
    city: 'MOSCOW',
    address: 'Some street 1',
    capacity: 100,
    bookedTables: 10
  },
  {
    id: 2,
    title: 'BAD REST',
    category: 2,
    cuisine: 'japan',
    city: 'MOSCOW',
    address: 'Some street 2',
    capacity: 200,
    bookedTables: 170,
    pictures: [
      {
        path: 'https://cdn.pixabay.com/photo/2020/09/17/12/41/cafe-5579069_1280.jpg',
      },
      {
        path: 'https://cdn.pixabay.com/photo/2017/05/12/08/29/coffee-2306471_1280.jpg',
      },
      {
        path: 'https://cdn.pixabay.com/photo/2017/07/15/13/45/french-restaurant-2506490_1280.jpg',
      },
    ]
  },
  {
    id: 3,
    title: 'GOOD REST',
    category: 3,
    cuisine: 'german',
    city: 'MOSCOW',
    address: 'Some street 3',
    capacity: 300,
    bookedTables: 180,
    pictures: [
      {
        path: 'https://cdn.pixabay.com/photo/2020/09/17/12/41/cafe-5579069_1280.jpg',
      },
      {
        path: 'https://cdn.pixabay.com/photo/2017/05/12/08/29/coffee-2306471_1280.jpg',
      },
      {
        path: 'https://cdn.pixabay.com/photo/2017/07/15/13/45/french-restaurant-2506490_1280.jpg',
      },
    ]
  },
];


// ------------ручки ресторана начало------------
app.get("/restaurants/:id", (req, res) => {
  console.log('server ---');
  const id = req.params.id;

  // TODO: получить рейтинг ресторана
  const currentRestaurant = restaurants.find(el => el.id === Number(id))
  console.log(currentRestaurant);

  res.json(currentRestaurant)
})

// ----------------ручки ресторана конец------------

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT`, PORT);
});
