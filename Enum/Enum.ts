enum Days {
  monday = "Monday",
  tuesday = "TuesDay",

  //   wednesday,
  //   thursday,
  //   friday,
  //   saturday,
}
// let whichDays: Days;
// whichDays = Days.monday;
const whichDays = (day: Days) => {
  return day;
};
console.log(whichDays(Days.monday));
