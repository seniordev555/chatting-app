import express from 'express';
import expressValidate from 'express-validation';
import controller from '../../controllers/auth.controller';
import validation from '../../validations/auth.validation';

const router = express.Router();

router.route('/register')
  .post(expressValidate(validation.register), controller.register);

router.route('/login')
  .post(expressValidate(validation.login), controller.login);

router.route('/refresh-token')
  .post(expressValidate(validation.refresh), controller.refresh);

export default router;
