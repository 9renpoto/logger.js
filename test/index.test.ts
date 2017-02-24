import 'mocha'
import * as faker from 'faker'
import logger, { Logger } from '../lib/index'
import * as Raven from 'raven-js'
import * as assert from 'power-assert'

describe('Logger', () => {
  function createDSN () {
    const random: any = faker.random
    return `https://${random.alphaNumeric()}@${random.alphaNumeric()}/${random.number()}`
  }

  it('error', () => {
    assert(logger.error(faker.random.uuid()) === undefined)
  })

  it('warn', () => {
    assert(logger.warn(faker.random.uuid()) === undefined)
  })

  it('setup', () => {
    Raven.config(createDSN()).install()
    const instance = new Logger(Raven)
    assert(instance.error(faker.random.uuid()) === undefined)
  })
})
