interface QuestionProps {
  title: string
  content: string
  authorId: string
}

export class Question {
  public id: string
  public title: string
  public content: string
  public authorId: string

  constructor({ authorId, title, content }: QuestionProps, id?: string) {
    // Se tiver id, ele recebe o id, se não tiver, ele cria um id aleatório
    this.id = id ?? crypto.randomUUID()
    this.authorId = authorId
    this.title = title
    this.content = content
  }
}
