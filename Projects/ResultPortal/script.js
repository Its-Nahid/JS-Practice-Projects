document.addEventListener("DOMContentLoaded", () => {
  const checkBtn = document.querySelector(".btn button");
  const nameInput = document.getElementById("Name");
  const marksInput = document.getElementById("StudentMarks");

  const resultName = document.getElementById("resultName");
  const resultMarks = document.getElementById("resultMarks");
  const resultGrade = document.getElementById("resultGrade");
  const resultStatus = document.getElementById("resultStatus");
  const resultScholarship = document.getElementById("resultScholarship");
  const resultRemarks = document.getElementById("resultRemarks");

  checkBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const marksText = marksInput.value.trim();

    if (!name) {
      alert("Please enter a student name.");
      return;
    }

    if (marksText === "") {
      alert("Please enter student marks.");
      return;
    }

    const marks = parseFloat(marksText);
    if (isNaN(marks) || marks < 0 || marks > 100) {
      alert("Please enter valid marks between 0 and 100.");
      return;
    }

    let grade = "F";
    let status = "Fail";
    let scholarship = "No";
    let remarks = "Needs Improvement. Work harder!";

    if (marks >= 90) {
      grade = "A+";
      status = "Pass";
      scholarship = "Yes (100% Tuition Fee Waiver)";
      remarks = "Outstanding performance! Keep it up!";
    } else if (marks >= 80) {
      grade = "A";
      status = "Pass";
      scholarship = "Yes (50% Tuition Fee Waiver)";
      remarks = "Excellent work!";
    } else if (marks >= 70) {
      grade = "B";
      status = "Pass";
      scholarship = "No";
      remarks = "Good job! Push for an A next time.";
    } else if (marks >= 60) {
      grade = "C";
      status = "Pass";
      scholarship = "No";
      remarks = "Satisfactory. You can do better.";
    } else if (marks >= 50) {
      grade = "D";
      status = "Pass";
      scholarship = "No";
      remarks = "Passed, but requires more effort.";
    }

    resultName.textContent = name;
    resultMarks.textContent = marks;
    resultGrade.textContent = grade;
    resultStatus.textContent = status;
    resultScholarship.textContent = scholarship;
    resultRemarks.textContent = remarks;

    if (status === "Pass") {
      resultStatus.style.color = "#2e7d32";
      resultStatus.style.fontWeight = "bold";
    } else {
      resultStatus.style.color = "#d32f2f";
      resultStatus.style.fontWeight = "bold";
    }
  });
});
