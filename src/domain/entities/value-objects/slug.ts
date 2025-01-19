/**
 * Value Object => significa que ele representa um valor primitivo e imutável que representa uma entidade.
 * O valor do objeto não pode ser alterado depois de criado.
 */
export class Slug {
  public readonly value: string

  constructor(value: string) {
    this.value = value
  }

  /**
   * @description - O slug do post deve ser criado com o texto em lowercase e sem espaco
   *
   * Exemplo: "hello-world" => "hello-world"
   *
   * @param text {string}
   */
  static createFromText(text: string) {
    const slugText = text
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/_/g, '-')
      .replace(/--+/g, '-')
      .replace(/-$/g, '')

    return new Slug(slugText)
  }
}
