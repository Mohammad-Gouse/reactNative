import React, { useEffect, useState } from "react";
import Autosuggest from "react-autosuggest";
import styled from "styled-components";
import Container from "../Input/Container";
import H4 from "../H4";
import PromptText from "../PromptText";
import ListLargeText from "../ListLargeText";
import styles from "../Input/styles";
const SuggestionsContainer = styled.div `
  max-height: 200px;
  border: 3px solid #f7f8f8;
  overflow-y: scroll;
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  li:hover {
    cursor: pointer;
    background-color: #f7f8f8;
  }
  h3 {
    height: auto;
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;
const Autocomp = (props) => {
    const { items, value, label, placeholder, isError, error, onChange, onSelected, onFetchData, onClearData, } = props;
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        setSuggestions(filterSuggestions(items, value));
    }, [items, value]);
    const filterSuggestions = (items, v) => {
        const inputValue = Boolean(v) ? v.trim().toLowerCase() : "";
        return inputValue.length === 0
            ? []
            : items.filter((s) => Boolean(s) ? s.toLowerCase().includes(inputValue) : false);
    };
    const onSuggestionsFetchRequested = ({ value: v }) => {
        setSuggestions(filterSuggestions(items, v));
        if (onFetchData) {
            onFetchData(v);
        }
    };
    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
        if (onClearData) {
            onClearData();
        }
    };
    return (React.createElement(Container, null,
        label ? React.createElement(H4, null, label) : null,
        React.createElement(Autosuggest, { suggestions: suggestions, onSuggestionsFetchRequested: onSuggestionsFetchRequested, onSuggestionsClearRequested: onSuggestionsClearRequested, onSuggestionSelected: (_, { suggestionValue }) => onSelected ? onSelected(suggestionValue) : null, getSuggestionValue: (s) => s, inputProps: {
                placeholder: placeholder || "",
                value,
                onChange: (_, { newValue }) => onChange(newValue),
            }, renderInputComponent: (props) => (React.createElement("input", Object.assign({}, props, { style: styles({ isError }) }))), renderSuggestion: (s) => (React.createElement("div", null,
                React.createElement(ListLargeText, null, s))), renderSuggestionsContainer: ({ containerProps, children }) => (React.createElement(SuggestionsContainer, Object.assign({}, containerProps), children)) }),
        error ? React.createElement(PromptText, null, error) : null));
};
export default Autocomp;
