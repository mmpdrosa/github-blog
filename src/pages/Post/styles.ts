import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

export const PostContainer = styled.div`
  margin-top: -5rem;
  margin-bottom: 10rem;
`

export const PostHeader = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.profile};
  padding: 2rem 2.5rem;
  border-radius: 10px;

  & > div:first-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.75rem;
      font-weight: 700;
      color: ${(props) => props.theme.blue};
      text-decoration: none;
    }
  }

  h1 {
    line-height: 1.3;
  }
`

export const PostInfo = styled.div`
  display: flex;
  gap: 2rem;

  margin-top: 0.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.subtitle};

    svg {
      color: ${(props) => props.theme.label};
    }
  }
`

export const PostContent = styled(ReactMarkdown)`
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  a {
    color: ${(props) => props.theme.blue};
  }

  h1,
  h2,
  h3 {
    color: ${(props) => props.theme.title};
  }

  img {
    width: 100%;
  }
`
