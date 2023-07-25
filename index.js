import app from './app.js' 


app.listen(app.get('port'), () => (console.log('todo OK')));
console.log('server on port 5000');


