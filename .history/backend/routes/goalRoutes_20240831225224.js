const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')

router.get('/', getGoals)

router.post('/', setGoal)

const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')
router.put('/:id', )

router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
}) 


module.exports = router