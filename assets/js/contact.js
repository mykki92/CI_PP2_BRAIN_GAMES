const contactForm = document.getElementById("contact-form");

// listen to the form submission
document
.getElementById("contact-form")
.addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "service_sg9ug7m";
  const templateID = "template_gx0pa05";

  // send the email here
  emailjs.sendForm(serviceID, templateID, this).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      document.querySelector('#feedback-message').style.display="flex";
      contactForm.reset();
    },
    (error) => {
      console.log("FAILED...", error);
      alert("FAILED...", error);
    }
  );
});

function refreshPage() {
  window.location.reload();
}










