import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
`;

export const BoxBtn = styled.div`
  display: flex;
`;

export const Button = styled.button`
  margin: 5px;
  padding: 8px 12px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const Th = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  text-align: left;
`;

export const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

export const ActionsTd = styled(Td)`
  display: flex;
  align-items: center;

  button {
    margin-right: 5px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 16px;
    color: #333;

    &:hover {
      color: red;
    }
  }
`;
