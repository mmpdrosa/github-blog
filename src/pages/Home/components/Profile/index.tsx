import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useQuery } from 'react-query'

import { api } from '../../../../lib/axios'

import {
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  ProfileInfo,
} from './styles'

interface ProfileProps {
  username: string
}

interface UserProfile {
  name: string
  avatarUrl?: string
  bio?: string
  followers: number
  company?: string
  profileUrl: string
}

export function Profile({ username }: ProfileProps) {
  const { data: userProfile } = useQuery<UserProfile>(
    'profile',
    async () => {
      const response = await api.get(`/users/${username}`)

      const {
        name,
        avatar_url: avatarUrl,
        bio,
        followers,
        company,
        html_url: profileUrl,
      } = response.data

      return {
        name,
        followers,
        profileUrl,
        avatarUrl,
        bio,
        company,
      }
    },
    {
      staleTime: 1000 * 60, // 1 minute
    },
  )

  return (
    <ProfileContainer>
      <img src={userProfile?.avatarUrl} alt="Avatar" />
      <ProfileContent>
        <ProfileHeader>
          <span>{userProfile?.name}</span>
          <a target="_blank" href={userProfile?.profileUrl} rel="noreferrer">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileHeader>

        <p>{userProfile?.bio}</p>

        <ProfileInfo>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            {username}
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            {userProfile?.company}
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            {`${userProfile?.followers} seguidores`}
          </div>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}
