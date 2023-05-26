document.addEventListener("DOMContentLoaded", function () {
    const words = document.querySelectorAll(".word");
  
    words.forEach(function (word) {
      word.addEventListener("click", function () {
        if (this.classList.contains("selected")) {
          this.classList.remove("selected");
        } else {
          this.classList.add("selected");
        }
      });
    });
  });
  