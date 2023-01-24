import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  background-color: ${(props) => props.theme.profile};
  padding: 2rem 2.5rem;
  border-radius: 10px;

  img {
    width: 9.25rem;
    height: 9.25rem;
    object-fit: cover;
    border-radius: 8px;
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 0.5rem;

  span {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.title};
    line-height: 1.3;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    color: ${(props) => props.theme.blue};
    text-decoration: none;
  }
`
export const ProfileInfo = styled.footer`
  display: flex;
  gap: 1.5rem;

  margin-top: 1rem;

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
