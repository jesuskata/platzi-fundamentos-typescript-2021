console.log('Hello main');

// Explícito
let phone: number;
phone = 12;
// phone = 'Hello'; // Error por tipo

// Inferido
let phoneNumber = 2;
// phoneNumber = null; // Error por tipo

// Otros ejemplos
let hex: number = 0xf00d;
let binary: number = 0b1001;
let octal: number = 0o744;

// Tipo: Boolean
// Explícito
let isValid: boolean;
isValid = true;
// isValid = 'Yes'; // Error de tipo

// Inferido
let isUserValid = true;
// isUserValid = 'No'; // Error de tipo

// Tipo: String
// Explícito
let firstName: string = 'Alex';
// firstName = 23; // Error de tipo

// inferido
let lastName = 'Romero';
// lastName = true; // Error de tipo

// Template string
// Uso de backtick `
let userInfo: string;
userInfo = `
  User Info:
  firstName: ${firstName}
  lastName: ${lastName}
  phone: ${phone}
  isValid: ${isValid}
`;

// Tipo: Any
// Explícito
let userId: any;
userId = 1;
userId = '1';
console.log('userId: ', userId);

let surprise: any = 'Hello TypeScript';
// surprise.sayHello(); // Error de ejecución
const res = surprise.substring(6); // Posible error futuro
console.log('res: ', res);

// Implícito
let otherId;
otherId = 1;
otherId = '1';
console.log('otherId: ', otherId);

// Tipo: Void
// Explícito
function showInfo(user: any): void {
  console.log('user info: ', user.id, user.firstName, user.lastName);
}

const showInfoArrow = (user: any): void => {
  console.log('user info: ', user.id, user.firstName, user.lastName);
}

// Inferido
function showFormattedInfo(user: any) {
  console.log('formatted info: ', `
    id: ${user.id}
    firstName: ${user.firstName}
    lastName: ${user.lastName}
  `);
}

// Tipo: Void, como tipo de dato en una variable
let unusable: void;
// unusable = null; // En el modo strict esto marca error, pero puede ponerse en false y es aceptado
// unusable = undefined; // En el modo strict esto marca error, pero puede ponerse en false y es aceptado

// Tipo: Never
// Explícito
function handleError(code: number, message: string): never {
  // Se procesa el código
  // Se genera un mensaje
  throw new Error(`${message}. Code ${code}`);
}

try {
  handleError(404, 'Not found');
} catch(error) {}

const handleErrorArrow = (code: number, message: string): never => {
  // Se procesa el código
  // Se genera un mensaje
  throw new Error(`${message}. Code ${code}`);
}

try {
  handleError(404, 'Not found');
} catch(error) {}

function sumNumbers(limit: number): never {
  let sum = 0;
  while(true) {
    sum++;
  }
}

// sumNumbers(10); // Ciclo infinito, el programa nunca termina

// Tipo: Null y Undefined
// Explícito
let nullVariable: null;
nullVariable = null;
// nullVariable = 12; // Error de tipo

// Inferido
let otherVariable = null;
otherVariable = 'Hello';

console.log('null variable: ', nullVariable);
console.log('other variable: ', otherVariable); // Error de unreachable code detected

// Explícito
let undefinedVariable: undefined;
undefinedVariable = undefined;
// undefinedVariable = 'Hi'; // Error de tipo

// Inferido
let otherUndefinedVariable = undefined;
otherUndefinedVariable = 12;

console.log('undefined variable: ', undefinedVariable);
console.log('other undefined variable: ', otherUndefinedVariable); // Error de unreachable code detected

// Null y Undefined como subtipos
let numberVariable: number = 12;
// numberVariable = null; // Error al tener activo strict y strictNullChecks
// numberVariable = undefined; // Error al tener activo strict y strictNullChecks

// Tipo: object
// Explícito
let user: object;
user = {};
user = {
  id: 'asdr',
  firstName: 'Alex',
  lastName: 'Romero'
}

console.log('user: ', user);
// console.log('user id: ', user.id); // Error Property 'id' does not exist on type 'object'

// Object VS object (Clase JS VS tipo TS)
const myObject = {
  id: 'asdr',
  firstName: 'Alex',
  lastName: 'Romero'
}

