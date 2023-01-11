import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

/* GET users listing. */
router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.get('/:id', flightsCtrl.show)
router.get("/:id/edit", flightsCtrl.edit)
router.post('/', flightsCtrl.create)
router.delete('/:id', flightsCtrl.delete)
router.put('/:id', flightsCtrl.update)

export {
  router
}
