const Order = () => {
    const formDiv = document.getElementById("orderform");
    const pageMask = document.getElementById("page-mask");

    const showModal = () => {
        if (formDiv.classList.contains('gone')) {
            formDiv.classList.remove('gone');
            formDiv.classList.add('show');
            pageMask.classList.add('darken');
        } else {
            formDiv.classList.remove('show');
            formDiv.classList.add('gone');
            pageMask.classList.remove('darken');
        }
    }

    const sendEmail = () => {
        const nameInputElem = document.getElementById("nameinput");
        const emailInputElem = document.getElementById("emailinput");
        const subjectInputElem = document.getElementById("subjectinput");
        const bodyInputElem = document.getElementById("bodyinput");
        const phoneInputElem = document.getElementById("phoneinput");
        
        const nameInput = nameInputElem.value;
        const emailInput = emailInputElem.value;
        const subjectInput = subjectInputElem.value;
        const bodyInput = bodyInputElem.value;
        const phoneInput = phoneInputElem.value;
        
        // Check if email or phone number is empty
        if (!emailInput.trim() || !phoneInput.trim()) {
            alert("Error: Please fill out both the email and phone number fields.");
            return; // Stop the function execution if fields are missing
        }

        let emailBody = `${nameInput} - ${emailInput} 
        ${bodyInput} + ${subjectInput} + ${phoneInput}`;

        emailjs.send('service_6yciryj', 'template_x0uqs9o', {           
          from_name: nameInput,
          to_name: "Justin",
          from_email: emailInput, 
          to_email: "seekingurf@gmail.com ",
          message: emailBody
        },
        'pIjVKnKp1gozCh38Y',
      )
            .then(function (message) {
                alert("Mail has been sent successfully");
                
                // Clear the input fields after successful send
                nameInputElem.value = "";
                emailInputElem.value = "";
                subjectInputElem.value = "";
                bodyInputElem.value = "";
                phoneInputElem.value = "";
            });
    }

    return {showModal, sendEmail}
};

const setEvents = (Order) => {
    const orderButton = document.getElementById("order");
    const submitButton = document.getElementById("submitorder");
    const xButton = document.getElementById("xbutton");
    // const cancelButton = document.getElementById("cancel-button");

    // cancelButton.addEventListener('click', Order.showModal);
    xButton.addEventListener('click', Order.showModal);
    orderButton.addEventListener('click', Order.showModal);
    submitButton.addEventListener('click', Order.sendEmail);
}

const orderController = (() => {
    //order controller runs immediately as script is loaded
    //Passes Order object into setEvents
    setEvents(Order());
})();
