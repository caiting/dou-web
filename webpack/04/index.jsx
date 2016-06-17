var React = require('react');
var ReactDOM = require('react-dom');
var style = require('./commpontent/app.css');

ReactDOM.render(
  <div >
    <h1 className={style.aa}>
        jenny
    </h1>
      <h2 className='h2'>
        harry
      </h2>
  </div>,
    document.getElementById('example')

);