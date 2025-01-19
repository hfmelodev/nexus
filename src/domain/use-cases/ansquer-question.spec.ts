import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'

test('Deve criar uma resposta', () => {
  const answerQuestion = new AnswerQuestionUseCase()

  const answer = answerQuestion.execute({
    content: 'Conteudo da resposta',
    questionId: '1',
    instructorId: '1',
  })

  expect(answer.content).toEqual('Conteudo da resposta')
})
