"use strict";

(function(exports){

    exports.Range= function() {
        var _UTG_RFI = ["AKs","AQs", "AJs", "ATs","A9s", "A8s","A7s","A6s",
                        "A5s","A4s","A3s", "A2s",
                        "KQs", "KJs", "KTs", "K9s",
                        "QJs", "QTs", "Q9s", "JTs", "J9s",
                        "T9s", "T8s", "98s", "87s", "76s",
                        "AA", "KK", "QQ", "JJ", "TT", "99", "88", "77", "66", "55",
                        "AKo", "AQo", "AJo", "KQo"];
        var _HIJACK_RFI = ["ATo", "97s", "65s", "44"];
        _HIJACK_RFI.splice(0,0, ..._UTG_RFI);

        var _CUTOFF_RFI = ["K8s","Q8s","J8s","86s", "54s","33", "22" ];
        _CUTOFF_RFI.splice(0,0, ..._HIJACK_RFI);

        var _BUTTON_RFI = ["K7s", "K6s", "K5s", "K4s", "K3s",
                            "Q7s", "Q6s", "Q5s",
                            "J7s", "J6s", "T7s", "T6s",
                            "96s", "85s", "75s", "64s", "43s",
                            "A9o", "A8o", "A7o", "A6o", "A5o", "A4o", "A3o", "A2o",
                            "K9o", "Q9o", "J9o", "T9o",
                            "KJo", "QJo", "KTo", "QTo", "JTo"];
        _BUTTON_RFI.splice(0,0, ..._CUTOFF_RFI);

        var _SMALLBLIND_RFI = ["53s", "63s", "74s", "84s", "95s", "Q4s", "K2s", "32s"];
        _SMALLBLIND_RFI.splice(0,0, ..._BUTTON_RFI);

        function _addActiveClass (handsRange) {
            $('.active').removeClass('active');
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

        function showCutOff() {
            return _addActiveClass(_CUTOFF_RFI);
        }

        function showOnTheButton() {
            return _addActiveClass(_BUTTON_RFI);
        }

        function showSmallBlind() {
            return _addActiveClass(_SMALLBLIND_RFI);
        }


        return {showUTGRange: showUTGRange, showHijack:showHijack, showCutOff:showCutOff,
            showOnTheButton: showOnTheButton, showSmallBlind: showSmallBlind}

    };

})(this);
