import styled from 'styled-components';

export const ContainerRegister = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  background: rgba(51, 51, 51, 0.5);

  a {
    border: 1px solid green;
    border-radius: 50%;
    padding: 1rem;

    font-size: 1.5rem;

    cursor: pointer;

    transition: 0.4s;

    &:hover {
      background-color: green;
      transform: translateX(120px);

      color: grey;
    }
  }
`;
