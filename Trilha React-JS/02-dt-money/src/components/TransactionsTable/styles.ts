import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      background-color: var(--shape);
      border: 0;
      color: var(--text-body);

      &:first-child {
        color: var(--text-title);
        border-radius: 0.25rem 0 0 0.25rem;
      }

      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
      }

      &.deposit {
        color: var(--green);
      }
      &.withdraw {
        color: var(--red);
      }
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.143rem;

  strong {
    font-weight: 400;
    font-size: 1.429rem;
    color: var(--text-title);
  }

  span {
    color: var(--text-body);
  }
`;

export const Transaction = styled.div`
  background-color: var(--shape);
  border-radius: 0.357rem;
  padding: 1.286rem 1.714rem;
  & + div {
    margin-top: 0.571rem;
  }

  header {
    span {
      color: var(--text-title);
      display: block;
    }
    strong {
      font-size: 1.429rem;
      font-weight: 400;
      &.deposit {
        color: var(--green);
      }
      &.withdraw {
        color: var(--red);
      }
    }
  }

  footer {
    margin-top: 1.357rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: var(--text-body);
  }
`;
