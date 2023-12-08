import React from 'react';
import {
  StyledLabel,
  StyledInput,
} from 'components/ContactForm/ContactForm.styled';

export class Filter extends React.Component {
  render() {
    const { filterState, onFilter } = this.props;
    return (
      <>
        <StyledLabel>
          Find contact
          <StyledInput
            type="text"
            name="filter"
            value={filterState}
            placeholder="Enter contact name"
            onChange={e => onFilter(e)}
          />
        </StyledLabel>
      </>
    );
  }
}
