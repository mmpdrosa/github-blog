import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { IssuePostContainer } from './styles'

interface IssueInfo {
  number: number
  title: string
  content: string
  createdAt: Date
}

interface IssuePostProps {
  issueInfo: IssueInfo
}

export function IssuePost({ issueInfo }: IssuePostProps) {
  return (
    <IssuePostContainer to={`/post/${issueInfo.number}`}>
      <header>
        <h2>{issueInfo.title}</h2>
        <span>
          {formatDistanceToNow(issueInfo.createdAt, {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </header>
      <p>{issueInfo.content}</p>
    </IssuePostContainer>
  )
}
