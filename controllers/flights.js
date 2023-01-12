import { Flight } from "../models/flight.js";
import { Meal } from '../models/meal.js'

function index(req, res) {
  Flight.find({})
    .then(flights => {
      res.render('flights/index', {
        flights: flights,
        title: 'All Flights',
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
    console.log(req.body)
  }
  Flight.create(req.body)
    .then(flight => {
      res.redirect(`/flights/${flight._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/flights/new')
    })
}

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

function show(req, res) {
  Flight.findById(req.params.id)
  .populate('menu')
    .then(flight => {
      Meal.find({ _id: { $nin: flight.menu } })
        .then(meals => {
          res.render('flights/show', {
            title: 'Flight Details',
            flight: flight,
            meals: meals,
          })
        })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/flight')
    })
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id)
    .then(flight => {
      res.redirect('/flights')
    })
    .catch(error => {
      console.log(error)
      redirect('/flights')
    })
}

function edit(req, res) {
  Flight.findById(req.params.id)
    .then(flight => {
      res.render("flights/edit", {
        flight,
        title: "Edit Flight Details"
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
}

function update(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Flight.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(flight => {
      console.log(req.params.id)
      console.log(req.body)
      res.redirect(`/flights/${flight._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
}

function createTicket(req, res) {
  console.log(res.body)
  Flight.findById(req.params.id)
    .then(flight => {
      flight.tickets.push(req.body)
      flight.save()
        .then(() => {
          res.redirect(`/flights/${flight._id}`)
        })
        .catch(err => {
          console.log(err)
          res.redirect('/')
        })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
}

function addToMeals(req, res) {
Flight.findById(req.params.id)
.then(flight => {
  console.log(req.params.id)
  console.log(req.body)
  flight.menu.push(req.body.menuId)
  flight.save()
  .then(()=> {
    res.redirect(`/flights/${flight._id}`)
  })
  .catch(err => {
    console.log(err);
    res.redirect("/flights")
  })
})
.catch(err => {
  console.log(err);
  res.redirect("/flights")
})
}

export {
  newFlight as new,
  create,
  index,
  show,
  deleteFlight as delete,
  edit,
  update,
  createTicket,
  addToMeals
}