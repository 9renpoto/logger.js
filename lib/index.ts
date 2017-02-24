
class Logger {
  private Raven: any
  constructor(r: any) {
    this.Raven = {}
    if (r) {
      this.Raven = r
    }
  }
  capture (msg: string, options = { level: 'error'}): void {
    try {
      if (this.Raven.isSetup && this.Raven.isSetup()) {
        this.Raven.captureMessage(msg, options)
      }
    } catch (err) {
      console.warn(err)
    }
  }
  warn (msg: string): void {
    this.capture(msg, {level: 'warning'})
  }
  error (msg: string): void {
    this.capture(msg)
  }
}

export { Logger }
export default new Logger(null)
