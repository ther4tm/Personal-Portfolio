let getInTouch = document.getElementById('contact');
let closeContact = document.getElementById('close_button')
let navLink = document.getElementById('nav_link')

// Reusable hover style
const hoverStyle = (event) => {
    if (document.body.id === 'index') {
        event.target.style.color = '#374785';
    } else {
        event.target.style.color = '#F76C6C';
    };
};

const hoverNoStyle = (event) => {
    event.target.style.color = 'white';
};

// Open and close contact form
const showForm = () => {
    document.querySelector('form').style.display = 'block';
    closeContact.style.display = 'block';
    getInTouch.innerHTML = 'Use the form below to enter your details and send me a message!'
    getInTouch.removeEventListener('click', showForm);
    getInTouch.removeEventListener('mouseover', hoverStyle);
    getInTouch.removeEventListener('mouseout', hoverNoStyle);
    getInTouch.style.color = 'white';
    closeContact.style.color = 'white';
    closeContact.addEventListener('mouseover', hoverStyle);
    closeContact.addEventListener('mouseout', hoverNoStyle);
};

const closeForm =() => {
    document.querySelector('form').style.display = 'none';
    getInTouch.innerHTML = 'Click here to get in touch!'
    getInTouch.addEventListener('click', showForm);
    getInTouch.addEventListener('mouseover', hoverStyle);
    getInTouch.addEventListener('mouseout', hoverNoStyle);
    closeContact.style.display = 'none';
};


// Calls
getInTouch.addEventListener('click', showForm);
getInTouch.addEventListener('mouseover', hoverStyle);
getInTouch.addEventListener('mouseout', hoverNoStyle);
closeContact.addEventListener('click', closeForm);
navLink.addEventListener('mouseover', hoverStyle);
navLink.addEventListener('mouseout', hoverNoStyle);