// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    const element = document.getElementById('text'); 
    element.textContent = 'This is really cool!';
    console.log("The DOM has loaded");
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );
