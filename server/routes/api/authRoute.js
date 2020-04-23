import { Router } from 'express';
import authController from '../../controllers/authController';
import Validate from '../../middlewares/Validate';
import inputChecker from '../../middlewares/inputError';

const authRoute = Router();
authRoute.post(
  '/createAccount',
  Validate.newAccount(),
  inputChecker,
  authController.createAcount
);
authRoute.post(
  '/login',
  Validate.login(),
  inputChecker,
  authController.login
);

authRoute.put(
  '/update/:id',
  Validate.update(),
  inputChecker,
  authController.updateUser
);

authRoute.delete(
  '/remove/:id',
  inputChecker,
  authController.deleteUser
);

export default authRoute;
