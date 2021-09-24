const fetch = require('node-fetch');

async function main() {
    const result = await fetch("https://www.digitec.ch/api/graphql", {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0",
            "Accept": "*/*",
            "Accept-Language": "de-CH",
            "content-type": "application/json",
            "request-id": "|LdCOf.b07c08d90a834aec",
            "x-dg-correlation-id": "6c2cd1c6-796d-4a0d-a910-b040b8379af6",
            "x-dg-country": "ch",
            "x-dg-mandator": "406802",
            "x-dg-portal": "25",
            "x-dg-routename": "/search",
            "x-dg-scrumteam": "Endeavour",
            "x-dg-sessionz": "null",
            "x-dg-testgroup": "undefined",
            "x-dg-userid": "401718",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache"
        },
        "referrer": "https://www.digitec.ch/de/s1/product/microsoft-xbox-series-x-spielkonsole-12664482?supplier=406802",
        "body": "[{\"operationName\":\"GET_OFFER_AVAILABILITY\",\"variables\":{\"productId\":12664482,\"salesOfferId\":9415489,\"salesOfferType\":\"RETAIL\",\"detailProvider\":\"SALES\",\"quantity\":1},\"query\":\"query GET_OFFER_AVAILABILITY($productId: Int!, $salesOfferId: Int!, $salesOfferType: ShopOfferType!, $detailProvider: ShopAvailabilityDetailProviderType!, $quantity: Int!) {\\n  offerAvailability(productId: $productId, salesOfferId: $salesOfferId, offerType: $salesOfferType, detailProvider: $detailProvider, quantity: $quantity) {\\n    id\\n    mail {\\n      classification\\n      fromDate\\n      fromDays\\n      toDate\\n      toDays\\n      orderDeadline\\n      deliveryTypes\\n      stockDetails {\\n        stockCount\\n        warehouseType\\n        status\\n        __typename\\n      }\\n      __typename\\n    }\\n    sites {\\n      siteId\\n      siteName\\n      classification\\n      fromDate\\n      fromDays\\n      toDate\\n      toDays\\n      orderDeadline\\n      stockDetails {\\n        stockCount\\n        warehouseType\\n        status\\n        __typename\\n      }\\n      __typename\\n    }\\n    pickupProhibitionReasons\\n    pickMupAllowed\\n    futureReleaseDate\\n    siteFlashDeliveryAllowed\\n    warehouseFlashDeliveryAllowed\\n    tomorrowFlashDeliveryAllowed\\n    __typename\\n  }\\n}\\n\"}]",
        "method": "POST",
        "mode": "cors"
    });
    const j = await result.json()
    console.log(1);
    console.log(j);
    console.log(2);
}


(async () => {
    try {
        console.log(4)
        await main();
        console.log(5)
    } catch (e) {
        console.error(e);
    }
})();