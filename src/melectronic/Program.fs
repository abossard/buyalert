open FSharp.Data

type Product = { id: string; name: string }

let products =
    [ { id = "785446600000"
        name = "XBox Series X" }
(*      { id = "785445800000"
        name = "PlayStation 5 Digital Edition" }
      { id = "785445700000"
        name = "PlayStation 5" }*)
      ]

let location = "*002%20Zurich"

type MelectronicsStoreList = JsonProvider<"./example.json">
type ProductStores = { product: Product; url: string }
type ProductStores2 = { product: Product; url: string; data: MelectronicsStoreList.Root}

let getUrlForProductList location productId =
    $"https://www.melectronics.ch/jsapi/v1/de/stores/inventory/{productId}?location={location}&availabilityStock=0,1"

let results =
    products
    |> List.map
        (fun product ->
            { product = product
              url = product.id |> getUrlForProductList location })
    |> List.map
        (fun product -> {
        product = product.product
        url = product.url
        data = product.url |> MelectronicsStoreList.Load
    })    

let formatStores (stores: MelectronicsStoreList.Store []): string =
    stores |> Array.map (fun store -> $"{store.Name} ({store.Phone}) ") |> Array.fold (+) ""
    
let filterResults = results
                    |> List.where (fun result -> result.data.Stores.Length > 0)
                    |> List.map (fun result -> $"\n{result.product.name} is available in {formatStores result.data.Stores}")

// Define a function to construct a message to print

[<EntryPoint>]
let main argv =
    printfn $"Available now: %A{filterResults}"
    0 // return an integer exit code
