import React, { Component } from 'react';

class ToDo extends Component {
  toggleComplete = () => {
    this.props.toggleComplete(this.props.todoIndex)
  }

  render() {
    return (
      <ul>
        <input
          type="checkbox"
          checked={this.props.isCompleted}
          onChange={this.toggleComplete}
        />
        <span>{this.props.description}</span>
        <button onClick={this.props.deleteToDo}> X </button>
      </ul>
    )
  }
}

export default ToDo;
