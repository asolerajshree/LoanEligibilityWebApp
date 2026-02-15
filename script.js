// Script to handle button clicks and simple alerts

// Run when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get buttons and form elements by their IDs
  const checkBtn = document.getElementById("checkLoanBtn");
  const eligBtn = document.getElementById("eligibilityBtn");
  const form = document.getElementById("loanForm");

  // Event listener for "Check For Loanability" button
  checkBtn.addEventListener("click", () => {
    alert("Check For Loanability clicked! Wait for few time we will let you know you are eligible or not.");
    // Example: you can validate inputs or compute loanability here
  });

  // Event listener for "Elligability" button
  eligBtn.addEventListener("click", () => {
    alert("We have draft a Mail check you are eligible for not");
    // TODO: Implement your eligibility checking logic here

    // Example dummy eligibility logic (replace with your own)
    let eligible = false;
    // Example condition: applicant income greater than loan amount
    const applicantIncome = parseFloat(form["ApplicantIncome"].value) || 0;
    const loanAmount = parseFloat(form["LoanAmount"].value) || 0;

    if (applicantIncome >= loanAmount && applicantIncome > 0) {
      eligible = true;
    }

    // Redirect to the eligibility result page with parameter
    window.location.href = `result.html?eligible=${eligible}`;
  });

  // "Clear" button of type reset clears the form automatically, no code needed
});
