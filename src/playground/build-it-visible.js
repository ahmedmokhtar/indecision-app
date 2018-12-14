// babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch

const appRoot = document.getElementById('app');
let isHidden = true;

const onShowDetails = () => {
  isHidden = !isHidden;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onShowDetails}>{isHidden ? 'Show details' : 'Hide details'}</button>
      {!isHidden && (
        <div>
          <p>Hey. These are some details you can now see!</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();