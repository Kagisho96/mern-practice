const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)


router.route('/:id').put(updateGoal).delete(deleteGoal)

jgfhgdskgtgttsyr fhjkbfcuhbcb fuijkbchjjhghfhfikhbfcugyhhfn yrvjdbhjdhhhnhfdhjbcvbcnvbuijkchhrehbygvgduuuieolugvgdiuogehfhggfbcvislhglbbkhdvcb bbrfjgxrgdhjkhhhhhfd ygkbcr jvbjk c

module.exports = router