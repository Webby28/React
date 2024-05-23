import { getUser, getUsuarioActivo, saludar2 } from "../../src/base-pruebas/05-funciones"



describe('Pruebas para 05-funciones', () => { 
    test('getsaludar2 debe retornar Hola, Williams', () => { 
        const name = "Williams";
        const resultado = `Hola, ${name}`;
        const message = saludar2(name);
        
        expect(resultado).toEqual(message);
     });
     test('getUser debe retornar un objeto', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();

        expect(user).toEqual(testUser);
      })

      test('getUsuarioActivo debe retornar el usuario', () => { 
        const name = 'Williams';
        const testUsuarioActivo = {
            uid: 'ABC567',
            username: name
        };

        const usuarioActivo = getUsuarioActivo(name);
        expect(testUsuarioActivo).toEqual(usuarioActivo)
       })
 })

