import { validationResult } from 'express-validator';

const inputError = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessage = errors.errors.map((err) => err.msg);
    return res.status(400).send({ status: 400, error: errorMessage });
  }
  return next();
};

export default inputError;
