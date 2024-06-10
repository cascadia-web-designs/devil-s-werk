
const Contact = () => {
    const sendEmail = () => { 
        
        const nameInput = document.getElementById("name").value;
        const emailInput = document.getElementById("email").value;
        const phoneInput = document.getElementById("phone").value;
        const subjectInput = document.getElementById("subject").value;
        const bodyInput = document.getElementById("message").value;
        let emailBody = `${nameInput} + ${emailInput} + ${phoneInput} 
        ${bodyInput} + ${subjectInput}`; 
        

        emailjs.send('service_6yciryj', 'template_x0uqs9o', {           
          from_name: nameInput,
          to_name: "Justin",
          from_email: emailInput, 
          to_email: "seekingurf@gmail.com",
          message: emailBody
        },
        'pIjVKnKp1gozCh38Y',
      )
            .then(function (message) {
                alert("Mail has been sent successfully")
            });
    }

    return {sendEmail}
};

const setEvents = (Contact) => {
    const submitButton = document.getElementById("submitcontact");

    submitButton.addEventListener('click', Contact.sendEmail);
}

const orderController = (() => {
    //order controller runs immediately as script is loaded
    //Passes Order object into setEvents
    setEvents(Contact());
})();