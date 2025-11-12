var iAge;
var SMF;

iAge = prompt("Please enter your age in years.", 0);
SMF = prompt("Are you a (M)ale or (F)emale?", "M");

if (iAge > 20) {
  if (SMF == "M") {
    alert("You are a male over 20 years of age");
  } else {
    alert("You are a female over 20 years of age");
  }
} else {
  if (SMF == "M") {
    alert("You are a male under the age of 21");
  } else {
    alert("You are a female under the age of 21");
  }
}