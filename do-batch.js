var batch_input = [
  [ "pLe*A/tED SKirt", "f*AncY T/Ie" ],
  ["cumber*bund"],
  ["rEd tuX/edo", "red* soCks"]
];

/* TODO: copy `clean` function here */
function clean(clothing_item){
    // return mended_clothing_item;
    return clothing_item.replace('*','');
}
/* TODO: copy `mend` function here */
function mend(clothing_item){
    // return mended_clothing_item;
    return clothing_item.replace('/','');
}
/* TODO: copy `iron` function here */
function iron(clothing_item){
    // return ironed_clothing_item;
    return clothing_item.toLowerCase();
}


/* YOUR CODE HERE */
function doBatch(clothes){
    // your code here
	clothes.forEach(function(batch){
		batch.forEach(function(item){
		    console.log(iron(mend(clean(item))));
			
		})
	})
}

doBatch(batch_input);

/* PRINT RESULT */
console.log("--> Finished running do-batch.js");
