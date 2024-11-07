const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)


router.route('/:id').put(updateGoal).delete(deleteGoal)

iuhkvjrsebdcukgbvghkjsdvctrcvhjhkjbjhvgdbcyftcioomntfgdjkxhbfcvjbnuicvlkjnutrxed bxklhhjrnfuoi;lntyrcfdcbjkhfbckjo,dghj,kj tedlib m,.j

module.exports = router