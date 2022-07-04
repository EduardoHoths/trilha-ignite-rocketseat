import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background-color: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    min-width: 300px;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    span {
      display: none;
    }

    &:last-child {
      background: var(--green);
      color: #fff;

      span {
        color: white;
      }
    }
  }
  @media (max-width: 1080px) {
    overflow: auto;
    padding-bottom: 1rem;
    touch-action: auto;

    div {
      min-width: 250px;
      min-height: 200px;

      header {
        align-items: flex-start;
      }
      span {
        display: block;
        color: var(--text-body);
        font-size: 0.857rem;
      }
      strong {
        font-size: 2.143rem;
        margin-top: 2.714rem;
      }
    }

    ::-webkit-scrollbar {
      height: 0.5rem;
    }

    ::-webkit-scrollbar-track {
      background-color: var(--shape);
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--blue-light);
      border-radius: 1rem;
    }
  }
`;
