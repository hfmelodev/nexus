import type { Slug } from './value-objects/slug'

interface QuestionProps {
  title: string
  content: string
  authorId: string
  slug: Slug
}

export class Question {
  public id: string
  public title: string
  public content: string
  public authorId: string
  public slug: Slug

  constructor({ authorId, title, content, slug }: QuestionProps, id?: string) {
    // Se tiver id, ele recebe o id, se não tiver, ele cria um id aleatório
    this.id = id ?? crypto.randomUUID()
    this.authorId = authorId
    this.title = title
    this.content = content
    this.slug = slug
  }
}
