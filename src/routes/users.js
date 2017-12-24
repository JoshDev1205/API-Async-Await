const router = require('express-promise-router')()

const { index, 
        newUser, 
        getUser, 
        replaceUser, 
        updateUser, 
        deleteUser,
        getUserCars,
        newUserCar
      } = require('../controllers/user')

router.get('/', index)
router.get('/:userId', getUser)
router.post('/', newUser)
router.put('/:userId', replaceUser)
router.patch('/:userId', updateUser)
router.delete('/:userId', deleteUser)

router.get('/:userId/cars', getUserCars)
router.post('/:userId/cars', newUserCar)


module.exports = router