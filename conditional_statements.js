// --if--

if (hour < 18) {
  greeting = "Good day";
}

// --else--

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// --else if--

if (hour < 12) {
  greeting = "Good morning";
} else if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
