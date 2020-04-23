import Firebase from '../services/Firebase';

class authController {
  static async createAcount(req, res) {
    Firebase.createAccount(req, res);
  }

  static async login(req, res) {
    Firebase.findUser(req, res);
  }

  static async updateUser(req, res) {
    Firebase.updateUser(req, res);
  }

  static async deleteUser(req, res) {
    Firebase.deleteUser(req, res);
  }
}

export default authController;
