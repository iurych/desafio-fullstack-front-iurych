import styled from 'styled-components';

export const ContainerLogin = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 20px;

  background: rgba(51, 51, 51, 0.5);

  h1 {
    color: red;
  }
  a {
    width: 200px;
    height: 60px;
    background-color: yellow;

    text-align: center;

    padding-top: 15px;

    font-size: 1.5rem;

    cursor: pointer;
  }
`;
