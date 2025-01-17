document.getElementById("contactBtn").addEventListener("click", function() {
    var contactInfo = document.getElementById("contactInfo");
    contactInfo.style.display = (contactInfo.style.display === "flex") ? "none" : "flex";
  });
  