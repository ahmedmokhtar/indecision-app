import React from 'react';

export default class AddOption extends React.Component {
  // Using class properties for state and handleAddOption()
  state = {
    error: undefined
  };

  handleAddOption = (e) => {        
    e.preventDefault();
    // e.persist();      // This is used to be able to see the real event object in the console.
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}