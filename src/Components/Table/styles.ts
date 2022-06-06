import styled from "styled-components";

export const Wrapper = styled.table`
  border: 1px solid transparent;
  border-collapse: collapse;
  margin-top: 1rem;
  margin-left: 1rem;
  width: 500px;

  tbody {
    color: #a7a1ae;
    tr {
      :nth-child(even) {
        background-color: #2c3446;
      }
      :nth-child(odd) {
        background-color: #323c50;
      }
    }
  }

  th {
    border: 1px solid transparent;
    padding: 0.5rem;
    text-align: left;
    font-weight: bold;
    background-color: #1f2739;
  }

  tfoot {
    background-color: #1f2739;
    color: #fb667a;
  }

  td {
    border: 1px solid transparent;
    padding: 0.5rem;
    text-align: left;
  }

  input {
    border: none;
    outline: none;
    padding: 0.25rem;
    font-size: 0.8rem;
    font-weight: 500;
    width: 170px;
    background-color: transparent;
    color: #fff;

    ::placeholder {
      font-weight: bold;
      color: #185875;
    }
  }

  button {
    border: none;
    padding: 0.5rem;
    border-radius: 0.25rem;
    background-color: #a7a1ae;
    cursor: pointer;
    :hover {
      background-color: #185875;
    }
  }

  .pagination-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
  }
`;
