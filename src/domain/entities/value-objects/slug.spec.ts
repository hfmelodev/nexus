import { expect, test } from 'vitest'
import { Slug } from './slug'

test('Deve criar um slug', () => {
  const slug = Slug.createFromText('Exemplo de Slug #1')

  expect(slug.value).toEqual('exemplo-de-slug-1')
})
