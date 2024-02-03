

/* 
* array has some duplicate elements.
 * [] 
 * 
 */

const biryaniKhor = [ 'abul', 'babul', 'kabul', 'abul', 'babul', 'dabul', 'kabul']
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

function noDuplicate(array){
    const unique = [];
   for(const item of array){
    if(unique.includes(item) === false){
        unique.push(item);
    }

   }
   return unique;
}

const uniqueArray = noDuplicate(biryaniKhor);
console.log(uniqueArray);