const isInstance = myObject instanceof Object; // Clase Object de JS
console.log('isInstance: ', isInstance);

// Tipo: Array
// Explícito
let users: string[];
users = ['hello', 'world'];
// users = [12, true, 'test']; // Error de tipo

// Inferido
let usersInferido = ['hello', 'world'];
// usersInferido = [12, true, 'test']; // Error de tipo

// Array<tipo>
let pictureTitles: Array<string>;
pictureTitles = ['Faces', 'Family', 'Church'];

// Accediendo a los valores de un Array
console.log('first user: ', users[0]);

// Propiedades en Array
console.log('users length: ', users.length);

// Uso de funciones en Array
users.push('platziUser');
users.sort((a, b) => (a > b ? 1 : -1));

// Tipo: Tupla
// Explícito
let userTupla: [number, string]; // [12, 'Jesus'];
userTupla = [1, 'Uno'];
// userTupla = ['hello', 'world']; // Error de tipo

console.log('userTupla: ', userTupla);
console.log('name: ', userTupla[1]);
console.log('name: ', userTupla[1].length); // Al agregar el punto, TypeScript nos devuelve funciones relacionadas con strings
console.log('id: ', userTupla[0]);
console.log('id: ', userTupla[0].toExponential); // Al agregar el punto, TypeScript nos devuelve funciones relacionadas con numbers

// Tuplas con varios valores
let userInfoTupla: [number, string, boolean];
userInfoTupla = [12, 'Jesus', true];
console.log('userInfoTupla: ', userInfoTupla);

// Arreglo de tuplas
let tuplaArray: [number, string][] = []; // Se inicializa un array que dentro va a contener arrays de number, string
tuplaArray.push([1, 'Uno']);
tuplaArray.push([2, 'Dos']);
tuplaArray.push([3, 'Tres']);
console.log('tupla array: ', tuplaArray);
tuplaArray[2][1] = tuplaArray[2][1].concat('001'); // [3, 'Tres001]
console.log('tupla array: ', tuplaArray);

// Tipo: Enum
// Explícito
// La manera tradicional de hacerlo en JS
/* const landscape = 1;
const square = 2;
const wide = 3;
const panorama = 4; */

