"use strict";

(function(exports){

    exports.Range= function() {
        var UTG_RFI = ["AA", "AKs","AQs","KK","QQ","JJ","AKo","AQo","KQs"];

        function UTG_RFI_range() {
            return UTG_RFI;
        };



        return {UTG_RFI_range: UTG_RFI_range}
    };

})(this);
