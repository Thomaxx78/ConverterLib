import listAvailableCurrencies from "../src/listAvailableCurrencies";

describe('listAvailableCurrencies()', () => {
    it('Should return a list of available currencies', async () => {
        const result = await listAvailableCurrencies();
        expect(result).not.toBeNull();
    }
    );
}
);