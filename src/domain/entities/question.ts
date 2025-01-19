import { Entity } from '@/core/entities/entity'
import type { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'
import type { Optional } from '@/core/types/optional'
import dayjs from 'dayjs'
import { Slug } from './value-objects/slug'

interface QuestionProps {
  authorId: UniqueEntityId
  bestAnswerId?: UniqueEntityId
  title: string
  content: string
  slug: Slug
  createdAt: Date
  updatedAt?: Date
}

export class Question extends Entity<QuestionProps> {
  get authorId() {
    return this.props.authorId
  }

  get bestAnswerId() {
    return this.props.bestAnswerId
  }

  get title() {
    return this.props.title
  }

  get content() {
    return this.props.content
  }

  get slug() {
    return this.props.slug
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  get isNew(): boolean {
    // Verifica se a pergunta foi criada nos últimos 3 dias
    return dayjs().diff(this.createdAt, 'days') <= 3
  }

  get excerpt() {
    // Esse método retorna o conteúdo da pergunta limitado a 120 caracteres
    return this.content.substring(0, 120).trimEnd().concat('...')
  }

  // Método para atualizar a data de atualização
  private touch() {
    this.props.updatedAt = new Date()
  }

  set title(title: string) {
    this.props.title = title
    this.props.slug = Slug.createFromText(title)

    // Ao alterar o título, a data de atualização é atualizada
    this.touch()
  }

  set content(content: string) {
    this.props.content = content

    // Ao alterar o conteúdo, a data de atualização é atualizada
    this.touch()
  }

  set bestAnswerId(bestAnswerId: UniqueEntityId | undefined) {
    this.props.bestAnswerId = bestAnswerId

    // Ao alterar a melhor resposta, a data de atualização é atualizada
    this.touch()
  }

  static create(
    props: Optional<QuestionProps, 'createdAt' | 'slug'>,
    id?: UniqueEntityId
  ) {
    const question = new Question(
      {
        ...props,
        // Se o slug for fornecido, usa o slug fornecido. Caso contrário, cria um slug a partir do título
        slug: props.slug ?? Slug.createFromText(props.title),
        createdAt: new Date(),
      },
      id
    )

    return question
  }
}
