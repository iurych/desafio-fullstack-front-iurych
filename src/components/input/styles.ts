import styled from 'styled-components';

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  input {
    border: 1px solid grey;
    border-radius: 8px;
    padding-inline: 5px;

    height: 30px;

    outline: none;

    &:focus {
      border: 2px solid blue;
      box-shadow: 2px 2px 2px 2px blue;
    }
  }
`;
