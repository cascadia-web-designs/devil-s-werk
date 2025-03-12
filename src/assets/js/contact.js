const Contact = () => {
    const sendEmail = () => { 
        // Get and trim input values
        const nameInput = document.getElementById("name").value.trim();
        const emailInput = document.getElementById("email").value.trim();
        const phoneInput = document.getElementById("phone").value.trim();
        const subjectInput = document.getElementById("subject").value.trim();
        const bodyInput = document.getElementById("message").value.trim();

        // Validate that required fields (email, phone, and message) are filled
        if (!emailInput || !phoneInput || !bodyInput) {
            alert("Please fill in the email, phone, and message fields.");
            return; // Prevent sending email if required fields are missing
        }
        
        // Compose the email body
        let emailBody = `${nameInput} + ${emailInput} + ${phoneInput} 
        ${bodyInput} + ${subjectInput}`; 

        // Send the email using emailjs
        emailjs.send(
            'service_6yciryj', 
            'template_x0uqs9o', 
            {           
                from_name: nameInput,
                to_name: "Justin",
                from_email: emailInput, 
                to_email: "seekingurf@gmail.com",
                message: emailBody
            },
            'pIjVKnKp1gozCh38Y'
        )
        .then(function (message) {
            alert("Mail has been sent successfully");

            // Clear input fields to avoid double sending
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
        });
    }

    return {sendEmail}
};

const setEvents = (Contact) => {
    const submitButton = document.getElementById("submitcontact");
    submitButton.addEventListener('click', Contact.sendEmail);
}

const orderController = (() => {
    setEvents(Contact());
})();
