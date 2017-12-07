function bubbleSort(arr) {
    return new Promise (
        function(resolve, reject) {
            var len = arr.length;
            
            for (var i = 0; i < len ; i++) {
                for(var j = 0 ; j < len - i - 1; j++){ // this was missing
                    if (arr[j] > arr[j + 1]) {
                    // swap
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j + 1] = temp;
                    }
                }
            }
            resolve(arr);
        })

  }


module.exports = bubbleSort;