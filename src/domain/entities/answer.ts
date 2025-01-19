export class Answer {
  public id: string
  public content: string

  constructor(content: string, id?: string) {
    // Se tiver id, ele recebe o id, se não tiver, ele cria um id aleatório
    this.id = id ?? crypto.randomUUID()
    this.content = content
  }
}
