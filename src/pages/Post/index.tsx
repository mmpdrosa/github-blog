import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import remarkGfm from 'remark-gfm'

import { api } from '../../lib/axios'

import { PostContainer, PostContent, PostHeader, PostInfo } from './styles'

interface Issue {
  title: string
  url: string
  username: string
  createdAt: Date
  comments: number
  content: string
}

export function Post() {
  const { id } = useParams()

  const { data: issue } = useQuery<Issue>(
    'issue',
    async () => {
      const response = await api.get(
        `/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`,
      )

      const {
        title,
        user,
        html_url: url,
        created_at: createdAt,
        comments,
        body: content,
      } = response.data

      const username = user.login

      return {
        title,
        username,
        url,
        createdAt: new Date(createdAt),
        comments,
        content,
      }
    },
    {
      staleTime: 1000 * 60, // 1 minute
    },
  )

  return (
    <PostContainer>
      <PostHeader>
        <div>
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </Link>

          <a target="_blank" href={issue?.url} rel="noreferrer">
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>

        <h1>{issue?.title}</h1>

        <PostInfo>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            {issue?.username}
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            {issue?.createdAt &&
              formatDistanceToNow(issue?.createdAt, {
                addSuffix: true,
                locale: ptBR,
              })}
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            {`${issue?.comments} comentários`}
          </div>
        </PostInfo>
      </PostHeader>

      <PostContent remarkPlugins={[remarkGfm]}>
        {issue?.content as string}
      </PostContent>
    </PostContainer>
  )
}
