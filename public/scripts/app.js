'use strict';

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// live-server public

console.log('App.js is running!');

// JSX
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Ahmed Mokhtar'
  ),
  React.createElement(
    'p',
    null,
    'Age: 43'
  ),
  React.createElement(
    'p',
    null,
    'Location: Cairo'
  )
);

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);
