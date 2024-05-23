describe("Pruebas para <DemoComponent />", () => {
    
    test('Esta prueba no debe de fallar', () => {
        const message1 = 'Hola mundi';

        const message2 = message1.trim();

        expect (message2).toBe(message1);
    })
});  