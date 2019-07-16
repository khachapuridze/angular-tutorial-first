import { MenuComponent } from "./menu.component";

describe('Testin menucomponent', () => {
    let menuComponent;
    
    beforeEach(() =>{
        menuComponent = new MenuComponent();
    })

    it('Default value should be false', () => {
        const isOpen = menuComponent.isOpen;
        expect(isOpen).toBe(false);
    });
    it('Method showMenu should be true', () => {
        menuComponent.showMenu();
        const isOpen = menuComponent.isOpen;
        expect(isOpen).toBe(true);
    });

    it('Method hideMenu should be false', () => {
        menuComponent.hideMenu();
        const isOpen = menuComponent.isOpen;
        expect(isOpen).toBe(false);
    });

})