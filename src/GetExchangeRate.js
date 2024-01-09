// Fonction pour obtenir les taux de change
export default async function getExchangeRate(baseCurrency, targetCurrency) {
    const apiKey = '36e2991d88d74ffe4e463dd0'; // Remplacez ceci par votre clé API
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result === 'success') {
            const rate = data.conversion_rates[targetCurrency];
            if (rate) {
                return rate;
            } else {
                throw new Error(`La devise cible ${targetCurrency} n'est pas supportée.`);
            }
        } else if (data.result === 'error' && data['error-type'] === 'unsupported-code') {
            throw new Error(`La devise ${baseCurrency} n'est pas supportée.`);
        } else {
            throw new Error(`Erreur lors de la récupération des taux de change: ${data['error-type']}`);
        }
    } catch (error) {
        //console.error("Erreur réseau ou autre problème:", error);
        throw error; // Relancer l'erreur pour la gestion dans convertCurrency
    }
}
