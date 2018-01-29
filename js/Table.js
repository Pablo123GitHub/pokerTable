"use strict";

(function(exports){
    exports.Table = function(){
        var inputArr = ["A","K","Q","J","T","9","8","7","6","5","4","3","2"];

        function createGrid () {
            var result = [];
            for (let i = 0; i < inputArr.length ; i++) {
                for (let j= 0; j < inputArr.length ; j++){
                    result.push(inputArr[i] + inputArr[j]);
                }
            }
            return result;
        };

        function splitIntoSubArr (arrInput, count) {
            var newArrWithSubArr = [];
            while (arrInput.length > 0) {
                newArrWithSubArr.push(arrInput.splice(0, count));
            }
            return newArrWithSubArr;
        };

        function gridWithSubArr () {
            var gridArr = createGrid();
            return splitIntoSubArr(gridArr,13);
        } ;

        return {gridWithSubArr: gridWithSubArr }

    };
})(this);