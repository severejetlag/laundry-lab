var wrinkled_clothes = [
  "grEEn shIrt",
  "TubE sockS",
  "TIe Dye shIrt",
  "gray pants",
  "HAndKerChief",
  "whItE bLousE"
];

wrinkled_clothes.forEach(function(clothing){
	console.log(iron(clothing));
})


/* YOUR CODE HERE */
function iron(clothing_item){
    // return ironed_clothing_item;
    return clothing_item.toLowerCase();
}

// console.log(iron(wrinkled_clothes));

/* PRINT RESULT */
console.log("--> Finished running iron.js");
