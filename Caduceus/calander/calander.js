var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var dayofweek = date.getDay() + 1;
var weekofmonth = Math.ceil((day - 1 - date.getDay()) / 7) + 1;
var firstDay = new Date(year, month).getDay() - 1;
var fakemonth = month;


console.log(fakemonth);
console.log(firstDay);

var monthname = document.getElementById("monthname").innerHTML;
var day1 = document.getElementById("day1").innerHTML;
var day2 = document.getElementById("day2").innerHTML;
var day3 = document.getElementById("day3").innerHTML;
var day4 = document.getElementById("day4").innerHTML;
var day5 = document.getElementById("day5").innerHTML;
var day6 = document.getElementById("day6").innerHTML;
var day7 = document.getElementById("day7").innerHTML;

//window.alert(year);
//window.alert(month);
//window.alert(day);
//window.alert(dayofweek);
//window.alert(weekofmonth);
function createvent() {
  document.getElementById("eventbody").style.display = "";
}
function hideevent() {
  document.getElementById("eventbody").style.display = "none";
}
document.getElementById("year").innerHTML = year;

if (month == 1) {
  monthname = "January";
  document.getElementById("monthname").innerHTML = monthname;
  document.getElementById("31").style.display = "";
  document.getElementById("28").style.display = "";
  document.getElementById("29").style.display = "";
  document.getElementById("30").style.display = "";
} else if (month == 2) {
  monthname = "Febuary";
  document.getElementById("monthname").innerHTML = monthname;
  document.getElementById("31").style.display = "none";
  document.getElementById("28").style.display = "none";
  document.getElementById("29").style.display = "none";
  document.getElementById("30").style.display = "none";
} else if (month == 3) {
  monthname = "March";
  document.getElementById("monthname").innerHTML = monthname;
  document.getElementById("31").style.display = "";
  document.getElementById("28").style.display = "";
  document.getElementById("29").style.display = "";
  document.getElementById("30").style.display = "";
} else if (month == 4) {
  monthname = "April";
  document.getElementById("monthname").innerHTML = monthname;
  document.getElementById("31").style.display = "none";
  document.getElementById("28").style.display = "";
  document.getElementById("29").style.display = "";
  document.getElementById("30").style.display = "";
} else if (month == 5) {
  monthname = "May";
  document.getElementById("monthname").innerHTML = monthname;
  document.getElementById("31").style.display = "";
  document.getElementById("28").style.display = "";
  document.getElementById("29").style.display = "";
  document.getElementById("30").style.display = "";
} else if (month == 6) {
  monthname = "June";
  document.getElementById("monthname").innerHTML = monthname;
  document.getElementById("31").style.display = "none";
  document.getElementById("28").style.display = "";
  document.getElementById("29").style.display = "";
  document.getElementById("30").style.display = "";
} else if (month == 7) {
  monthname = "July";
  document.getElementById("monthname").innerHTML = monthname;
  document.getElementById("31").style.display = "";
  document.getElementById("28").style.display = "";
  document.getElementById("29").style.display = "";
  document.getElementById("30").style.display = "";
} else if (month == 8) {
  monthname = "August";
  document.getElementById("monthname").innerHTML = monthname;
  document.getElementById("31").style.display = "";
  document.getElementById("28").style.display = "";
  document.getElementById("29").style.display = "";
  document.getElementById("30").style.display = "";
} else if (month == 9) {
  monthname = "September";
  document.getElementById("monthname").innerHTML = monthname;
  document.getElementById("31").style.display = "none";
  document.getElementById("28").style.display = "";
  document.getElementById("29").style.display = "";
  document.getElementById("30").style.display = "";
} else if (month == 10) {
  monthname = "October";
  document.getElementById("monthname").innerHTML = monthname;
  document.getElementById("31").style.display = "";
  document.getElementById("28").style.display = "";
  document.getElementById("29").style.display = "";
  document.getElementById("30").style.display = "";
} else if (month == 11) {
  monthname = "November";
  document.getElementById("monthname").innerHTML = monthname;
  document.getElementById("31").style.display = "none";
  document.getElementById("28").style.display = "";
  document.getElementById("29").style.display = "";
  document.getElementById("30").style.display = "";
} else if (month == 12) {
  monthname = "December";
  document.getElementById("monthname").innerHTML = monthname;
  document.getElementById("31").style.display = "";
  document.getElementById("28").style.display = "";
  document.getElementById("29").style.display = "";
  document.getElementById("30").style.display = "";
}

