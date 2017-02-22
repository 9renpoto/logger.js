import 'mocha'
import * as faker from 'faker'
import logger from '../lib'
import * as assert from 'power-assert'

describe('Logger', () => {
  it('error', () => {
    assert(logger.error(faker.random.uuid()))
  })
})
