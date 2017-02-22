import 'mocha'
import * as faker from 'faker'
import { Logger } from '../src/index'
import * as assert from 'power-assert'

describe('Logger', () => {
  it('error', () => {
    const logger = new Logger(null)
    assert(logger.error(new Error(faker.random.uuid())))
  })
})