if (firstDay == 1) {
  document.getElementById("day1").style.display = "none";
  document.getElementById("day2").style.display = "none";
  document.getElementById("day3").style.display = "none";
  document.getElementById("day4").style.display = "none";
  document.getElementById("day5").style.display = "none";
  document.getElementById("day6").style.display = "none";
  document.getElementById("day7").style.display = "none";
} else if (firstDay == 2) {
  document.getElementById("day1").style.display = "";
  document.getElementById("day2").style.display = "none";
  document.getElementById("day3").style.display = "none";
  document.getElementById("day4").style.display = "none";
  document.getElementById("day5").style.display = "none";
  document.getElementById("day6").style.display = "none";
  document.getElementById("day7").style.display = "none";
} else if (firstDay == 3) {
  document.getElementById("day1").style.display = "";
  document.getElementById("day2").style.display = "";
  document.getElementById("day3").style.display = "none";
  document.getElementById("day4").style.display = "none";
  document.getElementById("day5").style.display = "none";
  document.getElementById("day6").style.display = "none";
  document.getElementById("day7").style.display = "none";
} else if (firstDay == 4) {
  document.getElementById("day1").style.display = "";
  document.getElementById("day2").style.display = "";
  document.getElementById("day3").style.display = "";
  document.getElementById("day4").style.display = "none";
  document.getElementById("day5").style.display = "none";
  document.getElementById("day6").style.display = "none";
  document.getElementById("day7").style.display = "none";
} else if (firstDay == 5) {
  document.getElementById("day1").style.display = "";
  document.getElementById("day2").style.display = "";
  document.getElementById("day3").style.display = "";
  document.getElementById("day4").style.display = "";
  document.getElementById("day5").style.display = "none";
  document.getElementById("day6").style.display = "none";
  document.getElementById("day7").style.display = "none";
  console.log("yay");
} else if (firstDay == 6) {
  document.getElementById("day1").style.display = "";
  document.getElementById("day2").style.display = "";
  document.getElementById("day3").style.display = "";
  document.getElementById("day4").style.display = "";
  document.getElementById("day5").style.display = "";
  document.getElementById("day6").style.display = "none";
  document.getElementById("day7").style.display = "none";
} else if (firstDay == 7) {
  document.getElementById("day1").style.display = "";
  document.getElementById("day2").style.display = "";
  document.getElementById("day3").style.display = "";
  document.getElementById("day4").style.display = "";
  document.getElementById("day5").style.display = "";
  document.getElementById("day6").style.display = "";
  document.getElementById("day7").style.display = "none";
}
if (date.getMonth() + 1 == month) {
  document.getElementById(day).innerHTML =
    "<span class='active'>" + day + "</span>";
} else {
  document.getElementById(day).innerHTML = day;
}
document.getElementById(day).innerHTML =
  "<span class='active'>" + day + "</span>";
