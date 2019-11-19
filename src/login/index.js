import React, { Component } from "react";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      birthday: "",
      yearRange: []
    };
    this.greeting = this.greeting.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.birthdayResults = this.birthdayResults.bind(this);
  }

  greeting() {
    if (!this.state.name) {
      return "! Please Enter Your Name and Birthday";
    } else {
      return `, ${this.state.name}!`;
    }
  }

  handleSubmit(e) {
    e.persist();
    console.log({ checkEvent: e });
    e.preventDefault();
    this.setState({
      name: this.element.value,
      birthday: this.bDayElement.value
    });
    const birthdayRange = () => {
      this.birthdayResults();
      this.setRange();
    };
    birthdayRange();
  }

  birthdayResults() {
    let year = Number(this.state.birthday.split("-")[0]);
    return `${year + 18 - 2} through ${year + 18 + 2}`;
  }

  setRange() {
    let yearRange = [];
    for (let i = 0; i < 5; i++) {
      yearRange.push(Number(this.state.birthday.split("-")[0]) + 18 - 2 + i);
    }
    this.setState({ yearRange });
  }

  render() {
    return (
      <div>
        <h1>Hello{this.greeting()}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" ref={el => (this.element = el)} />
          </label>
          <label>
            Birthday:
            <input type="date" ref={el => (this.bDayElement = el)} />
          </label>
          <input type="submit" />
        </form>
        <p>Displaying songs ranging from {this.birthdayResults()}</p>
        <p>Displaying songs from years {this.state.yearRange.join(" ")}</p>
      </div>
    );
  }
}

export default Login;
