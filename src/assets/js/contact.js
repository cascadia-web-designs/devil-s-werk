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
            SecureToken: "30e56138-0473-4603-938d-d21d560cf827",
            To: 'kyruken@gmail.com',
            From: "myfodderemail0@gmail.com",
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