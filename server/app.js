import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes'

const app = express();



app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', routes);

app.use('*', (req, res)=>{
  res.send('Invalid route')
})

app.listen(3000, () => {
  console.log('App listening on port 3000');
});

export default app;