//window.alert(firstDay);
function createvent() {
  document.getElementById("eventbody").style.display = "";
}
function nextmonth() {
  console.log(fakemonth);
  var fakedate = new Date(year, fakemonth + 1);
  fakemonth = fakedate.getMonth();
  console.log(fakemonth);
  var fakeday = fakedate.getDate();
  var fakedayofweek = fakedate.getDay() + 1;
  var fakeweekofmonth = Math.ceil((day - 1 - fakedate.getDay()) / 7) + 1;
  var fakefirstDay = new Date(2021, fakemonth - 1).getDay() + 1;
  console.log(fakedate);
  console.log(fakedate.getMonth());
  console.log(fakefirstDay);

  if (fakemonth == 1) {
    monthname = "January";
    document.getElementById("monthname").innerHTML = monthname;
    document.getElementById("31").style.display = "";
    document.getElementById("28").style.display = "";
    document.getElementById("29").style.display = "";
    document.getElementById("30").style.display = "";
  } else if (fakemonth == 2) {
    monthname = "February";
    document.getElementById("monthname").innerHTML = monthname;
    document.getElementById("31").style.display = "none";
    document.getElementById("28").style.display = "";
    document.getElementById("29").style.display = "none";
    document.getElementById("30").style.display = "none";
  } else if (fakemonth == 3) {
    monthname = "March";
    document.getElementById("monthname").innerHTML = monthname;
    document.getElementById("31").style.display = "";
    document.getElementById("28").style.display = "";
    document.getElementById("29").style.display = "";
    document.getElementById("30").style.display = "";
  } else if (fakemonth == 4) {
    monthname = "April";
    document.getElementById("monthname").innerHTML = monthname;
    document.getElementById("31").style.display = "none";
    document.getElementById("28").style.display = "";
    document.getElementById("29").style.display = "";
    document.getElementById("30").style.display = "";
  } else if (fakemonth == 5) {
    monthname = "May";
    document.getElementById("monthname").innerHTML = "May";
    document.getElementById("31").style.display = "";
    document.getElementById("28").style.display = "";
    document.getElementById("29").style.display = "";
    document.getElementById("30").style.display = "";
    console.log("ASHDGJhgshkdgjh");
  } else if (fakemonth == 6) {
    monthname = "June";
    document.getElementById("monthname").innerHTML = monthname;
    document.getElementById("31").style.display = "none";
    document.getElementById("28").style.display = "";
    document.getElementById("29").style.display = "";
    document.getElementById("30").style.display = "";
  } else if (fakemonth == 7) {
    monthname = "July";
    document.getElementById("monthname").innerHTML = monthname;
    document.getElementById("31").style.display = "";
    document.getElementById("28").style.display = "";
    document.getElementById("29").style.display = "";
    document.getElementById("30").style.display = "";
  } else if (fakemonth == 8) {
    monthname = "August";
    document.getElementById("monthname").innerHTML = monthname;
    document.getElementById("31").style.display = "";
    document.getElementById("28").style.display = "";
    document.getElementById("29").style.display = "";
    document.getElementById("30").style.display = "";
  } else if (fakemonth == 9) {
    monthname = "September";
    document.getElementById("monthname").innerHTML = monthname;
    document.getElementById("31").style.display = "none";
    document.getElementById("28").style.display = "";
    document.getElementById("29").style.display = "";
    document.getElementById("30").style.display = "";
  } else if (fakemonth == 10) {
    monthname = "October";
    document.getElementById("monthname").innerHTML = monthname;
    document.getElementById("31").style.display = "";
    document.getElementById("28").style.display = "";
    document.getElementById("29").style.display = "";
    document.getElementById("30").style.display = "";
  } else if (fakemonth == 11) {
    monthname = "November";
    document.getElementById("monthname").innerHTML = monthname;
    document.getElementById("31").style.display = "none";
    document.getElementById("28").style.display = "";
    document.getElementById("29").style.display = "";
    document.getElementById("30").style.display = "";
  } else if (fakemonth == 12) {
    monthname = "December";
    document.getElementById("monthname").innerHTML = monthname;
    document.getElementById("31").style.display = "";
    document.getElementById("28").style.display = "";
    document.getElementById("29").style.display = "";
    document.getElementById("30").style.display = "";
  }}
  console.log("working...");
  //window.alert(firstDay);
  if (fakefirstDay == 1) {
    document.getElementById("day1").style.display = "none";
    document.getElementById("day2").style.display = "none";
    document.getElementById("day3").style.display = "none";
    document.getElementById("day4").style.display = "none";
    document.getElementById("day5").style.display = "none";
    document.getElementById("day6").style.display = "none";
    document.getElementById("day7").style.display = "none";
  } else if (fakefirstDay == 2) {
    document.getElementById("day1").innerHTML;
    document.getElementById("day2").style.display = "";
    document.getElementById("day3").style.display = "none";
    document.getElementById("day4").style.display = "none";
    document.getElementById("day5").style.display = "none";
    document.getElementById("day6").style.display = "none";
    document.getElementById("day7").style.display = "none";
  } else if (fakefirstDay == 3) {
    document.getElementById("day1").style.display = "";
    document.getElementById("day2").style.display = "";
    document.getElementById("day3").style.display = "none";
    document.getElementById("day4").style.display = "none";
    document.getElementById("day5").style.display = "none";
    document.getElementById("day6").style.display = "none";
    document.getElementById("day7").style.display = "none";
  } else if (fakefirstDay == 4) {
    document.getElementById("day1").style.display = "";
    document.getElementById("day2").style.display = "";
    document.getElementById("day3").style.display = "";
    document.getElementById("day4").style.display = "none";
    document.getElementById("day5").style.display = "none";
    document.getElementById("day6").style.display = "none";
    document.getElementById("day7").style.display = "none";
  } else if (fakefirstDay == 5) {
    document.getElementById("day1").style.display = "";
    document.getElementById("day2").style.display = "";
    document.getElementById("day3").style.display = "";
    document.getElementById("day4").style.display = "";
    document.getElementById("day5").style.display = "none";
    document.getElementById("day6").style.display = "none";
    document.getElementById("day7").style.display = "none";
    console.log("yay");
  } else if (fakefirstDay == 6) {
    document.getElementById("day1").style.display = "";
    document.getElementById("day2").style.display = "";
    document.getElementById("day3").style.display = "";
    document.getElementById("day4").style.display = "";
    document.getElementById("day5").style.display = "";
    document.getElementById("day6").style.display = "none";
    document.getElementById("day7").style.display = "none";
  } else if (fakefirstDay == 7) {
    document.getElementById("day1").style.display = "";
    document.getElementById("day2").style.display = "";
    document.getElementById("day3").style.display = "";
    document.getElementById("day4").style.display = "";
    document.getElementById("day5").style.display = "";
    document.getElementById("day6").style.display = "";
    document.getElementById("day7").style.display = "none";
    console.log("firstday = 7");
  }
  console.log("finished ");

  if (date.getMonth() + 1 == fakemonth) {
    document.getElementById(day).innerHTML =
      "<span class='active'>" + day + "</span>";
  } else {
    document.getElementById(day).innerHTML = day;
  }
  if (rmonth == fakemonth) {
    document.getElementById(rday).innerHTML =
      "<span class='active'>" + rday + "</span>";
  } else {
    document.getElementById(rday).innerHTML = rday;
  }
  if (date.getMonth() + 1 == rmonth) {
  if (date.getDate() == rday) {
    window.alert("Your event " + evname + " is starting!");
}
}

