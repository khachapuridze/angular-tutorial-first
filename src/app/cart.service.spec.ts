import { CartService } from "./cart.service";

describe('Test cartService', () => {
    let cartService;
    beforeEach(() => {
        cartService = new CartService();
    });

    it('Method addToCart should contain added item', () =>{
        let cart;
        cartService.addToCart(cart);
        expect(cartService.items).toContain(cart);
    });

    it('Method getItems should returnitems', () =>{

        cartService.getItems();
        expect(cartService.getItems()).toBe(cartService.items);
    });

    it('Method Remove should remove items', () =>{
        let item;
        cartService.Remove(item);
        expect(cartService.Remove()).toBeFalsy(cartService.items)
    });

    it('Method clearCart should remove items', () =>{
        cartService.clearCart();
        expect(cartService.clearCart()).toEqual([])
    });


})