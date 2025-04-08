// Show popup
document.getElementById("contactBtn").addEventListener("click", () => {
    document.getElementById("contactModal").style.display = "block";
  });
  
  // Close popup
  document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("contactModal").style.display = "none";
  });
  
  // Close if user clicks outside the modal
  window.onclick = function(event) {
    const modal = document.getElementById("contactModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  
  