

// 1.Creational Patterns
// 1.1. Factory Pattern
// import { MailerFactory } from './Patterns/CreationalPatterns/FactoryPattern/MailerFactory.mjs'
// let userMailerSettings = { type: 'gmail', key :'123', pass : '123123' };
// let mailer = MailerFactory.createMailler(userMailerSettings);
// mailer.sendMail();

// 1.2. Singleton Pattern
// import {Database} from './Patterns/CreationalPatterns/SingletonPattern/Database.mjs';
// let db1 = Database.getInstance();
// db1.addData('item1');
// db1.addData('item2');
// db1.addData('item3');
// db1.logData();

// let db2 = Database.getInstance();
// db2.addData('item4');
// db2.logData();



// 1.3. Abstract Factory Pattern
// import { ToyotaCarFactory } from './Patterns/CreationalPatterns/AbstractFactoryPattern/Concrete/ToyotaCarFactory.mjs';
// let toyotaCarFactory = new ToyotaCarFactory();
// let toyotaSedan = toyotaCarFactory.createSedan();
// let toyotaSUV = toyotaCarFactory.createSUV();
// toyotaSedan.info();
// toyotaSUV.info();

// import { FordCarFactory } from './Patterns/CreationalPatterns/AbstractFactoryPattern/Concrete/FordCarFactory.mjs';
// let fordCarFactory = new FordCarFactory();
// let fordSedan = fordCarFactory.createSedan();
// let fordSUV = fordCarFactory.createSUV();
// fordSedan.info();
// fordSUV.info();


// 1.4. Builder Pattern
import { ComputerBuilder } from './Patterns/CreationalPatterns/BuilderPattern/ComputerBuilder.mjs';
let computer = new ComputerBuilder()
                        .setProcessor('i7')
                        .setMemory('16GB')
                        .setStorage('1TB')
                        .setGraphicsCard('Nvidia')
                        .build();
computer.info();

