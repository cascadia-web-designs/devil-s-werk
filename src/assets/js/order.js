const formDiv = document.getElementById("form");
const pageMask = document.getElementById("page-mask");
const orderButton = document.getElementById("order");

orderButton.addEventListener('click', () => {
    if (formDiv.classList.contains('gone')) {
        formDiv.classList.remove('gone');
        formDiv.classList.add('show');
        pageMask.classList.add('darken');
    } else {
        formDiv.classList.remove('show');
        formDiv.classList.add('gone');
        pageMask.classList.remove('darken');
    }
})