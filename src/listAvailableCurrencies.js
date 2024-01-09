// Fonction pour obtenir la liste des devises disponibles
export default async function listAvailableCurrencies(apiKey) {
    apiKey = '36e2991d88d74ffe4e463dd0';
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/codes`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result === 'success') {
            console.log("Devises disponibles:");
            data.supported_codes.forEach(code => {
                console.log(`${code[0]} - ${code[1]}`);
            });
        } else {
            throw new Error(`Erreur lors de la récupération des devises: ${data['error-type']}`);
        }
    } catch (error) {
        console.error("Erreur réseau ou autre problème:", error);
    }
}
