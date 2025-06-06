const slides = document.querySelectorAll("#slides .slide");
      let currentCenter = 0;
      slides[0].className = "slide center";
      slides[1].className = "slide right";
      slides[slides.length - 1].className = "slide left";

      function nextSlide() {
        slides[currentCenter].className = "slide normal";
        const nextIndex = (currentCenter + 1) % slides.length;
        const prevIndex = (currentCenter - 1 + slides.length) % slides.length;
        slides[nextIndex].className = "slide normal";
        slides[prevIndex].className = "slide normal";
        currentCenter = nextIndex;
        slides[currentCenter].className = "slide center";
        slides[(currentCenter + 1) % slides.length].className = "slide right";
        slides[(currentCenter - 1 + slides.length) % slides.length].className =
          "slide left";
      }

      const slideInterval = setInterval(nextSlide, 3000);