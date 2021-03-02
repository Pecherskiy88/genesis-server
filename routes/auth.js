const { Router } = require('express');
const router = Router();

const ValidationUtils = require('../utils/validation');

router.post('/', async (req, res) => {
  try {
    const { email, password, confirmPassword, isAccepted } = req.body;
    validateData(email, password, confirmPassword, isAccepted);
    res.status(200).send({ status: 200, message: 'User created' });
  } catch (e) {
    res.status(e.status || 500).send({
      status: e.status || 500,
      message: e.message || e.toString(),
    });
  }
});

module.exports = router;

function validateData(email, password, confirmPassword, isAccepted) {
  if (!ValidationUtils.isUserExist(email)) {
    throw {
      status: 409,
      message: 'User with this email already exist',
    };
  }
  if (!ValidationUtils.isValidEmail(email)) {
    throw {
      status: 422,
      message: 'Incorrect email',
    };
  }
  if (!ValidationUtils.isValidPassword(password)) {
    throw {
      status: 422,
      message: 'Incorrect password',
    };
  }
  if (password !== confirmPassword) {
    throw {
      status: 422,
      message: 'Password mismatch',
    };
  }
  if (!isAccepted) {
    throw {
      status: 422,
      message: 'You have to accept Private Policy',
    };
  }
}
