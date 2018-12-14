'use strict';

// babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch

var appRoot = document.getElementById('app');

var render = function render() {
  var template = React.createElement(
    'h1',
    null,
    'Visibility Toggle'
  );

  ReactDOM.render();
};
