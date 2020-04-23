import { check } from 'express-validator';

/**
 * @export
 * @class Validate
 */
class Validate {
  /**
   * Validate input
   * @static
   * @returns {object} errors
   */
  static newAccount() {
    return [
      check('firstName', 'first name should be valid').isAlpha(),
      check('lastName', 'last name should be valid').isAlpha(),
      check('email', 'email should be valid').trim().isEmail(),
      check(
        'password',
        'A valid password should have a character, number, UPPERC CASE letter and a lower case letter and should be longer than 8'
      ).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, 'i'),
    ];
  }

  /**
   * Validate login
   * @static
   * @returns {object} errors
   */
  static login() {
    return [
      check('email', 'email should be valid').trim().isEmail(),
      check('password', 'Password should be valid').isString(),
    ];
  }

  /**
   * Validate user id
   * @static
   * @returns {object} errors
   */
  static update() {
    return [
      check('id', 'user ID should be valid').trim().isString(),
      check('firstName', 'first name should be valid').isAlpha(),
      check('lastName', 'last name should be valid').isAlpha(),
      check('email', 'email should be valid').trim().optional().isEmail(),
      check(
        'password',
        'A valid password should have a character, number, UPPERC CASE letter and a lower case letter and should be longer than 8'
      )
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, 'i'),
    ];
  }
}
export default Validate;
