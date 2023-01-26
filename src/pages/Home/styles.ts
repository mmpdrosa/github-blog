import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin-top: -5rem;
  margin-bottom: 10rem;
`

export const IssuesPostsContainer = styled.div`
  margin-top: 4.5rem;
`

export const IssuesPostsSearch = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 1.125rem;
      color: ${(props) => props.theme.subtitle};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme.span};
    }
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    background-color: ${(props) => props.theme.input};
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 6px;
    color: ${(props) => props.theme.text};

    &::placeholder {
      color: ${(props) => props.theme.label};
    }
  }
`

export const IssuesPostsList = styled.main`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
`
