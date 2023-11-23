import { db } from '../firebase-config.js';

function getInputVal(id) {
      return document.getElementById(id).value;
}
function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
}
  
function isValidPhone(phone) {
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(phone);
}
function sendContactUsMessage() {
      const firstName = getInputVal("firstName");
      const lastName = getInputVal("lastName");
      const email = getInputVal("email");
      const phone = getInputVal("phone");
      const message = getInputVal("message");

      if (!firstName || !lastName || !email || !phone || !message) {
            showToast("Please fill in all fields before sending the message.");
            return;
      }

      if (!isValidEmail(email)) {
            showToast("Please enter a valid email address.");
            return; 
      }
      
      if (!isValidPhone(phone)) {
            showToast("Please enter a valid phone number.");
            return;
      }

  
      const contactData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message,
        id: Date.now()
      };

      const collect = db.collection("web").doc("contactUsMessages")
      collect.update({
            messages: firebase.firestore.FieldValue.arrayUnion(contactData)
        })
        .then(() => {
            showToast("Message sent successfully!")
        })
        .catch((error) => {
            showToast("Error!")
        });
}

window.sendContactUsMessage = sendContactUsMessage;