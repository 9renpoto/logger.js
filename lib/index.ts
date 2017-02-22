class Logger {
  private Raven: any
  constructor(r: any) {
    this.Raven = {}
    if (r) {
      this.Raven = r
    }
  }
  warn (msg: string): void {
    this.Raven.captureMessage(msg, {level: 'warning'})
  }
  error (msg: string): void {
    this.Raven.captureMessage(msg)
  }
}

export { Logger }
