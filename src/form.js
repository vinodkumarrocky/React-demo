import React, { Component } from "react";
import { Link } from "react-router-dom";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.save({ name, number });
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Link to="/">
            <b className="btn btn-link">BACK</b>
          </Link>
        </div>
        <form className="container" data-toggle="validator">
          <div className="row">
            <div className="form-group">
            <label for="name">Name</label>
              <input id="name" type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleInputChange} required/>
                <div className="help-block with-errors"></div>
            </div>
            <div className="form-group">            
              <label for="number">Number</label>
              <input id="number" type="number" className="form-control" name="number" value={this.state.number} onChange={this.handleInputChange} required/>
            </div>
          </div>
        </form>
        <div className="container">
        <div className="well">
          Subscriber to be added:  </div>
          <div className="well">
          <b>Name</b>: {this.state.name}</div>

          <div className="well">
          <b>Number</b>: {this.state.number}</div>
          
          
          <button className="btn btn-primary" onClick={this.handleSubmit}>
          <Link to="/">
          Add</Link></button>       
      

          </div>
      </div>
    );
  }
}

export default Forms;
