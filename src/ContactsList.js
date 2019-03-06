import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <div>
        <br />
          <p className="container">
          <Link className="btn btn-primary" to="/add">
            Add
          </Link>
        </p>
        <br />
        <div className="container">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>NAME</th>
                <th>PHONE</th>
              </tr>
            </thead>
            <tbody>
              {this.props.List.map((obj, index) => (
                <tr key={index}>
                  <td>{obj.name}</td>
                  <td>{obj.number}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={event => {
                        event.preventDefault();
                        this.props.delete(index);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Contact;
