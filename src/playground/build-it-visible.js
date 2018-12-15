// babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visible: false
    }
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visible ? 'Hide details' : 'Show details'}</button>
        {this.state.visible && (
          <div>
            <p>Hey. These are some details you can now see!</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
