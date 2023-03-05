const db = require('../../data/db-config');

function checkAccountPayload(req, res, next) {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  const { name, budget } = req.body;
  if (!name || !budget) {
    next({ status: 400, message: 'name and budget are required' });
    next();
  } else if (name.trim().length < 3 || name.trim().length > 100) {
    next({ status: 400, message: 'name of account must be between 3 and 100' });
  } else if (typeof budget !== 'number') {
    next({ status: 400, message: 'budget of account must be a number' });
  } else if (budget < 0 || budget > 1000000) {
    next({ status: 400, message: 'budget of account is too large or too small' });
  } else {
    next();
  }
};

function checkAccountNameUnique(req, res, next) {
  // DO YOUR MAGIC
};

async function checkAccountId(req, res, next) {
  // DO YOUR MAGIC
  const account = await db('accounts').where('accountid', req.params.id).first();
  if (!account) {
    next({ status: 400, message: 'that name is taken' });
  } else {
    next();
  }
};


module.exports = {
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId
};