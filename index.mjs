

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
// import { OldMusicPlayer } from "./Patterns/StructuralPatterns/AdapterPattern/OldMusicPlayer.mjs";
// import { NewMusicPlayerAdapter } from "./Patterns/StructuralPatterns/AdapterPattern/NewMusicPlayerAdapter.mjs";
// import { NewMusicPlayer } from "./Patterns/StructuralPatterns/AdapterPattern/NewMusicPlayer.mjs";

// let oldMusicPlayer = new OldMusicPlayer();
// oldMusicPlayer.playMusic();

// let newMusicPlayer = new NewMusicPlayer();
// newMusicPlayer.play();

// let musicPlayerAdapter = new NewMusicPlayerAdapter(newMusicPlayer);
// musicPlayerAdapter.playMusic();


// 2.2. Bridge Pattern
// import { TV } from './Patterns/StructuralPatterns/BridgePattern/TV.mjs';
// import { BasicRemote } from './Patterns/StructuralPatterns/BridgePattern/BasicRemote.mjs';
// import { SmartRemote } from './Patterns/StructuralPatterns/BridgePattern/SmartRemote.mjs';
// let tv = new TV();
// let basicRemote = new BasicRemote(tv);
// basicRemote.togglePower();
// basicRemote.volumeUp();
// basicRemote.volumeUp();
// basicRemote.volumeDown();
// basicRemote.channelUp();
// basicRemote.channelDown();

// let smartRemote = new SmartRemote(tv);
// smartRemote.togglePower();
// smartRemote.volumeUp();
// smartRemote.volumeUp();
// smartRemote.volumeDown();


// 2.3. Composite Pattern
// import { Manager } from './Patterns/StructuralPatterns/CompositePattern/Manager.mjs';
// import { Developer } from './Patterns/StructuralPatterns/CompositePattern/Developer.mjs';

// const ceo = new Manager("John", "CEO");
// const headDeveloper = new Manager("Alice", "Head Developer");
// const developer1 = new Developer("Bob", "Developer");
// const developer2 = new Developer("Charlie", "Developer");

// headDeveloper.addEmployee(developer1);
// headDeveloper.addEmployee(developer2);

// ceo.addEmployee(headDeveloper);
// ceo.display();


// 2.4. Decorator Pattern
// import { SimpleCoffee } from './Patterns/StructuralPatterns/DecoratorPattern/SimpleCoffee.mjs';
// import { WithMilk } from "./Patterns/StructuralPatterns/DecoratorPattern/Components/WithMilk.mjs";
// import { WithSugar } from "./Patterns/StructuralPatterns/DecoratorPattern/Components/WithSugar.mjs";

// let coffee = new SimpleCoffee();
// console.log(coffee.getDescription());;
// console.log(coffee.getCost());

// let coffeeWithMilk = new WithMilk(coffee);
// console.log(coffeeWithMilk.getDescription());
// console.log(coffeeWithMilk.getCost());

// let coffeeWithSugar = new WithSugar(coffee);
// console.log(coffeeWithSugar.getDescription());
// console.log(coffeeWithSugar.getCost());


// 2.5 Facade Pattern
// import {HomeAutomationFacade} from './Patterns/StructuralPatterns/FacadePattern/HomeAutomationFacade.mjs';
// const homeAutomation = new HomeAutomationFacade();
// homeAutomation.arriveHome();
// homeAutomation.leaveHome();


// 2.6 Flyweight Pattern
// import { CircleFactory } from "./Patterns/StructuralPatterns/FlyweightPattern/CircleFactory.mjs";

// const factory = new CircleFactory();

// const redCircle1 = factory.getCircle("Kırmızı");
// redCircle1.draw(10, 20, 30);

// const redCircle2 = factory.getCircle("Kırmızı");
// redCircle2.draw(50, 60, 30);

// const blueCircle = factory.getCircle("Mavi");
// blueCircle.draw(20, 30, 40);


// 2.7 Proxy Pattern
// import { User } from "./Patterns/StructuralPatterns/ProxyPattern/User.mjs";
// import { VideoServiceProxy } from "./Patterns/StructuralPatterns/ProxyPattern/VideoServiceProxy.mjs";

// const normalUser = new User("Ali", false);
// const premiumUser = new User("Veli", true);

// const videoProxyForNormalUser = new VideoServiceProxy(normalUser);
// videoProxyForNormalUser.playVideo("1234");

// const videoProxyForPremiumUser = new VideoServiceProxy(premiumUser);
// videoProxyForPremiumUser.playVideo("1234");


