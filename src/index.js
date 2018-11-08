import dva from 'dva';
import models from './models';
import router from './router';
import './index.css';

const app = dva();
/*
models.map(m => app.model(m));
*/

// 2. Model
/*app.model(require('./models/todo'))*/
app.model(require('./models/app'))
app.router(router);
app.start('#root');
