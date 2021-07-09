import { Album } from './album';
import { PhotoOrientation } from './photoOrientation';
import { Picture } from './picture';
import { User } from './user';

const user = new User(1, 'jesuskata', 'Jesus', true);
const album = new Album(1, 'Pictures001');
const picture = new Picture(1, 'photo001', 'hoy', PhotoOrientation.Square);

// Creando relaciones entre los objetos
user.addAlbum(album);
album.addPicture(picture);
console.log('user: ', user);

// Borramos album
user.removeAlbum(album);
console.log('user: ', user);
