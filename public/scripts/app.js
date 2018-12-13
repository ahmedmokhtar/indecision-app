console.log('App.js is running!');

// JSX
// var template = <p>This is JSX from app.js!</p>;
var template = React.createElement(
    "p", {
        id: "para"
    },
    "This is JSX!"
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);