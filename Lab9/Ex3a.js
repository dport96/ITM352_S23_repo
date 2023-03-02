var attributes  =  "Dan;55;55.5;-54.5";
var pieces  = attributes.split(';');
for(let part of pieces ) {
    console.log(part, typeof part);
}
console.log(pieces.join(','));