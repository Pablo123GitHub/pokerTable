"use strict";

(function(exports){

    exports.Range= function() {
        var _UTG_RFI = ["AKs","AQs", "AJs", "ATs","A9s", "A8s","A7s","A6s",
                        "A5s","A4s","A4s","A3s", "A2s",
                        "KQs", "KJs", "KTs", "K9s",
                        "QJs", "QTs", "Q9s", "JTs", "J9s",
                        "T9s", "T8s", "98s", "87s", "76s",
                        "AA", "KK", "QQ", "JJ", "TT", "99", "88", "77", "66", "55",
                        "AKo", "AQo", "AJo", "KQo"];
        var _HIJACK_RFI = ["82s"];
        _HIJACK_RFI.splice(0,0, ..._UTG_RFI);

        function _addActiveClass (handsRange) {
            var i = handsRange.length;
            while (i--) {
                $(`td:contains(${handsRange[i]})`).toggleClass('active');
            }
        }

        function showUTGRange() {
          return _addActiveClass(_UTG_RFI);
        }

        function showHijack() {
            return _addActiveClass(_HIJACK_RFI);
        }

        return {showUTGRange: showUTGRange, showHijack:showHijack}
    };

})(this);
