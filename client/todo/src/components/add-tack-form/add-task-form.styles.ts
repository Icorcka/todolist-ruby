import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 20px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const SubmitButton = styled.button`
  background-color: blue;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: darkblue;
  }
`;
