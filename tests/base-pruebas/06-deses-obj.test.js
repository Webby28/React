import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas para 06-deses-obj', () => { 
    test('usContext debe retornar un objeto', () => { 
        const persona = { 
            nombre: 'Tony', 
            edad: 45, 
            clave: 'Ironman' 
        }; 
        const { nombreClave, anios } = usContext( persona ); 
        expect( usContext( persona ) ).toEqual({ 
            nombreClave: 'Ironman', 
            anios: 45, 
            latlng: { 
                lat: 14.1232, 
                lng: -12.3232 
            } 
        });

     })
 })