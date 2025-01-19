export class Instructor {
  public id: string
  public name: string

  constructor(name: string, id?: string) {
    // Se tiver id, ele recebe o id, se não tiver, ele cria um id aleatório
    this.id = id ?? crypto.randomUUID()
    this.name = name
  }
}
