
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
        const nameInput = document.getElementById("nameinput").value;
        const emailInput = document.getElementById("emailinput").value;
        const subjectInput = document.getElementById("subjectinput").value;
        const bodyInput = document.getElementById("bodyinput").value;

        let emailBody = `${nameInput} - ${emailInput} 
        ${bodyInput} + ${subjectInput}`;

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
                alert("Mail has been sent successfully")
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