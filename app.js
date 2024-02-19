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
  initNameAnimation();

  // Your additional code...

  function initNameAnimation() {
      const nameElement = document.getElementById("name");
      const holderElement = document.getElementById("holder");
      const mainContent = document.getElementById("main-content");

      let interval = null;

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
                      fontSize: "clamp(2rem, 5vw, 5rem)",
                      padding: "0rem clamp(0.5rem, 1vw, 1rem)",
                      margin: "2px",
                      display: "block",
                      top: 0,
                      left: 0,
                      position: "sticky",
                      ease: "power4.out",
                      onComplete: function () {
                          // Set display property to block once the animation is complete
                          nameElement.style.display = "block";

                          // Reveal other content
                          gsap.to(mainContent, { opacity: 1 });
                          gsap.to(holderElement, { opacity: 1 });
                      },
                  });
              }

              iteration += 1 / 3;
          }, 30);
      };
  }
});







document.addEventListener('scroll', function () {
  var nav = document.getElementById('upper-nav');
  var visibleSection = null;

  for (var i = 1; i <= 5; i++) {
      var sectionId = 'section' + i;
      var section = document.getElementById(sectionId);

      if (section) {
          var rect = section.getBoundingClientRect();

          if (rect.top < window.innerHeight  && rect.bottom > window.innerHeight ) {
              visibleSection = section;

              // Reset the color of all watch elements
              for (var j = 1; j <= 5; j++) {
                  var allplaceElements = document.querySelectorAll('#place' + j);
                  allplaceElements.forEach(function (placeElement) {
                      placeElement.style.color = ''; // Reset color to default
                  });
              }

              // Set the color of current section's watch elements
              var placeElements = document.querySelectorAll('#place' + i);
              placeElements.forEach(function (placeElement) {
                  placeElement.style.color = 'white';
              });

              break; // Exit the loop if a visible section is found
          }
      }
  }

  if (visibleSection) {
      nav.style.display = 'block';
  } else {
      nav.style.display = 'block';
  }
});

