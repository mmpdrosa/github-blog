import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import {
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  ProfileInfo,
} from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://avatars.githubusercontent.com/u/57322620?v=4" alt="" />
      <ProfileContent>
        <ProfileHeader>
          <span>Matheus Menezes Pedrosa</span>
          <a href="">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileHeader>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          porro nemo. Magni consequuntur voluptatibus neque officiis, molestias
          necessitatibus! Iste quis tenetur error cupiditate eius quod libero
          veritatis porro distinctio deleniti!
        </p>
        <ProfileInfo>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            mmpdrosa
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            {'5 seguidores'}
          </div>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}
