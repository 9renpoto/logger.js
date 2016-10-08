import 'autotrack'
import * as Raven from 'raven-js'

class Logger {
  constructor() {
    Raven.config('https://e1e235a11a1b455c9c8e1a9f7d7955aa@sentry.io/103445').install()
  }
  captureException (err: Error) {
    Raven.captureException(err)
  }
  warn (msg: string): void {
    Raven.captureMessage(msg, {level: 'warning'})
  }
  error (msg: string): void {
    Raven.captureMessage(msg)
  }
}

export default Logger
