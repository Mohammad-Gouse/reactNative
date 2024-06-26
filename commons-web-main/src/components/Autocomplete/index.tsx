import React, { useEffect, useState } from "react";
import Autosuggest from "react-autosuggest";
import styled from "styled-components";
import Container from "../Input/Container";
import H4 from "../H4";
import PromptText from "../PromptText";
import ListLargeText from "../ListLargeText";
import styles from "../Input/styles";

type Props = {
  items: string[];
  value: string;
  label: string;
  placeholder?: string;
  isError: boolean;
  error: string;
  onChange: (val: string) => void;
  onSelected?: (val: string) => void;
  onFetchData?: (val: string) => void;
  onClearData?: () => void;
};

type State = {
  suggestions: string[];
};

const SuggestionsContainer = styled.div`
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

const Autocomp = (props: Props) => {
  const {
    items,
    value,
    label,
    placeholder,
    isError,
    error,
    onChange,
    onSelected,
    onFetchData,
    onClearData,
  } = props;

  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    setSuggestions(filterSuggestions(items, value));
  }, [items, value]);

  const filterSuggestions = (items: string[], v: string): string[] => {
    const inputValue = Boolean(v) ? v.trim().toLowerCase() : "";
    return inputValue.length === 0
      ? []
      : items.filter((s) =>
          Boolean(s) ? s.toLowerCase().includes(inputValue) : false
        );
  };

  const onSuggestionsFetchRequested = ({ value: v }: { value: string }) => {
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

  return (
    <Container>
      {label ? <H4>{label}</H4> : null}
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        onSuggestionSelected={(_, { suggestionValue }) =>
          onSelected ? onSelected(suggestionValue) : null
        }
        getSuggestionValue={(s) => s}
        inputProps={{
          placeholder: placeholder || "",
          value,
          onChange: (_, { newValue }) => onChange(newValue),
        }}
        renderInputComponent={(props) => (
          <input {...props} style={styles({ isError })} />
        )}
        renderSuggestion={(s) => (
          <div>
            <ListLargeText>{s}</ListLargeText>
          </div>
        )}
        renderSuggestionsContainer={({ containerProps, children }) => (
          <SuggestionsContainer {...containerProps}>
            {children}
          </SuggestionsContainer>
        )}
      />
      {error ? <PromptText>{error}</PromptText> : null}
    </Container>
  );
};

export default Autocomp;
