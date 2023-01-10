import { Flight } from "../models/flight.js";

// function index(req, res){
//   Flight.find({})
//   .then(flights => {
//     res.render('flights/index', {
//       flights: flights,
//       title: 'All Flights'
//     })
//   })
//   .catch(err => {
//     console.log(err)
//     res.redirect('/')
//   })
// }
function create(req, res){
  Flight.create(req.body)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights/new')
  })
}

function newFlight(req, res){
res.render('flights/new',{
  title: 'Add Flight'
})
}

export {
  newFlight as new,
  create,
  // index,
}