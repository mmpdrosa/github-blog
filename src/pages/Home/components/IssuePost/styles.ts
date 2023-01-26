import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const IssuePostContainer = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 16.25rem;
  gap: 2rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.post};
  border-radius: 10px;
  text-decoration: none;

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

  p {
    color: ${(props) => props.theme.text};
    overflow: hidden;
    text-overflow: clip;
  }
`
