import { UsersService } from './user.service';

describe('Testing usersService', ()=>{
    let usersService;
    beforeEach(()=>{
        usersService = new UsersService();
    })

    it('Method addToUsers should add user', () =>{
        let example;
        usersService.addToUsers(example);
        const check = usersService.usersList;
        expect(check).toContain(example);

    }); 

    it('Method getAll should return array', () =>{
        usersService.getAll();
        const check = usersService.usersList;
        expect(check).toEqual([]);

    });

    // it('Method getAll should return array', () =>{
    //     usersService.verify();
    //     const check = usersService.usersList;
    //     expect(check).toEqual([]);

    // }); 

})