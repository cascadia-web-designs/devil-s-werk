//Sends email using contact form on contact.html

const Contact = () => {
    const sendEmail = () => {
        const nameInput = document.getElementById("name").value;
        const emailInput = document.getElementById("email").value;
        const phoneInput = document.getElementById("phone").value;
        const subjectInput = document.getElementById("subject").value;
        const bodyInput = document.getElementById("message").value;

        let emailBody = `${nameInput} - ${emailInput} - ${phoneInput} 
        ${bodyInput}`;

        Email.send({
            SecureToken: "1c236d5b-9cd5-47ea-baff-f712d2b98393",
            To: 'dwerk@googlegroups.com',
            From: "cwdevilswerk@gmail.com",
            Subject: subjectInput,
            Body: emailBody
        })
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