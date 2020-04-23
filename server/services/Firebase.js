import firebase from 'firebase-admin';
import serviceAccount from '../service-account-file.json';

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://nodejs-firebase-app.firebaseio.com',
});

var db = firebase.database();
var usersRef = db.ref('users');

class Firebase {
  // CREATE - create user account
  static async createAccount(req, res) {
    const { firstName, lastName, email, password } = req.body;

    const data = { firstName, lastName, email, password };

    // Push the data to the databse
    usersRef.push(data, function (err) {
      if (err) {
        res
          .status(500)
          .send({ status: 500, message: 'Internal server error!' });
      } else {
        res
          .status(201)
          .send({ status: 201, message: 'New user created successfully!' });
      }
    });
  }

  // READ - login user
  static async findUser(req, res) {
    const { email, password } = req.body;

    // Check if the email exist in the DB
    usersRef
      .orderByChild('email')
      .equalTo(email)
      .on('value', (snapshot) => {
        //  Get the password corresponding to the retrieved email
        const userPassword = Object.values(snapshot.val())[0].password;

        if (userPassword === password) {
          res
            .status(200)
            .send({ status: 200, message: 'Logged in successfully!' });
        } else {
          res
            .status(401)
            .send({ status: 401, message: 'Incorrect email or password' });
        }
      });
  }

  // UPDATE - update a particular user
  static async updateUser(req, res) {
    const { firstName, lastName, password } = req.body;
    const {
      params: { id },
    } = req;

    const data = { firstName, lastName, password };

    // Update user according to the provided ID
    usersRef.child(id).update(data, (err) => {
      if (err) {
        res.send(err);
      } else {
        usersRef.child(id).once('value', (snapshot) => {
          if (snapshot.val() == null) {
            res.status(404).send({ status: 404, error: 'User not found' });
          } else {
            res.status(404).send({
              status: 201,
              message: 'User updated successfully!',
              data: snapshot,
            });
          }
        });
      }
    });
  }

  // DELETE - delete user account
  static async deleteUser(req, res) {
    const {
      params: { id },
    } = req;

    // reove user account
    usersRef.child(id).remove((err) => {
      if (err) {
        res.send(err);
      } else {
        res.status(201).send({
          status: 201,
          message: 'User removed successfully!',
        });
      }
    });
  }
}

export default Firebase;
