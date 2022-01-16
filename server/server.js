// require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const {Favorit} = require('./db/models')
const session = require('express-session')
const FileStore = require('session-file-store')(session);
const authRouter = require('./routes/auth.router')
const app = express();

// const PORT = process.env.PORT ?? 3002;
const PORT = 3001;


app.use(cors({
  origin: true,
  credentials: true,
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  name: 'auth',
  secret: 'qwerty',
  resave: false,
  saveUninitialized: false,
  store: new FileStore({}),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1e3 * 86400, // COOKIE'S LIFETIME — 1 DAY
  },
}))


app.use('/api/auth', authRouter)


const restaurants = [
  {
    id: 1,
    title: 'GOOD REST',
    category: 'Coffee house',
    cuisine: 'Italian',
    city: 'MOSCOW',
    address: 'Some street 1',
    capacity: 100,
    bookedTables: 10,
    rating: [1, 1],
  },
  {
    id: 2,
    title: 'BAD REST',
    category: 'Teppanyaki-style',
    cuisine: 'Japan',
    city: 'MOSCOW',
    address: 'Some street 2',
    capacity: 200,
    bookedTables: 20,
    rating: [2, 4],
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
      {
        path: 'https://cdn.pixabay.com/photo/2016/11/29/05/07/breads-1867459_1280.jpg',
      },
      {
        path: 'https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_1280.jpg',
      },
    ]
  },
  {
    id: 3,
    title: 'GOOD REST',
    category: 'Pub',
    cuisine: 'German',
    city: 'MOSCOW',
    address: 'Some street 3',
    capacity: 300,
    bookedTables: 180,
    rating: [4, 4, 5],
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

// заготовка саги для поиска
app.get('/restaurants', async (req, res) => {
  const search = req.body.title
  const allRestaurants = await Restaurants.findAll({where:{ title:{[Op.iLike]: `%${search}%`}}})
  setTimeout(() => {
    res.json({allRestaurants})
  }, 2000)
})

app.get("/restaurants/:id", (req, res) => {
  const id = req.params.id;

  const currentRestaurant = restaurants.find(el => el.id === Number(id));

  res.json(currentRestaurant);
})

app.post("/restaurants/:id/addRating", (req, res) => {
  console.log('req.params ---> ', req.params);
  console.log('req.body ===> )', req.body);
  const id = req.params.id;

  restaurants.find(el => el.id === Number(id)).rating.push(req.body.rating);
  console.log(restaurants);

  const updatedRatingFromDB = restaurants.find(el => el.id === Number(id)).rating;
  console.log('updatedRatingFromDB --->', updatedRatingFromDB);

  res.json(updatedRatingFromDB)
})



// ----------------ручки ресторана конец------------

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT`, PORT);
});

