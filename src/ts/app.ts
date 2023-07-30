import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

console.log(cart.items);

class Movie {
    constructor(cart){
        this.cart = cart;
    }
    show(cart){
        for(let key as cart){
            console.log(key, cart[key]);
        }
    }
}