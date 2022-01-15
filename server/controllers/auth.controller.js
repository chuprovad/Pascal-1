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

        if (currentUser && (await bcrypt.compare(password, currentUser.password))) {

          req.session.user = {
            id: currentUser.id,
            name: currentUser.name,
            isAdmin: 'isAdmin'
          }
          return res.json({ id: currentUser.id, name: currentUser.name, isAdmin: 'isAdmin' })
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
  const { name, email, password, title, category, cuisine, city, address, capacity } = req.body
  console.log('lol');
  if (name && email && password) {
    try {
      const newRest = await Restaurant.create({
        title,
        category,
        cuisine,
        city,
        address,
        capacity,
        bookedTables: 0
      })

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
        isAdmin: 'isAdmin'
      }

      return res.json({ id: newUser.get({ plain: true }).id, name: newUser.name, isAdmin: 'isAdmin' })
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
