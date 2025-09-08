// Contact form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const msg = document.getElementById("message").value.trim();

      if (name === "" || email === "" || msg === "") {
        message.style.color = "red";
        message.textContent = "All fields are required!";
      } else if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
        message.style.color = "red";
        message.textContent = "Enter a valid email address!";
      } else {
        message.style.color = "green";
        message.textContent = "Message sent successfully!";
        form.reset();
      }
    });
  }
});
