
class MailerFactory {
  static createMailler(userMailerSettings) {
    switch (userMailerSettings.type) {
      case 'gmail':
        return new GmailMailler(userMailerSettings);
      case 'yahoo':
        return new YahooMailler(userMailerSettings);
      default:
        throw new Error('Invalid type');
    }
  }
}

class GmailMailler {

    constructor(userMailerSettings) {
        this.userMailerSettings = userMailerSettings;
    }
    sendMail() {
        console.log('Sending mail using Gmail');
    }
}

class YahooMailler {

    constructor(userMailerSettings) {
        this.userMailerSettings = userMailerSettings;
    }

    sendMail() {
        console.log('Sending mail using Yahoo');
    }
}

export { MailerFactory };