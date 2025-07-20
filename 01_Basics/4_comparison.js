// always try to compare two same types of datatypes

console.log("02" > 1);
console.log("2" > 1);
// js automatically converted the "02" and "2" in to number from string. But this shows the unpredictability of JS 

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// here in the above three code lines we can also see that first two are false while the third is true which is also unpredictable

// strict check (===) checks strictly checks whether the data type is same or different

//The conversions in JS are confusing and they are unpredictable