import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

/* GET users listing. */
router.get('/', flightsCtrl.index)
router.post('/', flightsCtrl.create)
router.get('/new', flightsCtrl.new)

export {
  router
}
