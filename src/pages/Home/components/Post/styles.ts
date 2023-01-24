import styled from 'styled-components'

export const PostContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.post};
  border-radius: 10px;

  header {
    display: flex;
    justify-content: center;
    gap: 1rem;

    h2 {
      flex-shrink: 1;
      font-size: 1.25rem;
      color: ${(props) => props.theme.title};
    }

    span {
      flex-shrink: 0;
      font-size: 0.875rem;
      color: ${(props) => props.theme.span};
    }
  }
`
