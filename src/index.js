
exports.min = function min (array) {
    let Length=array.length;

    if ((array.length==0)||(array.length===undefined)||(array.length==0)&&(array.length===undefined)) {
        return 0;
    } else if (!(Array.isArray(array))) {
        return 0;
    } 
    
    function compareNumeric(a,b) {
        if(a>b) return 1;
        if (a==b) return 0;
        if (a<b) return -1;
    }
  array.sort(compareNumeric);
  let min=array[0];
  return min;
  
}

exports.max = function max (array) {
let Length=array.length;
    if (Length==0) {
        return 0;
    }



    function compareNumeric(a,b) {
        if(a>b) return 1;
        if (a==b) return 0;
        if (a<b) return -1;
    }
    array.sort(compareNumeric);
    let max=array[array.length-1];
    return max;
  
}

exports.avg = function avg (array) {
  let Length=array.length;
  if (Length==0) {
      return 0;
  }


  let sum=0;
  for (let i=0; i<array.length; i++) {
      sum=sum+array[i];


  }
  let avg=sum/Length;
  return avg;
}
