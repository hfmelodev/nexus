export class UniqueEntityId {
  private value: string

  // Método para retornar o identificador como uma string
  toString() {
    return this.value
  }

  // Método para retornar o valor do identificador
  toValue() {
    return this.value
  }

  constructor(value?: string) {
    // Se o valor for fornecido, usa o valor fornecido. Caso contrário, gera um UUID
    this.value = value ?? crypto.randomUUID()
  }
}
