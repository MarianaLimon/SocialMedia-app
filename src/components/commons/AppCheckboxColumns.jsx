import React, { Component } from "react";
import AppCheckbox from "./AppCheckbox";

import Styles from "./AppCheckboxColumns.module.css"

const OPTIONS = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"];

class App extends Component {
  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  };

  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      // BONUS: Can you explain why we pass updater function to setState instead of an object?
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  };

  createCheckbox = option => (
    <AppCheckbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <div className={`container ${Styles.CheckContainer}`}>
        <div className="row">

          <div className="col-12">
            <h1>Categories</h1>
          </div>

          <div className={`col-sm-12 mt-2 ${Styles.CheckOptions}`}>
            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}
            </form>

            <div className="form-group d-flex justify-content-center mt-4">
                {/* <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.selectAll}
                >
                  Select All
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.deselectAll}
                >
                  Deselect All
                </button> */}
                <button type="submit" className="btn btn-primary text-center">
                  Aplicar Filtro
                </button>
              </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
