export class Question {
  public id: string
  public title: string
  public content: string

  constructor(title: string, content: string, id?: string) {
    // Se tiver id, ele recebe o id, se não tiver, ele cria um id aleatório
    this.id = id ?? crypto.randomUUID()
    this.title = title
    this.content = content
  }
}
