import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas para 08-imp-exp', () => { 
    test('getHeroeById id debe de ser numero, name debe de ser string y owner string', () => { 
        const cod = 1;
        const {id, name, owner} = getHeroeById(cod);
        const validOwners = ['DC', 'Marvel'];
        console.log(id, name, owner);
        expect(typeof id).toBe('number');
        expect(typeof name).toBe('string');
        expect(typeof owner).toBe('string');
        expect(validOwners).toContain(owner);
     })

 })