enum PhotoOrientation {
  Landscape = 0, // 0
  Square = 1, // 1
  Wide = 2, // 2
  Panorama = 3 // 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape number: ', landscape);
console.log('landscape name: ', PhotoOrientation[landscape]);

enum PictureOrientation {
  Landscape = 10, // 10
  Square, // 11
  Wide, // 12
  Panorama // 13
}
console.log('picture orientation wide: ', PictureOrientation.Wide); // 12

enum Country {
  Bolivia = 'bol',
  Colombia = 'col',
  Mexico = 'mex',
  Brasil = 'bra',
}
const country: Country = Country.Mexico;
console.log('country: ', country); // mex

// Unión de tipos, alias y tipos literales
// Unión de tipos
let usuarioId: number | string;
usuarioId = 10;
usuarioId = '10';

function getUsuarioById(id: number | string) {
  // Lógica de negocio
  return 'Jesus';
}

// Alias de tipos
type UsuarioAlias = number | string;
type Usuario = string;
let usuarioAliasId: UsuarioAlias;
usuarioAliasId = 10;
usuarioAliasId = '10';

function getUsuarioAliasById(id: UsuarioAlias): Usuario {
  // Lógica de negocio
  return 'Jesus';
}

// Tipos literales
type SquareSize = '100x100' | '500x500' | '1000x1000';
// const smallPicture: SquareSize = "200x200"; // Error Type '"200x200"' is not assignable to type 'SquareSize'
const smallPicture: SquareSize = "100x100";
const mediumPicture: SquareSize = "500x500";

// Aserciones de tipo
// <tipo> || Angle Brackets syntax
let asertionName: any;
asertionName = 'jesusRomero';

let message: string = (<string>asertionName).length > 5
  ? `Welcome ${asertionName}`
  : 'Asertion name too short';
console.log('message: ', message); // Welcome jesusRomero

let asertionNameWithId: any = 'alejandro 1';
// Cómo obtener username?
asertionName = (<string>asertionNameWithId).substring(0, 8);
console.log('asertionName: ', asertionName); // alejandro

// Sintaxis as
let messageAs: string = (asertionName as string).length > 5
  ? `Welcome ${asertionName}`
  : 'Asertion name too short';
console.log('message as: ', messageAs); // Welcome jesusRomero

let asertionNameWithIdAs: any = 'alejandro 1';
// Cómo obtener username?
asertionName = (asertionNameWithIdAs as string).substring(0, 8);
console.log('asertionName: ', asertionName); // alejandro

// Funciones en TypeScript
type SquareSizes = '100x100' | '500x500' | '1000x1000';
function createPictureFunc(title: string, date: string, size: SquareSizes) {
  // Se crea la fotografía
  console.log('create picture using: ', title, date, size);
}

createPictureFunc('hello', 'martes', '500x500');
// createPictureFunc('hello', 'martes'); // Error, hace falta el tercer parámetro

// Uso de parámetros opcionales
function createPictureOptFunc(title: string, date: string, size?: SquareSizes) {
  // Se crea la fotografía
  console.log('create picture using: ', title, date, size);
}

createPictureOptFunc('hello', 'martes', '500x500');
createPictureOptFunc('hello', 'martes');

// Flat array function
let createPic = (title: string, date: string, size: SquareSizes): object => {
  return { title, date, size };
}

const pic001 = createPic('hello', 'martes', '1000x1000');
console.log('pic001: ', pic001);

// Tipo de retorno con TypeScript
function handleNewError(code: number, message:string): never | string {
  // Procesamiento
  if (message === 'error') {
    throw new Error(`${message}. Code error: ${code}`);
  } else {
    return 'An error has ocurred';
  }
}

let newResult = handleNewError(200, 'OK'); // string
console.log('new result: ', newResult);
newResult = handleNewError(400, 'Error'); // never
console.log('new result: ', newResult);

try {
  let newResult = handleNewError(200, 'OK'); // string
  console.log('new result: ', newResult);
  newResult = handleNewError(400, 'Error'); // never
  console.log('new result: ', newResult);
} catch(error) {}

// Interfaces
enum PhotoOrientationInt {
  Landscape, // 0
  Square, // 1
  Wide, // 2
  Panorama // 3
};

function showPictureInt(picture: { title: string, date: string, orientation: PhotoOrientationInt }) {
  console.log(`
    [
      title: ${picture.title},
      date: ${picture.date},
      orientation: ${picture.orientation}
    ]
  `)
}

const myPicInt = {
  title: 'Test',
  date: 'martes',
  orientation: PhotoOrientationInt.Landscape
}

showPictureInt(myPicInt);
showPictureInt({
  title: 'Test',
  date: 'martes',
  orientation: PhotoOrientationInt.Landscape,
  // extra: 'extra' // Error porque no es parte del contrato original definido arriba
})

// Creación de una interfaz
interface Picture {
  title: string,
  date: string,
  orientation: PhotoOrientationInt
}

function showInterfacedPicture(picture: Picture) {
  console.log(`
    [
      title: ${picture.title},
      date: ${picture.date},
      orientation: ${picture.orientation}
    ]
  `)
}

// Propiedades opcionales en interfaces
interface PictureConfig {
  title?: string,
  date?: string,
  orientation?: PhotoOrientationInt
}

function generatePictureInt(config: PictureConfig) {
  const pic = {
    title: 'default',
    date: 'default'
  };
  if (config.title) {
    pic.title = config.title;
  }
  if (config.date) {
    pic.date = config.date;
  }

  return pic;
}

let pictureInt = generatePictureInt({});
console.log('picture int: ', pictureInt);
pictureInt = generatePictureInt({ title: 'Hola' });
console.log('picture int: ', pictureInt);
pictureInt = generatePictureInt({ title: 'Hola', date: 'mañana' });
console.log('picture int: ', pictureInt);

// Propiedades de solo lectura
interface UsuarioIntRO {
  readonly id: number,
  username: string,
  isPro: boolean
}

let userIntRO: UsuarioIntRO;
userIntRO = {
  id: 12,
  username: 'jesuskata',
  isPro: true
}
console.log('user int readonly: ', userIntRO);
userIntRO.username = 'paparazzi';
console.log('user int readonly: ', userIntRO);
// userIntRO.id = 14; // Error, debido a que se definió como un atributo de solo lectura

// Extendiendo interfaces
enum PhotoOrientationExt {
  Landscape, // 0
  Square, // 1
  Wide, // 2
  Panorama // 3
};

interface EntityExt {
  id: number,
  title: string
};

interface AlbumExt extends EntityExt {
  // Con la palabra reservada y la conexión a la entidad, ya tenemos una copia de los atributos de la entidad (id, title)
  description: string
};

interface PictureExt extends EntityExt {
  // Con la palabra reservada y la conexión a la entidad, ya tenemos una copia de los atributos de la entidad (id, title)
  orientation: PhotoOrientationExt
};

const albumExtExample: AlbumExt = {
  id: 12,
  title: 'memories',
  description: 'desde 2020'
};

const pictureExtExample: PictureExt = {
  id: 1,
  title: '12122021-pic001',
  orientation: PhotoOrientationExt.Wide
};

let newPictureExtExample = {} as PictureExt;
newPictureExtExample.id = 3;
newPictureExtExample.title = '06012021-pic001';
console.log('album example: ', albumExtExample);
console.log('picture extended example: ', pictureExtExample);
console.log('new picture extended example: ', newPictureExtExample);

// Clases en TypeScript
enum PhotoOrientationClass {
  Landscape, // 0
  Square, // 1
  Wide, // 2
  Panorama // 3
};

class PictureClass {
  // Propiedades
  private _id: number;
  private _title: string;
  private _orientation: PhotoOrientationClass;

