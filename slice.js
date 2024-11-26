function sliceFunc(arr, start, end) {
    /*
      arr is a string or array
      sliceFunc should return a shallow slice of arr
  
      start & end are values of elements/characters in arr.
      these represent the start/end of the slice to be returned.
  
      the logic for finding start/end indexes must be the same as `Array.indexOf` and `Array.lastIndexOf`.
      slice logic must be the same as `Array.slice`.
  
      e.g.
  
      const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
  
      sliceFunc(animals, 'bison', 'duck') ⇒ ['bison', 'camel', 'duck']
    */
    const first = arr.indexOf(start);
    const last = arr.indexOf(end);
    return arr.slice(first, last+1);

  }