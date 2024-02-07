document.addEventListener("DOMContentLoaded", function () {
    // Simulate loading with GSAP
    const loadingProgress = gsap.to("#loading-progress", {
      duration: 3, // Adjust the duration as needed
      width: "100%",
      ease: "power1.inOut",
      onComplete: function () {
        // Expand loading progress bar to 100% height
        gsap.to("#loading-progress", {
          duration: 0.5,
          scaleY: 100,
        //   transformOrigin: "top left",
          onComplete: function () {
            // Hide loading screen and reveal main content
            document.getElementById("loading-screen").style.display = "none";
            gsap.to("#main-content", { opacity: 1 });
          },
        });
        // Fade out loading text
        gsap.to("#loading-text", { opacity: 0, duration: 0.5 });
      },
    });
  });
  