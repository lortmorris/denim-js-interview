
//  1. Find Highest Frequency (findHighestFreq)
//
//  Goal: find the most frequent occurrence in an array
//
//  Input: an array (<inputArr>) i.e. [2, 4, 9, 4, 2, 32, 4, 5, 2, 1]
//
//  Output: most frequent occurrence i.e. '4' in the above example
//
//  Note: if there is no winner, return 'null'

 export function findHighestFreq(inputArr = []) {


  let max = -1;
  let current = null;
  const r = inputArr.reduce((acc, actual) => {
    if (!acc[actual]) acc[actual] = 0;
    acc[actual] ++;
    if (acc[actual] > max) {
      current = actual;
      max = acc[actual];
    }
    return acc;
  }, {});

  if (max === 1) return null;
  return current;
}

// findHighestFreq([1, 2, 'google', 'google', 1, 2, 'google']);


//  2. Get Property Array (getPropArr)
//
//  Goal: return an array of values of a specific property from an array of objects
//
//  Input: an array of objects (<objects>), and a property string (<field>) i.e.
//
//    objects = [{id: 1, name: 'joe'}, {id: 2, name: 'tom'}, {id: 3, name: 'mike'}]
//
//    field   = 'name'
//
//  Output: an array of values i.e. ['joe', 'tom', 'mike'] in the above example
//
//  Note: if <objects> is undefined, return 'null'

 export function getPropArr(objects = [], field) {
   if (!objects) return null;
   return objects.map((o) => o[field]);
}




//  3. Sort Object Array (sortObjArr):
//
//  Goal: sort an object array in a particular order based on field value
//
//  Input: an array of objects (<objects>), a property string (<field>), and an <order> i.e.
//
//    'asc'  = ascending:
//              A, B, C, D (strings / alphabetically)
//              1, 2, 3, 4 (numbers or counts / numerically)
//
//    'desc' = descending:
//              D, C, B, A
//              4, 3, 2, 1
//
//  Output: the initial array of <objects> sorted by <field> in the appropriate <order>
//
//    Reference './tests/mockUsers.js' for the user data structures
//
//  Note: should be able to sort objects based on the following fields:
//
//    firstName (string / alphabetically)
//    lastName (string / alphabetically)
//    email (string / alphabetically)
//    groups (count / numerically)
//    age (number / numerically)

 export function sortObjArr(objects = [], field, order = 'asc') {


   const r = objects.sort((a, b) => {
     if (order === 'asc') {
       if (a[field] < b[field]) {
         return -1;
       }
       return 1;
     } else {
       if (a[field] < b[field]) {
         return 1;
       }
       return -1;
     }
   });

   return r;
}


// sortObjArr([{ a: 1 }, {a : 2}, { a: 3}], 'a', 'asc');
// ssortObjArr([{ a: 1 }, {a : 2}, { a: 3}], 'a', 'desc');
