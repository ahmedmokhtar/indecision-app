// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// live-server public

console.log('App.js is running!');

// JSX
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var templateTwo = (
  <div>
    <h1>Ahmed Mokhtar</h1>
    <p>Age: 43</p>
    <p>Location: Cairo</p>
  </div>
);

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);