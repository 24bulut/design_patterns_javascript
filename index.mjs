

// Creational Patterns
// 1. Factory Pattern
import { MailerFactory } from './Patterns/CreationalPatterns/FactoryPattern/MailerFactory.mjs'
let userMailerSettings = { type: 'gmail', key :'123', pass : '123123' };
let mailer = MailerFactory.createMailler(userMailerSettings);
mailer.sendMail();