  public constructor(id: number, title: string, orientation: PhotoOrientationClass) {
    this._id = id;
    this._title = title;
    this._orientation = orientation;
  };

  get id() {
    return this._id;
  }
  set id(id: number) {
    this._id = id;
  }

  get title() {
    return this._title;
  }
  set title(title: string) {
    this._title = title;
  }

  get orientation() {
    return this._orientation;
  }
  set orientation(o: PhotoOrientationClass) {
    this._orientation = o;
  }

  // Comportamiento
  public toString() {
    return `
      [
        id: ${this._id},
        title: ${this._title},
        orientation: ${this._orientation}
      ]
    `
  }
}

class AlbumClass {
  // Propiedades
  private _id: number;
  private _title: string;
  private _pictures: PictureClass[];

  public constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
    this._pictures = [];
  };

  get id() {
    return this._id;
  }
  set id(id: number) {
    this._id = id;
  }

  get title() {
    return this._title;
  }
  set title(title: string) {
    this._title = title;
  }

  // Comportamiento
  public addPicture(picture: PictureClass) {
    this._pictures.push(picture);
  }
}

const newAlbumClassExample: AlbumClass = new AlbumClass(1, 'Fotos de familia');
const newPictureClassExample: PictureClass = new PictureClass(33, 'photo', PhotoOrientationClass.Panorama);
newAlbumClassExample.addPicture(newPictureClassExample);
console.log('new album class example: ', newAlbumClassExample);

// Accediendo a los miembros por modificadores de acceso
// newPictureClassExample.id = 100; // public
// newPictureClassExample.title = 'New name'; // public
// newAlbumClassExample.title = 'New album'; // public
console.log('new album class example: ', newAlbumClassExample);

// Accediendo a los miembros por modificadores de acceso
newPictureClassExample.id = 100; // Error Property 'id' is private and only accessible within class 'PictureClass'
newPictureClassExample.title = 'New name'; // Error Property 'id' is private and only accessible within class 'PictureClass'
newAlbumClassExample.title = 'New album'; // Error Property 'title' is private and only accessible within class 'AlbumClass'
console.log('new album class example: ', newAlbumClassExample);

// Herencia de clases y miembros protegidos
enum PhotoOrientationClassHer {
  Landscape, // 0
  Square, // 1
  Wide, // 2
  Panorama // 3
};

// Definimos una SUPERClase
class Item {
  protected _id: number;
  protected _title: string;

  public constructor(id: number, title: string) {
    this._id = id,
    this._title = title
  }

  get id() {
    return this._id;
  }
  set id(id: number) {
    this._id = id;
  }

  get title() {
    return this._title;
  }
  set title(title: string) {
    this._title = title;
  }
}

