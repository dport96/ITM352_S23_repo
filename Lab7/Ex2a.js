require("./products_data.js");

var num_products = 5;
var prod_number = 1;
while(prod_number < num_products) {
    console.log(prod_number + '. ' + eval('name' + prod_number));
    prod_number++;

    if(prod_number > num_products/2) {
        console.log(`That’s enough!`);
        break;
    }

}
console.log(`That's all we have!`);