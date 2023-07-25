import cors from 'cors'
import express from 'express';
import morgan from  'morgan';
import exphbs from 'express-handlebars'
import indexRouter from './src/routes/index.routes.js';
import petsRoutes from './src/routes/pets.routes.js';
import './src/configurations/firebase.connection.js'



const app = express();
app.use(cors());
app.set('port', process.env.PORT || 5000);
app.use(express.json());

app.use(cors(), indexRouter)
app.use('/api', cors(), petsRoutes)


export default app 