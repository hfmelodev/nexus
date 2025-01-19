import { expect, test } from 'vitest'
import type { AnswersRepository } from '../repositories/answers-repository'
import { AnswerQuestionUseCase } from './answer-question'

const fakeAnswersRepository: AnswersRepository = {
  create: async () => {},
}

test('Deve criar uma resposta', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.execute({
    content: 'Conteudo da resposta',
    questionId: '1',
    instructorId: '1',
  })

  expect(answer.content).toEqual('Conteudo da resposta')
})
