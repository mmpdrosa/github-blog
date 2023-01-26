import { useState } from 'react'
import { useQuery } from 'react-query'

import { api } from '../../lib/axios'
import { IssuePost } from './components/IssuePost'
import { Profile } from './components/Profile'

import {
  HomeContainer,
  IssuesPostsContainer,
  IssuesPostsList,
  IssuesPostsSearch,
} from './styles'

interface IssuesSearch {
  amount: number
  issues: {
    number: number
    title: string
    content: string
    createdAt: Date
  }[]
}

export function Home() {
  const [search, setSearch] = useState('')

  const text = 'Boas práticas'
  const username = 'rocketseat-education'
  const repo = 'reactjs-github-blog-challenge'

  const { data } = useQuery<IssuesSearch>(
    'issues-search',
    async () => {
      const response = await api.get('/search/issues', {
        params: {
          q: `${text} repo:${username}/${repo}`,
        },
      })

      const issues = response.data.items.map((issue: any) => {
        return {
          number: issue.number,
          title: issue.title,
          content: issue.body,
          createdAt: new Date(issue.created_at),
        }
      })

      return {
        amount: response.data.total_count,
        issues,
      }
    },
    {
      staleTime: 1000 * 60, // 1 minute
    },
  )

  const fiteredIssues = data?.issues
    ? data.issues.filter((issue) => issue.title.includes(search))
    : []

  return (
    <HomeContainer>
      <Profile username={username} />

      <IssuesPostsContainer>
        <IssuesPostsSearch>
          <div>
            <h1>Publicações</h1>
            <span>{data?.amount} publicações</span>
          </div>

          <input
            name="search"
            type="text"
            placeholder="Buscar conteúdo"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </IssuesPostsSearch>

        <IssuesPostsList>
          {fiteredIssues.map((issue) => {
            return <IssuePost key={issue.number} issueInfo={issue} />
          })}
        </IssuesPostsList>
      </IssuesPostsContainer>
    </HomeContainer>
  )
}
