var dirty_clothes = [
  "*blue shirt",
  "argyle s*ocks",
  "u*gly sweater",
  "brown plaid pa*nts",
  "paisl*ey dress shirt"
];

dirty_clothes.forEach(function(item){
	console.log(clean(item));
})

/* YOUR CODE HERE */
function clean(clothing_item){
    // return mended_clothing_item;
    return clothing_item.replace('*','');
}

/* PRINT RESULT */
console.log("--> Finished running clean.js");
