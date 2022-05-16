import React from 'react';
import Autosuggest from 'react-autosuggest';
//import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { injectIntl } from "react-intl";
import * as loginActions from '../services/action/loginActions';
import 'bootstrap/dist/css/bootstrap.css';

// Imagine you have a list of languages that you'd like to autosuggest.

//const empList = useSelector((state) => state.user.empList);

// const empList = this.props.empList;
// // Teach Autosuggest how to calculate suggestions for any given input value.
// const getSuggestions = value => {
//   const inputValue = value.trim().toLowerCase();
//   const inputLength = inputValue.length;

//   return inputLength === 0 ? [] : empList.filter(emp =>
//     ((emp.firstName.toLowerCase().slice(0, inputLength) === inputValue) || 

//     (emp.lastName.toLowerCase().slice(0, inputLength) === inputValue))
//   );
// };

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.email;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    <div >
                
                    <h5><b>{suggestion.firstName} {suggestion.lastName}</b></h5>
                    <p>{suggestion.email}</p>
                    <hr></hr>
                  
      </div>
    
  </div>
);

 export class AutoSuggestEmpSearch extends React.Component {
  constructor(props) {
    super(props);

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
  
    return inputLength === 0 ? [] : this.props.empList.filter(emp =>
      ((emp.firstName.toLowerCase().slice(0, inputLength) === inputValue) || 
  
      (emp.lastName.toLowerCase().slice(0, inputLength) === inputValue))
    );
  };
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
const selectedEmp=this.props.empList.filter(emp =>
  ((emp.employeeId === suggestion.employeeId)));

    this.props.selectedEmployee(selectedEmp);
  }
  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type Employee Name',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={this.onSuggestionSelected}
      />
    );
  }
}

function mapStateToProps(state) {
    return {
        ...state.user
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...loginActions }, dispatch);
}
export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(AutoSuggestEmpSearch));