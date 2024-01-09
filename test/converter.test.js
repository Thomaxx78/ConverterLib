import convertCurrency from '../src/converter.js';

describe('convertCurrency()', () => {
    // Test pour un cas de conversion valide
    it('Should correctly convert the currency for a valid amount', async () => {
        const amount = 100; 
        const baseCurrency = 'EUR';
        const targetCurrency = 'USD';
    
        const result = await convertCurrency(amount, baseCurrency, targetCurrency);
        expect(result).toBeGreaterThan(0); // Vérifie que le résultat est positif
    });

    // Test pour un montant non numérique
    it('Should throw an error for non-numeric amount', async () => {
        expect.assertions(1);
        try {
            await convertCurrency('abc', 'EUR', 'USD');
        } catch (error) {
            expect(error.message).toMatch("Le montant doit être un nombre positif.");
        }
    });

    // Test pour la même devise de base et cible
    it('Should throw an error for the same base and target currency', async () => {
        expect.assertions(1);
        try {
            await convertCurrency(100, 'EUR', 'EUR');
        } catch (error) {
            expect(error.message).toMatch("La conversion n'est pas nécessaire pour la même devise.");
        }
    });

    it('Should throw an error if exchange rate is not available', async () => {
        expect.assertions(1);
        try {
            await convertCurrency(100, 'XYZ', 'ABC');
        } catch (error) {
            expect(error.message).toMatch("La devise XYZ n'est pas supportée."); 
        }
    });
});
