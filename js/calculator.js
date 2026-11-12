                                            // Retrieve the form from the HTML page

const form = document.getElementById("carbonForm");

// Listen for form submission
form.addEventListener("submit", function (event) {
  // Prevent the page from refreshing after submit
  event.preventDefault();

  // Step 1: Get user input values

  // Convert input values from text to numbers
  let electricity = parseFloat(document.getElementById("electricity").value);
  let car = parseFloat(document.getElementById("car").value);
  let flights = parseFloat(document.getElementById("flights").value);

  // Step 2: Validate user input

  // Check if user entered negative values (invalid input)
  if (electricity < 0 || car < 0 || flights < 0) {
    // Display error message to the user
    document.getElementById("result").innerHTML =
      "Please enter positive numbers only.";
    return; // Stop execution if input is invalid
  }

  // Step 3: Calculate carbon footprint
  let total = electricity * 0.4 + car * 0.2 + flights * 250;

  // Step 4: Determine carbon impact level
  let level = "Low";

  if (total > 1000) {
    level = "Moderate";
  }

  if (total > 3000) {
    level = "High";
  }

  // Step 5: Display results

  /*
    toFixed(2) ensures the result shows only 2 decimal places
    The result is displayed dynamically in the webpage
    */

  document.getElementById("result").innerHTML =
    `<h2>${total.toFixed(2)} kg CO2</h2>
<p>Carbon Impact Level: <strong>${level}</strong></p>`;
});
