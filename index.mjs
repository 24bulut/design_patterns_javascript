

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
// import { ComputerBuilder } from './Patterns/CreationalPatterns/BuilderPattern/ComputerBuilder.mjs';
// let computer = new ComputerBuilder()
//                         .setProcessor('i7')
//                         .setMemory('16GB')
//                         .setStorage('1TB')
//                         .setGraphicsCard('Nvidia')
//                         .build();
// computer.info();


// 1.5. Prototype Pattern
// import { Character } from "./Patterns/CreationalPatterns/PrototypePattern/Character.mjs";
// let prototypeWarrior = new Character('Warrior', 100, 10,10);
// let warrior1 = prototypeWarrior.clone();
// warrior1.info();
// let warrior2 = prototypeWarrior.clone();
// warrior2.info();

// let prototypeNinja = new Character('Ninja', 100, 10,10);
// let ninja1 = prototypeNinja.clone();
// ninja1.info();


// 2. Structural Patterns
// 2.1. Adapter Pattern
import { OldMusicPlayer } from "./Patterns/StructuralPatterns/AdapterPattern/OldMusicPlayer.mjs";
import { NewMusicPlayerAdapter } from "./Patterns/StructuralPatterns/AdapterPattern/NewMusicPlayerAdapter.mjs";
import { NewMusicPlayer } from "./Patterns/StructuralPatterns/AdapterPattern/NewMusicPlayer.mjs";

let oldMusicPlayer = new OldMusicPlayer();
oldMusicPlayer.playMusic();

let newMusicPlayer = new NewMusicPlayer();
newMusicPlayer.play();

let musicPlayerAdapter = new NewMusicPlayerAdapter(newMusicPlayer);
musicPlayerAdapter.playMusic();
