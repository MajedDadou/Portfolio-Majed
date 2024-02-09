document.addEventListener("DOMContentLoaded", function () {
  const loadingText = document.getElementById("loading-text");

  // Simulate loading with GSAP
  const loadingProgress = gsap.to("#loading-progress", {
    duration: 1, // Adjust the duration as needed
    width: "100%",
    ease: "bounce.out",     
    onComplete: function () {
      // Expand loading progress bar to 100% height
      gsap.to("#loading-progress", {
        duration: 1.3,
        scaleY: 150, // Set scaleY to 1 to fill 100% height
        onComplete: function () {
          // Hide loading screen and reveal main content
          document.getElementById("loading-screen").style.display = "none";
          gsap.to("#main-content", { opacity: 1 });
        },
      });
      // Fade out loading text
      gsap.to(loadingText, { opacity: 0, duration: 0.5 });
    },
    onUpdate: function () {
      // Update loading text based on progress
      const progress = Math.round(loadingProgress.progress() * 100);
      loadingText.innerText = `${progress}%`;
    },
  });



  
});



const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

document.addEventListener("DOMContentLoaded", function () {
  const nameElement = document.getElementById("name");
  const holderElement = document.getElementById("holder");


  nameElement.onmouseover = event => {
    let iteration = 0;

    clearInterval(interval);

    const originalText = event.target.dataset.value.replace('-', ' ');

    interval = setInterval(() => {
      event.target.innerText = originalText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return originalText[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= originalText.length) {
        clearInterval(interval);

        // After 2 seconds, move the name to the top-left corner with GSAP
     
        gsap.to(nameElement, {
          duration: 2,
          margin: "2px",
          display: "block",
          fontSize: "clamp(2rem, 5vw, 5rem)", // Adjust the font size as needed
          position: "sticky",
          ease: "power2.inOut", // Adjust the easing function as needed
          
        });
        gsap.to(holderElement, {
          display: "block",

        }); 
        
      }

      iteration += 1 / 3;
    }, 30);
  };
});