// 3.1 Chain of Responsibility Pattern
// import { EmailValidator } from "./Patterns/BehavioralPatterns/ChainOfResponsibilityPattern/EmailValidator.mjs";
// import { PasswordLengthValidator } from "./Patterns/BehavioralPatterns/ChainOfResponsibilityPattern/PasswordLengthValidator.mjs";
// import { PasswordMatchValidator } from "./Patterns/BehavioralPatterns/ChainOfResponsibilityPattern/PasswordMatchValidator.mjs";

// const emailValidator = new EmailValidator();
// const passwordLengthValidator = new PasswordLengthValidator();
// const passwordMatchValidator = new PasswordMatchValidator();

// emailValidator
//     .setNext(passwordLengthValidator)
//     .setNext(passwordMatchValidator);

// const formRequest = {
//   email: "example@example.com",
//   password: "mypass123123",
//   confirmPassword: "mypass123123",
// };

// // Doğrulama işlemini başlatma
// const isFormValid = emailValidator.validate(formRequest);

// if (isFormValid) {
//   console.log("Form doğrulandı ve geçerli!");
// } else {
//   console.log("Form doğrulama başarısız oldu.");
// }

// 3.2 Command Pattern
// import { GameCharacter } from "./Patterns/BehavioralPatterns/CommandPattern/GameCharacter.mjs";
// import { GameController } from "./Patterns/BehavioralPatterns/CommandPattern/GameController.mjs";
// import { MoveForwardCommand } from "./Patterns/BehavioralPatterns/CommandPattern/MoveForwardCommand.mjs";
// import { MoveBackwardCommand } from "./Patterns/BehavioralPatterns/CommandPattern/MoveBackwardCommand.mjs";
// import { JumpCommand } from "./Patterns/BehavioralPatterns/CommandPattern/JumpCommand.mjs";

// const character = new GameCharacter("Kahraman");
// const gameController = new GameController();

// const moveForward = new MoveForwardCommand(character, 10);
// const moveBackward = new MoveBackwardCommand(character, 5);
// const jump = new JumpCommand(character);

// gameController.executeCommand(moveForward);  // Output: Kahraman 10 adım ileri gitti. Şu anki pozisyon: 10
// gameController.executeCommand(jump);         // Output: Kahraman zıpladı!
// gameController.executeCommand(moveBackward); // Output: Kahraman 5 adım geri gitti. Şu anki pozisyon: 5

// gameController.undo(); // Output: Kahraman 5 adım ileri gitti. Şu anki pozisyon: 10
// gameController.undo(); // Output: Kahraman geri zıplayamaz!
// gameController.undo(); // Output: Kahraman 10 adım geri gitti. Şu anki pozisyon: 0

// 3.3 Iterator Pattern
// import { BookCollection } from "./Patterns/BehavioralPatterns/IteratorPattern/BookCollection.mjs";

// const collection = new BookCollection();
// collection.addBook("Kitap 1");
// collection.addBook("Kitap 2");
// collection.addBook("Kitap 3");

// const iterator = collection.createIterator();

// while (iterator.hasNext()) {
//   console.log(iterator.next());
// }


// 3.4 Mediator Pattern
// import { ChatRoom } from "./Patterns/BehavioralPatterns/MediatorPattern/ChatRoom.mjs";
// import { User } from "./Patterns/BehavioralPatterns/MediatorPattern/User.mjs";

// const mediator = new ChatRoom();

// const user1 = new User("Ahmet", mediator);
// const user2 = new User("Mehmet", mediator);

// user1.sendMessage("Merhaba, Mehmet!");

// user2.sendMessage("Merhaba, Ahmet! Nasılsın?");


// 3.5 Observer Pattern
// import { NewsAgency } from "./Patterns/BehavioralPatterns/ObserverPattern/NewsAgency.mjs";
// import { NewsChannel } from "./Patterns/BehavioralPatterns/ObserverPattern/NewsChannel.mjs";

// const newsAgency = new NewsAgency();

// const channel1 = new NewsChannel("TRT Haber");
// const channel2 = new NewsChannel("CNN News");

// newsAgency.subscribe(channel1);
// newsAgency.subscribe(channel2);

// newsAgency.updateNews("Son dakika !! yeni haber");

// newsAgency.unsubscribe(channel2);

// newsAgency.updateNews("Yeni bir haber daha!");

// 3.6 State Pattern
import { Order } from "./Patterns/BehavioralPatterns/StatePattern/Order.mjs";
const order = new Order();

order.proceed(); // Output: Sipariş Onaylandı! Hazırlanıyor...
order.proceed(); // Output: Sipariş Hazırlandı! Teslim ediliyor...
order.proceed(); // Output: Sipariş Teslim Edildi! Süreç tamamlandı.
order.proceed(); // Output: Sipariş zaten teslim edilmiş. İşlem yapılamaz.