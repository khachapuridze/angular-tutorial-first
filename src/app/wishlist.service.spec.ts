import { WishListService } from "./wishlist.service";
import { products } from './products';

describe('Testing wishlistService', ()=>{
    let wishlistService;
    beforeEach(()=>{
        wishlistService = new WishListService();
    })

    it('Method getWishlist should retun array', () =>{
        wishlistService.getWishList();
        const check = wishlistService.wishlist;

        expect(check).toEqual([]);

    }); 

    it('Method clearWishlist should retun array', () =>{
        wishlistService.clearWishList();
        const check = wishlistService.wishlist;

        expect(check).toEqual([]);

    }); 

    it('Method addToWishList should be added product', () =>{
        wishlistService.addToWishList(products);
        const check = wishlistService.wishlist;

        expect(check).toContain(products);

    }); 

})