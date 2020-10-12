import React from 'react';

class UserForm extends React.Component {
  state = {
    id: null,
    name: "",
    email: ""
  }

  handleInput = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
  }

  onFormSubmit = event => {
    event.preventDefault();
    const user = {
      id: Math.floor(Math.random() * 10000),
      name: this.state.name,
      email: this.state.email
    }

    this.props.onFormSubmit(user);
    this.setState({name: "", email: ""});
  }

  render () {
    return (
      <div className="ui segment">
        <h1>Add new user</h1>
        <form className="ui form" onSubmit={this.onFormSubmit} autoComplete="off">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              value={this.state.name}
              onChange={this.handleInput}
            />

            <label>Email</label>
            <input
              type="text"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.handleInput}
            />
          </div>

          <button type="submit" className="ui submit button">
            Save
          </button>

          <button type="submit" className="ui submit button">
            Cancel
          </button>
        </form>
      </div>
    );
  }
}
export default UserForm;
