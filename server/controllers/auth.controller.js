const bcrypt = require('bcrypt')
const { Admin, Restaurant, User } = require('../db/models')


const signUp = async (req, res) => {
  const { name, email, password } = req.body
  console.log( name, email, password);
  if (name && email && password) {
    try {
      const hashPassword = await bcrypt.hash(password, 11)
      const newUser = await User.create({
        name,
        email,
        password: hashPassword,
      })
      console.log(newUser);
      req.session.user = {
        id: newUser.get({ plain: true }).id,
        name: newUser.name,
      }
      console.log({ id: newUser.get({ plain: true }).id, name: newUser.name });
      return res.json({ id: newUser.get({ plain: true }).id, name: newUser.name })
    } catch (error) {
      return res.sendStatus(500)
    }
  }
  return res.sendStatus(400)
}

const signIn = async (req, res) => {
  const { password, email } = req.body
  if (password && email) {
    try {
      let currentUser = await User.findOne({ where: { email }, raw: true })
      if (!currentUser) {
        currentUser = await Admin.findOne({ where: { email }, raw: true })
const rest = await Restaurant.findOne({where:{id: currentUser.restaurantId}})
console.log(rest);
        if (currentUser && (await bcrypt.compare(password, currentUser.password))) {

          req.session.user = {
            id: currentUser.id,
            name: currentUser.name,
            isAdmin: 'isAdmin',
            restaurantId: rest.id
          }
          return res.json({ id: currentUser.id, name: currentUser.name, isAdmin: 'isAdmin', restaurantId: rest.id})
        }
      }
      if (currentUser && (await bcrypt.compare(password, currentUser.password))) {
        req.session.user = {
          id: currentUser.id,
          name: currentUser.name,
        }
        return res.json({ id: currentUser.id, name: currentUser.name })
      }
      return res.sendStatus(401)
    } catch (error) {

      return res.sendStatus(500)
    }
  }
  return res.sendStatus(400)
}

const signOut = async (req, res) => {
  res.clearCookie("auth")
  req.session.destroy()  
  return res.sendStatus(200)
}

const signUpAdmin = async (req, res) => {
  const { name, email, password, title, categoryId, cuisineId, avarageCoast, capacity } = req.body
  console.log('lol');
  console.log(name, email, password, title, categoryId, cuisineId, avarageCoast, capacity);
  if (name && email && password) {
    try {
      const newRest = await Restaurant.create({
        title,
        categoryId,
        cuisineId,
        avarageCoast,
        capacity,
        bookedTables: 0
      })

      console.log('kek');
      const hashPassword = await bcrypt.hash(password, 11)
      const newUser = await Admin.create({
        name,
        email,
        password: hashPassword,
        restaurantId: newRest.id
      })

      req.session.user = {
        id: newUser.get({ plain: true }).id,
        name: newUser.name,
        isAdmin: 'isAdmin',
        restaurantId: newRest.id
      }

      return res.json({ id: newUser.get({ plain: true }).id, name: newUser.name, isAdmin: 'isAdmin', restaurantId: newRest.id  })
    } catch (error) {
      console.log(error);
      return res.sendStatus(500)
    }
  }
  return res.sendStatus(400)
}


module.exports = {
  signIn,
  signOut,
  signUp,
  signUpAdmin,
}
