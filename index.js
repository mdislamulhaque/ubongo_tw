
  function scrollSliderLeft(id) {
    const slider = document.getElementById(id);
    const card = slider.querySelector('div'); // first card
    const cardWidth = card.offsetWidth + 16; // 16px = gap (space-x-4)
    slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
  }

  function scrollRight(id) {
    const slider = document.getElementById(id);
    const card = slider.querySelector('div'); // first card
    const cardWidth = card.offsetWidth + 16; // 16px = gap (space-x-4)
    slider.scrollBy({ left: cardWidth, behavior: "smooth" });
  }


    
      const mobileMenuButton = document.getElementById("mobile-menu-button");
      const mobileMenu = document.getElementById("mobile-menu");
      let menuOpen = false;

      mobileMenuButton.addEventListener("click", () => {
        if (menuOpen) {
          // Close menu - slide up
          mobileMenu.classList.remove("scale-y-100", "translate-y-0");
          mobileMenu.classList.add("scale-y-0", "-translate-y-full");
        } else {
          // Open menu - slide down
          mobileMenu.classList.remove("scale-y-0", "-translate-y-full");
          mobileMenu.classList.add("scale-y-100", "translate-y-0");
        }
        menuOpen = !menuOpen;
      });
    

        // Simple auto-focus switching between OTP inputs
        document.querySelectorAll('input[type="text"]').forEach((input, index, inputs) => {
            input.addEventListener('input', (e) => {
                if (e.target.value.length === 1 && index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            });
            
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && e.target.value.length === 0 && index > 0) {
                    inputs[index - 1].focus();
                }
            });
        });