import React from 'react';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledBtn,
} from './ContactForm.styled';

export class ContactForm extends React.Component {
  handleFormSubmit = e => {
    e.preventDefault();
  };

  handleInput = e => {
    console.log(e.currentTarget.value);
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleFormSubmit}>
        <StyledLabel>
          Name
          <StyledInput
            onChange={this.handleInput}
            type="text"
            name="name"
            required
          />
        </StyledLabel>
        <StyledBtn>Add to contact</StyledBtn>
      </StyledForm>
    );
  }
}
