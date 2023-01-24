import { Post } from './components/Post'
import { Profile } from './components/Profile'
import { HomeContainer, PostsContainer, PostsList, PostsSearch } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />

      <PostsContainer>
        <PostsSearch>
          <div>
            <h1>Publicações</h1>
            <span>6 publicações</span>
          </div>

          <input type="text" name="search" placeholder="Buscar conteúdo" />
        </PostsSearch>

        <PostsList>
          <Post />
          <Post />
          <Post />
          <Post />
        </PostsList>
      </PostsContainer>
    </HomeContainer>
  )
}
