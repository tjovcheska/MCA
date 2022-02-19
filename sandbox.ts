class Product {
    name: string;
    domestic: boolean;
    price: number;
    weight: string;
    description: string;

    constructor(name: string, domestic: boolean, price: number, weight: string, description: string) {
        this.name = name;
        this.domestic = domestic;
        this.price = price;
        this.weight = weight;
        this.description = description;
    }
}
// let data: Product[]  = [];

//  fetch('https://interview-task-api.mca.dev/qr-scanner-codes/alpha-qr-gFpwhsQ8fkY1')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {

//     data=myJson
//     console.log(data);
//   });

let products: Product[] = [
    new Product(
        "Tomato",
        true,
        30.5,
        "150",
        "The species originated in western South America and Central America. The Nahuatl (the language used by the Aztecs) word tomatl gave rise to the Spanish word tomate, from which the English word tomato derived."
    ),
    new Product(
        "Apple",
        true,
        14.5,
        "N/A",
        "Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today."
    ),
    new Product(
        "Banana",
        false,
        22.0,
        "N/A",
        "A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called plantains, distinguishing them from dessert bananas."
    )
]; 

function printProduct(product: Product) {
    console.log(product.name);
    console.log(product.domestic);
    console.log(product.price);
    console.log(product.weight);
    if(product.description.length > 10) {
        product.description = product.description.substring(0, 10) + '...';
    }
    console.log(product.description);
}

let domestic: Product[] = [];
let imported: Product[] = [];

for (let procuct of products) {
   if (procuct.domestic === true) {
       domestic.push(procuct);
   } else {
       imported.push(procuct);
   }
}

domestic.sort(function(a, b) {
    return a.name.localeCompare(b.name);
});


imported.sort(function(a, b) {
    return a.name.localeCompare(b.name);
});

console.log('Domestic');
let priceD: number = 0;
let counterD: number = 0;
for (let d of domestic) {
    priceD += d.price;
    counterD++;
    printProduct(d);
}

console.log('Imported');
let priceI: number = 0;
let counterI: number = 0;
for (let i of imported) {
    priceI += i.price;
    counterI++;
    printProduct(i);
}

console.log('Domestic cost: $' + priceD);
console.log('Imported cost: $' + priceI);
console.log('Domestic count: ' + counterD);
console.log('Domestic cost: ' + counterI);