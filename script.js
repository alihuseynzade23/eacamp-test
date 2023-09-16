const rightSelect = document.getElementById('rightSelect');
const leftSelect = document.getElementById('leftSelect');
const redirectToRightBtn = document.getElementById('redirectToRight');
const redirectToLeftBtn = document.getElementById('redirectToLeft');

redirectToRightBtn.addEventListener('click', () => {
  const selectedOptions = Array.from(leftSelect.selectedOptions);

  if (selectedOptions.length > 0) {
    // Loop through selected options and move them to the right select
    selectedOptions.forEach(function(option) {
      rightSelect.appendChild(option);
    });
  } else {
    alert("No options selected.");
  }
});

redirectToLeftBtn.addEventListener('click', () => {
  const selectedOptions = Array.from(rightSelect.selectedOptions);

  if (selectedOptions.length > 0) {
    // Loop through selected options and move them back to the left select
    selectedOptions.forEach(function(option) {
      leftSelect.appendChild(option);
    });
  } else {
    alert("No options selected.");
  }
});