class PictureClassHer extends Item {
  // Propiedades
  private _orientation: PhotoOrientationClassHer;

  public constructor(id: number, title: string, orientation: PhotoOrientationClassHer) {
    super(id, title); // Llamamos al constructor de la SUPERClase
    // this.id = id;
    // this.title = title;
    this._orientation = orientation;
  };

  get orientation() {
    return this._orientation;
  }
  set orientation(o: PhotoOrientationClassHer) {
    this._orientation = o;
  }

  // Comportamiento
  public toString() {
    return `
      [
        id: ${this._id},
        title: ${this._title},
        orientation: ${this._orientation}
      ]
    `
  }
}

class AlbumClassHer extends Item {
  // Propiedades
  private _pictures: PictureClassHer[];

  public constructor(id: number, title: string) {
    super(id, title); // Llamamos al constructor de la SUPERClase
    this._pictures = [];
  };

  // Comportamiento
  public addPicture(picture: PictureClassHer) {
    this._pictures.push(picture);
  }
}

const newAlbumClassHerExample: AlbumClassHer = new AlbumClassHer(1, 'Fotos de familia');
const newPictureClassHerExample: PictureClassHer = new PictureClassHer(33, 'photo', PhotoOrientationClassHer.Panorama);
newAlbumClassHerExample.addPicture(newPictureClassHerExample);
console.log('new album class example: ', newAlbumClassHerExample);

// Accediendo a los miembros por modificadores de acceso
newPictureClassHerExample.id = 100;
newPictureClassHerExample.title = 'New name';
newAlbumClassHerExample.title = 'New album';
console.log('new album class example: ', newAlbumClassHerExample);

// Accediendo a los miembros por modificadores de acceso
newPictureClassHerExample.id = 100;
newPictureClassHerExample.title = 'New name';
newAlbumClassHerExample.title = 'New album';
console.log('new album class example: ', newAlbumClassHerExample);

// Clases abstractas
abstract class ItemAbstract { // Con la palabra reservada abstract, se se evita su uso como clase para instanciar
  protected readonly _id: number;
  protected _title: string;

  public constructor(id: number, title: string) {
    this._id = id,
    this._title = title
  }

  get id() {
    return this._id;
  }
  // set id(id: number) {
  //   this._id = id;
  // }

  get title() {
    return this._title;
  }
  set title(title: string) {
    this._title = title;
  }
}

class PictureClassHerAbs extends ItemAbstract {
  public static photoOrientation = PhotoOrientationClassHer;
  // Propiedades
  private _orientation: PhotoOrientationClassHer;

  public constructor(id: number, title: string, orientation: PhotoOrientationClassHer) {
    super(id, title); // Llamamos al constructor de la SUPERClase
    // this.id = id;
    // this.title = title;
    this._orientation = orientation;
  };

  get orientation() {
    return this._orientation;
  }
  set orientation(o: PhotoOrientationClassHer) {
    this._orientation = o;
  }

  // Comportamiento
  public toString() {
    return `
      [
        id: ${this._id},
        title: ${this._title},
        orientation: ${this._orientation}
      ]
    `
  }
}

class AlbumClassHerAbs extends ItemAbstract {
  // Propiedades
  private _pictures: PictureClassHerAbs[];

  public constructor(id: number, title: string) {
    super(id, title); // Llamamos al constructor de la SUPERClase
    this._pictures = [];
  };

  // Comportamiento
  public addPicture(picture: PictureClassHerAbs) {
    this._pictures.push(picture);
  }
}

const newAlbumClassHerAbsExample: AlbumClassHerAbs = new AlbumClassHerAbs(1, 'Fotos de familia');
const newPictureClassHerAbsExample: PictureClassHerAbs = new PictureClassHerAbs(33, 'photo', PhotoOrientationClassHer.Panorama);
newAlbumClassHerAbsExample.addPicture(newPictureClassHerAbsExample);
console.log('new album class example: ', newAlbumClassHerAbsExample);

// Accediendo al miembro estático
console.log('PhotoOrientation: ', PictureClassHerAbs.photoOrientation.Landscape);

// Accediendo al miembro solo lectura
// newPictureClassHerAbsExample.id = 100; // Error Cannot assign to 'id' because it is a read-only property