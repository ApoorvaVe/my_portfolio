 function toggleMenu() {
      const nav = document.getElementById("nav-links");
      nav.classList.toggle("active");
    }

    function scrollToContact() {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    }

    function handleSubmit(event) {
      event.preventDefault();
      alert("Thanks for your message! (Demo only)");
      event.target.reset();
    }