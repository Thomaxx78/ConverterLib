import getExchangeRate from "./GetExchangeRate.js";

// Fonction pour convertir une devise
export default async function convertCurrency(amount, baseCurrency, targetCurrency) {
    // Vérification si le montant est un nombre
    if (isNaN(amount)) {
        throw new Error("Le montant doit être un nombre positif.");
    } 

    // Vérification si la devise de base est la même que la devise cible
    if (baseCurrency === targetCurrency) {
        throw new Error("La conversion n'est pas nécessaire pour la même devise.");
    }

    // Obtention du taux de change
    const rate = await getExchangeRate(baseCurrency, targetCurrency);
    if (rate !== null) {
        return amount * rate;
    } else {
        throw new Error("Taux de change non disponible.");
    }
}

// Fonction pour effectuer la conversion et afficher le résultat
export async function performConversion(amount, baseCurrency, targetCurrency) {
    try {
        const result = await convertCurrency(amount, baseCurrency, targetCurrency);
        console.log(`Le montant de ${amount} ${baseCurrency} vaut ${result} ${targetCurrency}.`);
    } catch (error) {
        console.error(error.message);
    }
}
