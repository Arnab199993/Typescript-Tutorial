var Days;
(function (Days) {
    Days["monday"] = "Monday";
    Days["tuesday"] = "TuesDay";
    //   wednesday,
    //   thursday,
    //   friday,
    //   saturday,
})(Days || (Days = {}));
// let whichDays: Days;
// whichDays = Days.monday;
var whichDays = function (day) {
    return day;
};
console.log(whichDays(Days.monday));
