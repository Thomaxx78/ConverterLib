# Thomas Filhol and Kouitini Ambre Currency Converter Library

## Overview

This library provides a simple and efficient way to convert different currencies using the Exchange Rate API. It includes functions for fetching real-time exchange rates, listing available currencies, and performing accurate currency conversions.

## Installation

Install the library using npm:

```bash
npm install thomas-filhol-lib
```

## Usage

### Converting Currencies

Use the convertCurrency function to convert an amount from one currency to another.

```bash
const { convertCurrency } = require('thomas-filhol-lib');
convertCurrency(100, 'USD', 'EUR').then(console.log);
```

### Getting Exchange Rates
Retrieve current exchange rates using the getExchangeRate function.

```bash
const { getExchangeRate } = require('thomas-filhol-lib');
getExchangeRate('USD', 'EUR').then(console.log);
```

### Listing Available Currencies
List all supported currencies using listAvailableCurrencies.

```bash
const { listAvailableCurrencies } = require('thomas-filhol-lib');
listAvailableCurrencies().then(console.log);
```

## API Reference
Detailed documentation for each function is provided in the respective module files within the library.

## Running Tests
Run the included tests using:

```bash 
npm test
```

## Contributing
Contributions are welcome! Please follow the standard pull request process for your contributions.

## License
This project is licensed under the MIT License. For more information, see the LICENSE file in the repository.

## Contact
For questions or feedback, please contact Thomas Filhol.