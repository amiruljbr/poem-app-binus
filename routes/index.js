const router = require('express').Router();
const todoRouter = require('./todo');
const userRouter = require('./user');
const feelingRouter = require('./feeling');
const poemRouter = require('./poem');

router.get('/', (req,res)=>{
  res.send('aplikasi poem app')
})
router.use('/',userRouter);
router.use('/todos',todoRouter);
router.use('/feeling',feelingRouter);
router.use('/poem',poemRouter);

module.exports = router;