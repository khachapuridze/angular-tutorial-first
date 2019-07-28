import { AuthService } from "./auth.service";

describe('Auth Service tests', () =>{
    let service: AuthService;

    beforeEach(()=> {
        service = new AuthService;
    })


    it('Default value of access should be false', () =>{
        expect(service.isEnabled()).toBe(false);

    }); 

    it('Method allow of access should be true', () =>{
        service.allow();
        expect(service.isEnabled()).toBe(true);
    });

    it('Method disallow of access should be false', () =>{
        service.disallow();
        expect(service.isEnabled()).toBe(false);
    });

    it('Method isEnabled should return the access value', () =>{
        expect(service.isEnabled()).toBe(service.access);
    });



});
