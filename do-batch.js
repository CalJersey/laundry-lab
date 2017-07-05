var batch_input = [
  [ "pLe*A/tED SKirt", "f*AncY T/Ie", ],
  ["cumber*bund",],
  ["rEd tuX/edo", "red* soCks",],
];
/* YOUR CODE HERE */
function clean(clothing_item){
    // return clean_clothing_item;
    return clothing_item.replace(/\*/,'');
}
/* YOUR CODE HERE */
function mend(clothing_item){
    // return mended_clothing_item;
    return clothing_item.replace(/\//,'');
}
/* YOUR CODE HERE */
function iron(clothing_item){
    // return ironed_clothing_item;
    return clothing_item.toLowerCase();
}

var output = [];

output.push( iron(wrinkled_clothes[0]) );
output.push( iron(wrinkled_clothes[1]) );
output.push( iron(wrinkled_clothes[2]) );
output.push( iron(wrinkled_clothes[3]) );
output.push( iron(wrinkled_clothes[4]) );
output.push( iron(wrinkled_clothes[5]) );

console.log("ironed:", output);

var output = [];

for(var i=0; i<wrinkled_clothes.length; i++){
    output.push( iron(wrinkled_clothes[i]) );
}

console.log("ironed:", output);

var output = [];

wrinkled_clothes.forEach(function process_item(item){
    output.push( iron(item) );
})

console.log("ironed:", output);

var output = wrinkled_clothes.map(iron);

console.log("ironed:", output);
/* YOUR CODE HERE */
/*function doBatchForLoop(clothes){
  let newClothes = [];

  // your code here
  for (i=0;i<clothes.length;i++)
  {
    newClothes[i] = []];
    for (j=0;j<clothes[i].length;j++)
    {
      let newVal = "";
      newVal = clean(clothes[i][j]);
      newVal = mend(newVal);
      newVal = iron(newVal);
      newClothes[i][j] = newVal;
    }

  }
  return newClothes;
}*/
/* YOUR CODE HERE */
function doBatch(clothes) {
    return iron(mend(clean(clothes)));
}

/*
}); */


/* PRINT RESULT */
console.log("--> Finished running do-batch.js");
