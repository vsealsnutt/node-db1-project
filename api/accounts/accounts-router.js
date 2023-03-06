const express = require('express');
const Account = require('./accounts-model');
const { checkAccountPayload, checkAccountNameUnique, checkAccountId } = require('./accounts-middleware');

const router = express.Router();

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const accounts = await Account.getAll();
    res.json(accounts);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const account = await Account.getById(req.params.id);
    res.json(account);
  } catch (err) {
    next(err);
  }
});

router.post('/', checkAccountPayload, checkAccountNameUnique, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const newAccount = await Account.create(req.body);
    res.status(201).json(newAccount);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', checkAccountPayload, checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const updatedAccount = await Account.updateById(req,params.id, req.body);
    res.json(updatedAccount);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  // try {

  // } catch (err) {
    
  // }
});

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = router;
