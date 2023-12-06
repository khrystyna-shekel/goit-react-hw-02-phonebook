import styled from 'styled-components';

export const StyledForm = styled.form`
  border: 2px solid bisque;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 1px 2px 4px rgb(204, 203, 203);
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-weight: 700;
  color: rgb(161, 161, 218);
`;

export const StyledInput = styled.input`
  width: 240px;
  height: 20px;
  font-weight: 500;
`;

export const StyledBtn = styled.button`
  cursor: pointer;
  border: none;

  width: 120px;
  height: 30px;
  padding: 4px 6px;
  border-radius: 5px;
  box-shadow: 1px 2px 4px rgb(204, 203, 203);

  font-weight: 700;
  background-color: bisque;
  color: black;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(161, 161, 218);
    color: bisque;
  }
`;