function prevmonth() {
  console.log(fakemonth);
  var fakedate = new Date(year, fakemonth - 1);
  fakemonth = fakedate.getMonth();
  console.log(fakemonth);
  var fakeday = fakedate.getDate();
  var fakedayofweek = fakedate.getDay() + 1;
  var fakeweekofmonth = Math.ceil((day - 1 - fakedate.getDay()) / 7) + 1;
  var fakefirstDay = new Date(2021, fakemonth - 1).getDay() + 1;
  console.log(fakedate);
  console.log(fakedate.getMonth());
  console.log(fakefirstDay);

  if (fakemonth == 1) {
    monthname = "January";
    document.getElementById("monthname").innerHTML = monthname;
    document.getElementById("31").style.display = "";
    document.getElementById("28").style.display = "";
    document.getElementById("29").style.display = "";
    document.getElementById("30").style.display = "";
  } else if (fakemonth == 2) {
    monthname = "Febuary";
    document.getElementById("monthname").innerHTML = monthname;
    document.getElementById("31").style.display = "none";
    document.getElementById("28").style.display = "none";
    document.getElementById("29").style.display = "none";
    document.getElementById("30").style.display = "none";
  } else if (fakemonth == 3) {
    monthname = "March";
    document.getElementById("monthname").innerHTML = monthname;
    document.getElementById("31").style.display = "";
    document.getElementById("28").style.display = "";
    document.getElementById("29").style.display = "";
    document.getElementById("30").style.display = "";
  } else if (fakemonth == 4) {
    monthname = "April";
    document.getElementById("monthname").innerHTML = monthname;
    document.getElementById("31").style.display = "none";
    document.getElementById("28").style.display = "";
    document.getElementById("29").style.display = "";
    document.getElementById("30").style.display = "";
  } else if (fakemonth == 5) {
    monthname = "May";
    document.getElementById("monthname").innerHTML = "May";
    document.getElementById("31").style.display = "";
    document.getElementById("28").style.display = "";
    document.getElementById("29").style.display = "";
    document.getElementById("30").style.display = "";
    console.log("ASHDGJhgshkdgjh");
  } else if (fakemonth == 6) {
    monthname = "June";
    document.getElementById("monthname").innerHTML = monthname;
    document.getElementById("31").style.display = "none";
    document.getElementById("28").style.display = "";
    document.getElementById("29").style.display = "";
    document.getElementById("30").style.display = "";
  } else if (fakemonth == 7) {
    monthname = "July";
    document.getElementById("monthname").innerHTML = monthname;
    document.getElementById("31").style.display = "";
    document.getElementById("28").style.display = "";
    document.getElementById("29").style.display = "";
    document.getElementById("30").style.display = "";
  } else if (fakemonth == 8) {
    monthname = "Augest";
    document.getElementById("monthname").innerHTML = monthname;
    document.getElementById("31").style.display = "";
    document.getElementById("28").style.display = "";
    document.getElementById("29").style.display = "";
    document.getElementById("30").style.display = "";
  } else if (fakemonth == 9) {
    monthname = "September";
    document.getElementById("monthname").innerHTML = monthname;
    document.getElementById("31").style.display = "none";
    document.getElementById("28").style.display = "";
    document.getElementById("29").style.display = "";
    document.getElementById("30").style.display = "";
  } else if (fakemonth == 10) {
    monthname = "October";
    document.getElementById("monthname").innerHTML = monthname;
    document.getElementById("31").style.display = "";
    document.getElementById("28").style.display = "";
    document.getElementById("29").style.display = "";
    document.getElementById("30").style.display = "";
  } else if (fakemonth == 11) {
    monthname = "November";
    document.getElementById("monthname").innerHTML = monthname;
    document.getElementById("31").style.display = "none";
    document.getElementById("28").style.display = "";
    document.getElementById("29").style.display = "";
    document.getElementById("30").style.display = "";
  } else if (fakemonth == 12) {
    monthname = "December";
    document.getElementById("monthname").innerHTML = monthname;
    document.getElementById("31").style.display = "";
    document.getElementById("28").style.display = "";
    document.getElementById("29").style.display = "";
    document.getElementById("30").style.display = "";
  }
  console.log("working...");
  //window.alert(firstDay);
  if (fakefirstDay == 1) {
    document.getElementById("day1").style.display = "none";
    document.getElementById("day2").style.display = "none";
    document.getElementById("day3").style.display = "none";
    document.getElementById("day4").style.display = "none";
    document.getElementById("day5").style.display = "none";
    document.getElementById("day6").style.display = "none";
    document.getElementById("day7").style.display = "none";
  } else if (fakefirstDay == 2) {
    document.getElementById("day1").innerHTML;
    document.getElementById("day2").style.display = "";
    document.getElementById("day3").style.display = "none";
    document.getElementById("day4").style.display = "none";
    document.getElementById("day5").style.display = "none";
    document.getElementById("day6").style.display = "none";
    document.getElementById("day7").style.display = "none";
  } else if (fakefirstDay == 3) {
    document.getElementById("day1").style.display = "";
    document.getElementById("day2").style.display = "";
    document.getElementById("day3").style.display = "none";
    document.getElementById("day4").style.display = "none";
    document.getElementById("day5").style.display = "none";
    document.getElementById("day6").style.display = "none";
    document.getElementById("day7").style.display = "none";
  } else if (fakefirstDay == 4) {
    document.getElementById("day1").style.display = "";
    document.getElementById("day2").style.display = "";
    document.getElementById("day3").style.display = "";
    document.getElementById("day4").style.display = "none";
    document.getElementById("day5").style.display = "none";
    document.getElementById("day6").style.display = "none";
    document.getElementById("day7").style.display = "none";
  } else if (fakefirstDay == 5) {
    document.getElementById("day1").style.display = "";
    document.getElementById("day2").style.display = "";
    document.getElementById("day3").style.display = "";
    document.getElementById("day4").style.display = "";
    document.getElementById("day5").style.display = "none";
    document.getElementById("day6").style.display = "none";
    document.getElementById("day7").style.display = "none";
    console.log("yay");
  } else if (fakefirstDay == 6) {
    document.getElementById("day1").style.display = "";
    document.getElementById("day2").style.display = "";
    document.getElementById("day3").style.display = "";
    document.getElementById("day4").style.display = "";
    document.getElementById("day5").style.display = "";
    document.getElementById("day6").style.display = "none";
    document.getElementById("day7").style.display = "none";
  } else if (fakefirstDay == 7) {
    document.getElementById("day1").style.display = "";
    document.getElementById("day2").style.display = "";
    document.getElementById("day3").style.display = "";
    document.getElementById("day4").style.display = "";
    document.getElementById("day5").style.display = "";
    document.getElementById("day6").style.display = "";
    document.getElementById("day7").style.display = "none";
    console.log("firstday = 7");
  }}
  console.log("finished ");

  if (date.getMonth() + 1 == fakemonth) {
    document.getElementById(day).innerHTML =
      "<span class='active'>" + day + "</span>";
  } else {
    document.getElementById(day).innerHTML = day;
  }
  if (rmonth == fakemonth) {
    document.getElementById(rday).innerHTML =
      "<span class='active'>" + rday + "</span>";
  } else {
    document.getElementById(rday).innerHTML = rday;
  }
  if (date.getMonth() + 1 == rmonth) {
  if (date.getDate() == rday) {
    window.alert("Your event " + evname + " is starting!");
}
}
function grabdata() {
  evname = document.getElementById("eventname").value
  evdes = document.getElementById("eventdes").value
  evdate = document.getElementById("eventdate").value
  evtime = document.getElementById("eventtime").value
  document.getElementById("eventbody").style.display = "none";
  spliced = evdate.slice(5, 10);
  rmonth = spliced.slice(0, 2);
  rday = spliced.slice(3, 6);
}
