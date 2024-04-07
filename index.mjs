

// Creational Patterns
// 1. Factory Pattern
// import { MailerFactory } from './Patterns/CreationalPatterns/FactoryPattern/MailerFactory.mjs'
// let userMailerSettings = { type: 'gmail', key :'123', pass : '123123' };
// let mailer = MailerFactory.createMailler(userMailerSettings);
// mailer.sendMail();

// 2. Singleton Pattern
import {Database} from './Patterns/CreationalPatterns/SingletonPattern/Database.mjs';
let db1 = Database.getInstance();
db1.addData('item1');
db1.addData('item2');
db1.addData('item3');
db1.logData();

let db2 = Database.getInstance();
db2.addData('item4');
db2.logData();

