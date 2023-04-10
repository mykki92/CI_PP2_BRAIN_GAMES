// listen to the form submission
document
.getElementById("contact-form")
.addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "service_sg9ug7m";
  const templateID = "template_7s18p3c";

  // send the email here
  emailjs.sendForm(serviceID, templateID, this).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("SUCCESS!");
    },
    (error) => {
      console.log("FAILED...", error);
      alert("FAILED...", error);
    }
  );
});












