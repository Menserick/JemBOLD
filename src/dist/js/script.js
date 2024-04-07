let documentHead = document.querySelector('head');

let favicon = document.createElement('link');

favicon.setAttribute('rel', 'shortcut icon');
favicon.setAttribute('href', 'asset/images/logo.png');
favicon.setAttribute('type', 'image/x-icon');

documentHead.appendChild(favicon);

AOS.init({
    duration: 800,
    easing: 'slide',
    once: false
});

const carouselInnerCont = document.querySelector('.testimonial .itsCont')
const testiRate = document.getElementById('testiRate');
const testiPic = document.getElementById('testiPic');
const testiComment = document.getElementById('testiComment');
const reviewerName = document.getElementById('reviewerName');
const reviewerPos = document.getElementById('reviewerPos');

let testimonialInfo = [
    {
        rating: 5,
        comment: "Working with JemBOLD Ventures has been an abolute pleasure. Their team went above and beyond to find us the perfect commercial space for our business. We couldn't be happier with out new location.",
        proPic: "asset/images/bg2.JPG",
        username: "Eddy's Pizza"
    },
    {
        rating: 4,
        comment: "Professional and reliable. I've never experienced such expertise.",
        proPic: "asset/images/bg2.JPG",
        username: "Jane smith",
        position: "Marketing Manager, Heights Square Inc."
    },
    {
        rating: 3,
        comment: "Outstanding spaces! They exceeded my expectations and made my living smooth and stress-free.",
        proPic: "asset/images/bg2.JPG",
        username: "david johnson"
    },
    {
        rating: 5,
        comment: "Great. I am Lisa Brown, a Scottish resident in Ghana. I just love their residential spaces.  I can't thank you enough for your excellent work.",
        proPic: "asset/images/testiuser (3).JPG",
        username: "lisa brown",
        position: "Director of Operations, Acme Corporations"
    },
    {
        rating: 3,
        comment: "As a church in need of a new space, we were impressed by the dedication and personlized attenton provided by JemBOLD Ventures.",
        proPic: "asset/images/bg2.JPG",
        username: "Nissi Life Church, Ghana",
    },
    {
        rating: 3,
        comment: "Extremely satisfied with everything they did. Their expertise is unmatched and they deliver on their promises. I wonder why I didn't meet them long ago.",
        proPic: "asset/images/testiuser (1).JPG",
        username: "Frederick mensah",
        position: "Founder of Menserick™"
    },
    {
        rating: 4,
        comment: "Loyal client for years. Their fully-equipped and high-quality rental spaces, maintenance, dedication and advantageous locations always keeps my business up and running.",
        proPic: "asset/images/bg2.JPG",
        username: "Michael Davis",
        position: "Sales Manager, Limpon Solutions"
    },
    {
        rating: 5,
        comment: "Top-notch! I purely love them ❤",
        proPic: "asset/images/bg2.JPG",
        username: "Emily Clark",
        position: "Manager, ClarTech"
    },
    {
        rating: 5,
        comment: "Thank God I met you. Keep on the marvelous work.",
        proPic: "asset/images/bg2.JPG",
        username: "Kwame Agyei"
    }
];


if (carouselInnerCont) {
    let currentIndex = 0;
    function updateCarousel() {
        testiRate.innerHTML = '';
        let li = document.createElement('li');
        li.innerHTML = `
            <svg height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 47.94 47.94" xml:space="preserve">
                <path style="fill:#b5b4b3;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                    c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                    c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                    c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                    c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                    C22.602,0.567,25.338,0.567,26.285,2.486z"/>
            </svg>
        `;
        for (let stars = 0; stars < 5;stars++) {
            testiRate.append(li.cloneNode(true));
        }
        testiRate.querySelectorAll('li').forEach((li, _i) => {
            if ((_i+1) <= testimonialInfo[currentIndex].rating) {
                li.querySelector('svg path').style.fill = '#ED8A19';
            }
        });

        testiPic.src = testimonialInfo[currentIndex].proPic;
        testiComment.innerText = testimonialInfo[currentIndex].comment;
        reviewerName.innerText = testimonialInfo[currentIndex].username;
        reviewerPos.innerText = testimonialInfo[currentIndex].position || '';
            
        if (currentIndex <= testimonialInfo.length - 2) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
    }
    updateCarousel();
    
    setInterval(() => {
        carouselInnerCont.classList.add('disappear');
        setTimeout(() => {
            updateCarousel();
            carouselInnerCont.classList.remove('disappear');
        }, 700);
    }, 8000);
}

let nav = document.querySelector('nav');
let footer = document.querySelector('footer');
function autoInsert() {
    nav.innerHTML = `
        <a href="index.html" class="logo">
            <img src="asset/images/logo.png" alt="">
            <p><span>JemBOLD<sup>&reg;</sup></span> <br>Ventures</p>
        </a>
        <div id="nav-links">
            <ul>
                <!-- <li>Services</li> -->
                <li><a href="index.html">Home</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="appointment.html">Appointment</a></li>
            </ul>
        </div>
        <div class="contact">
            <!--<span>                
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.45 22.75C16.32 22.75 15.13 22.48 13.9 21.96C12.7 21.45 11.49 20.75 10.31 19.9C9.14 19.04 8.01 18.08 6.94 17.03C5.88 15.96 4.92 14.83 4.07 13.67C3.21 12.47 2.52 11.27 2.03 10.11C1.51 8.87 1.25 7.67 1.25 6.54C1.25 5.76 1.39 5.02 1.66 4.33C1.94 3.62 2.39 2.96 3 2.39C3.77 1.63 4.65 1.25 5.59 1.25C5.98 1.25 6.38 1.34 6.72 1.5C7.11 1.68 7.44 1.95 7.68 2.31L10 5.58C10.21 5.87 10.37 6.15 10.48 6.43C10.61 6.73 10.68 7.03 10.68 7.32C10.68 7.7 10.57 8.07 10.36 8.42C10.21 8.69 9.98 8.98 9.69 9.27L9.01 9.98C9.02 10.01 9.03 10.03 9.04 10.05C9.16 10.26 9.4 10.62 9.86 11.16C10.35 11.72 10.81 12.23 11.27 12.7C11.86 13.28 12.35 13.74 12.81 14.12C13.38 14.6 13.75 14.84 13.97 14.95L13.95 15L14.68 14.28C14.99 13.97 15.29 13.74 15.58 13.59C16.13 13.25 16.83 13.19 17.53 13.48C17.79 13.59 18.07 13.74 18.37 13.95L21.69 16.31C22.06 16.56 22.33 16.88 22.49 17.26C22.64 17.64 22.71 17.99 22.71 18.34C22.71 18.82 22.6 19.3 22.39 19.75C22.18 20.2 21.92 20.59 21.59 20.95C21.02 21.58 20.4 22.03 19.68 22.32C18.99 22.6 18.24 22.75 17.45 22.75ZM5.59 2.75C5.04 2.75 4.53 2.99 4.04 3.47C3.58 3.9 3.26 4.37 3.06 4.88C2.85 5.4 2.75 5.95 2.75 6.54C2.75 7.47 2.97 8.48 3.41 9.52C3.86 10.58 4.49 11.68 5.29 12.78C6.09 13.88 7 14.95 8 15.96C9 16.95 10.08 17.87 11.19 18.68C12.27 19.47 13.38 20.11 14.48 20.57C16.19 21.3 17.79 21.47 19.11 20.92C19.62 20.71 20.07 20.39 20.48 19.93C20.71 19.68 20.89 19.41 21.04 19.09C21.16 18.84 21.22 18.58 21.22 18.32C21.22 18.16 21.19 18 21.11 17.82C21.08 17.76 21.02 17.65 20.83 17.52L17.51 15.16C17.31 15.02 17.13 14.92 16.96 14.85C16.74 14.76 16.65 14.67 16.31 14.88C16.11 14.98 15.93 15.13 15.73 15.33L14.97 16.08C14.58 16.46 13.98 16.55 13.52 16.38L13.25 16.26C12.84 16.04 12.36 15.7 11.83 15.25C11.35 14.84 10.83 14.36 10.2 13.74C9.71 13.24 9.22 12.71 8.71 12.12C8.24 11.57 7.9 11.1 7.69 10.71L7.57 10.41C7.51 10.18 7.49 10.05 7.49 9.91C7.49 9.55 7.62 9.23 7.87 8.98L8.62 8.2C8.82 8 8.97 7.81 9.07 7.64C9.15 7.51 9.18 7.4 9.18 7.3C9.18 7.22 9.15 7.1 9.1 6.98C9.03 6.82 8.92 6.64 8.78 6.45L6.46 3.17C6.36 3.03 6.24 2.93 6.09 2.86C5.93 2.79 5.76 2.75 5.59 2.75ZM13.95 15.01L13.79 15.69L14.06 14.99C14.01 14.98 13.97 14.99 13.95 15.01Z" fill="#292D32"/>
                </svg>
            </span>
            <p>
                <span>Hotline 24/7</span><br>
                <span>+233 (0) 245346410</span>
            </p>-->
            
            <button type="button" id="navContactBtn" class="contactUs">
                <svg class="phone" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.45 22.75C16.32 22.75 15.13 22.48 13.9 21.96C12.7 21.45 11.49 20.75 10.31 19.9C9.14 19.04 8.01 18.08 6.94 17.03C5.88 15.96 4.92 14.83 4.07 13.67C3.21 12.47 2.52 11.27 2.03 10.11C1.51 8.87 1.25 7.67 1.25 6.54C1.25 5.76 1.39 5.02 1.66 4.33C1.94 3.62 2.39 2.96 3 2.39C3.77 1.63 4.65 1.25 5.59 1.25C5.98 1.25 6.38 1.34 6.72 1.5C7.11 1.68 7.44 1.95 7.68 2.31L10 5.58C10.21 5.87 10.37 6.15 10.48 6.43C10.61 6.73 10.68 7.03 10.68 7.32C10.68 7.7 10.57 8.07 10.36 8.42C10.21 8.69 9.98 8.98 9.69 9.27L9.01 9.98C9.02 10.01 9.03 10.03 9.04 10.05C9.16 10.26 9.4 10.62 9.86 11.16C10.35 11.72 10.81 12.23 11.27 12.7C11.86 13.28 12.35 13.74 12.81 14.12C13.38 14.6 13.75 14.84 13.97 14.95L13.95 15L14.68 14.28C14.99 13.97 15.29 13.74 15.58 13.59C16.13 13.25 16.83 13.19 17.53 13.48C17.79 13.59 18.07 13.74 18.37 13.95L21.69 16.31C22.06 16.56 22.33 16.88 22.49 17.26C22.64 17.64 22.71 17.99 22.71 18.34C22.71 18.82 22.6 19.3 22.39 19.75C22.18 20.2 21.92 20.59 21.59 20.95C21.02 21.58 20.4 22.03 19.68 22.32C18.99 22.6 18.24 22.75 17.45 22.75ZM5.59 2.75C5.04 2.75 4.53 2.99 4.04 3.47C3.58 3.9 3.26 4.37 3.06 4.88C2.85 5.4 2.75 5.95 2.75 6.54C2.75 7.47 2.97 8.48 3.41 9.52C3.86 10.58 4.49 11.68 5.29 12.78C6.09 13.88 7 14.95 8 15.96C9 16.95 10.08 17.87 11.19 18.68C12.27 19.47 13.38 20.11 14.48 20.57C16.19 21.3 17.79 21.47 19.11 20.92C19.62 20.71 20.07 20.39 20.48 19.93C20.71 19.68 20.89 19.41 21.04 19.09C21.16 18.84 21.22 18.58 21.22 18.32C21.22 18.16 21.19 18 21.11 17.82C21.08 17.76 21.02 17.65 20.83 17.52L17.51 15.16C17.31 15.02 17.13 14.92 16.96 14.85C16.74 14.76 16.65 14.67 16.31 14.88C16.11 14.98 15.93 15.13 15.73 15.33L14.97 16.08C14.58 16.46 13.98 16.55 13.52 16.38L13.25 16.26C12.84 16.04 12.36 15.7 11.83 15.25C11.35 14.84 10.83 14.36 10.2 13.74C9.71 13.24 9.22 12.71 8.71 12.12C8.24 11.57 7.9 11.1 7.69 10.71L7.57 10.41C7.51 10.18 7.49 10.05 7.49 9.91C7.49 9.55 7.62 9.23 7.87 8.98L8.62 8.2C8.82 8 8.97 7.81 9.07 7.64C9.15 7.51 9.18 7.4 9.18 7.3C9.18 7.22 9.15 7.1 9.1 6.98C9.03 6.82 8.92 6.64 8.78 6.45L6.46 3.17C6.36 3.03 6.24 2.93 6.09 2.86C5.93 2.79 5.76 2.75 5.59 2.75ZM13.95 15.01L13.79 15.69L14.06 14.99C14.01 14.98 13.97 14.99 13.95 15.01Z" fill="#292D32"></path>
                </svg>
                <p>contact us</p>
            </button>

            <button type="button" id="hamburger">
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
        </div>
    `;

    footer.innerHTML = `
        <ul class="fMain">
            <li>
                <div class="logo">
                    <img src="asset/images/logo.png" alt="">
                    <p><span>JemBOLD<sup>&reg;</sup></span> <br>Ventures</p>
                </div>

                <p>Thank you for visiting JemBOLD Ventures. Discover your next rental adventure with us today. Whether you're seeking commercial spaces, residential sanctuaries or hospitality escapes, we're here to sort you out, every step of the way. Reach out to our team to unlock the perfect space tailored to your needs. Welcome home!</p>

                <ul class="fLinks">
                    <!-- <li>
                        <a href="#">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="#292D32"/>
                                <path d="M12 16.25C9.66 16.25 7.75 14.34 7.75 12C7.75 9.66 9.66 7.75 12 7.75C14.34 7.75 16.25 9.66 16.25 12C16.25 14.34 14.34 16.25 12 16.25ZM12 9.25C10.48 9.25 9.25 10.48 9.25 12C9.25 13.52 10.48 14.75 12 14.75C13.52 14.75 14.75 13.52 14.75 12C14.75 10.48 13.52 9.25 12 9.25Z" fill="#292D32"/>
                                <path d="M17 7.4999C16.87 7.4999 16.74 7.4699 16.62 7.4199C16.5 7.3699 16.39 7.2999 16.29 7.2099C16.2 7.1099 16.12 6.9999 16.07 6.8799C16.02 6.7599 16 6.6299 16 6.4999C16 6.3699 16.02 6.2399 16.07 6.1199C16.13 5.9899 16.2 5.8899 16.29 5.7899C16.34 5.7499 16.39 5.6999 16.44 5.6699C16.5 5.6299 16.56 5.5999 16.62 5.5799C16.68 5.5499 16.74 5.5299 16.81 5.5199C17.13 5.4499 17.47 5.5599 17.71 5.7899C17.8 5.8899 17.87 5.9899 17.92 6.1199C17.97 6.2399 18 6.3699 18 6.4999C18 6.6299 17.97 6.7599 17.92 6.8799C17.87 6.9999 17.8 7.1099 17.71 7.2099C17.61 7.2999 17.5 7.3699 17.38 7.4199C17.26 7.4699 17.13 7.4999 17 7.4999Z" fill="#292D32"/>
                            </svg>
                        </a>
                    </li> -->
                    <li>
                        <a href="mailto:jembold@gmail.com">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 5V4C2.44772 4 2 4.44772 2 5H3ZM21 5H22C22 4.44772 21.5523 4 21 4V5ZM3 6H21V4H3V6ZM20 5V17H22V5H20ZM19 18H5V20H19V18ZM4 17V5H2V17H4ZM5 18C4.44772 18 4 17.5523 4 17H2C2 18.6569 3.34315 20 5 20V18ZM20 17C20 17.5523 19.5523 18 19 18V20C20.6569 20 22 18.6569 22 17H20Z" fill="#292929"></path>
                                <path d="M3 5L12 14L21 5"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="tel:+233267132805">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.45 22.75C16.32 22.75 15.13 22.48 13.9 21.96C12.7 21.45 11.49 20.75 10.31 19.9C9.14 19.04 8.01 18.08 6.94 17.03C5.88 15.96 4.92 14.83 4.07 13.67C3.21 12.47 2.52 11.27 2.03 10.11C1.51 8.87 1.25 7.67 1.25 6.54C1.25 5.76 1.39 5.02 1.66 4.33C1.94 3.62 2.39 2.96 3 2.39C3.77 1.63 4.65 1.25 5.59 1.25C5.98 1.25 6.38 1.34 6.72 1.5C7.11 1.68 7.44 1.95 7.68 2.31L10 5.58C10.21 5.87 10.37 6.15 10.48 6.43C10.61 6.73 10.68 7.03 10.68 7.32C10.68 7.7 10.57 8.07 10.36 8.42C10.21 8.69 9.98 8.98 9.69 9.27L9.01 9.98C9.02 10.01 9.03 10.03 9.04 10.05C9.16 10.26 9.4 10.62 9.86 11.16C10.35 11.72 10.81 12.23 11.27 12.7C11.86 13.28 12.35 13.74 12.81 14.12C13.38 14.6 13.75 14.84 13.97 14.95L13.95 15L14.68 14.28C14.99 13.97 15.29 13.74 15.58 13.59C16.13 13.25 16.83 13.19 17.53 13.48C17.79 13.59 18.07 13.74 18.37 13.95L21.69 16.31C22.06 16.56 22.33 16.88 22.49 17.26C22.64 17.64 22.71 17.99 22.71 18.34C22.71 18.82 22.6 19.3 22.39 19.75C22.18 20.2 21.92 20.59 21.59 20.95C21.02 21.58 20.4 22.03 19.68 22.32C18.99 22.6 18.24 22.75 17.45 22.75ZM5.59 2.75C5.04 2.75 4.53 2.99 4.04 3.47C3.58 3.9 3.26 4.37 3.06 4.88C2.85 5.4 2.75 5.95 2.75 6.54C2.75 7.47 2.97 8.48 3.41 9.52C3.86 10.58 4.49 11.68 5.29 12.78C6.09 13.88 7 14.95 8 15.96C9 16.95 10.08 17.87 11.19 18.68C12.27 19.47 13.38 20.11 14.48 20.57C16.19 21.3 17.79 21.47 19.11 20.92C19.62 20.71 20.07 20.39 20.48 19.93C20.71 19.68 20.89 19.41 21.04 19.09C21.16 18.84 21.22 18.58 21.22 18.32C21.22 18.16 21.19 18 21.11 17.82C21.08 17.76 21.02 17.65 20.83 17.52L17.51 15.16C17.31 15.02 17.13 14.92 16.96 14.85C16.74 14.76 16.65 14.67 16.31 14.88C16.11 14.98 15.93 15.13 15.73 15.33L14.97 16.08C14.58 16.46 13.98 16.55 13.52 16.38L13.25 16.26C12.84 16.04 12.36 15.7 11.83 15.25C11.35 14.84 10.83 14.36 10.2 13.74C9.71 13.24 9.22 12.71 8.71 12.12C8.24 11.57 7.9 11.1 7.69 10.71L7.57 10.41C7.51 10.18 7.49 10.05 7.49 9.91C7.49 9.55 7.62 9.23 7.87 8.98L8.62 8.2C8.82 8 8.97 7.81 9.07 7.64C9.15 7.51 9.18 7.4 9.18 7.3C9.18 7.22 9.15 7.1 9.1 6.98C9.03 6.82 8.92 6.64 8.78 6.45L6.46 3.17C6.36 3.03 6.24 2.93 6.09 2.86C5.93 2.79 5.76 2.75 5.59 2.75ZM13.95 15.01L13.79 15.69L14.06 14.99C14.01 14.98 13.97 14.99 13.95 15.01Z" fill="#292D32"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </li>

            <li>
                <h3>Company</h3>
                <ul>
                    <li>
                        <a href="index.html">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="services.html">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="index.html">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="appointment.html">
                            Appointment
                        </a>
                    </li>
                </ul>
            </li>

            <li>
                <h3>Contact</h3>
                <ul>
                    <li>+233 (0) 267132805</li>
                    <li>+233 (0) 536275615</li>
                    <li>jembold@gmail.com</li>
                    <li>Mitchel Road, Community 8, Tema</li>
                </ul>
            </li>
        </ul>

        <hr>

        <div>
            <p>Copyright &copy; 1976; JemBOLD Ventures. All rights reserved</p>
            <img src="asset/images/menserick.png" alt="">
        </div>
    `;
}
autoInsert();

let hamburger = document.getElementById('hamburger');
let navLinksCont = document.getElementById('nav-links');
let navOpenedStat = false;
hamburger.addEventListener('click', (e)=>{
    if (navOpenedStat) {
        e.currentTarget.classList.remove('active');
        navLinksCont.classList.remove('active');
        navOpenedStat = false;
    } else {
        e.currentTarget.classList.add('active');
        navLinksCont.classList.add('active');
        navOpenedStat = true;
    }
})

let contactUsBtn = document.querySelectorAll('.contactUs');

function createOverlay() {
    let overlayCont = document.createElement('div');
    overlayCont.className = 'overlayCont';
    overlayCont.innerHTML = `
        <div class="overlayFloor"></div>
        <div class="overlay">
            <div class="overCont">
                <p>Kindly click on any of the contacts to talk to us
                <ul id="overCont">

                </ul>
            </div>
        </div>
    `;
    document.body.appendChild(overlayCont);
}
createOverlay();

const contact = [
    {type: 'phone', data: '+233267132805'},
    {type: 'phone', data: '+233536275615'},
    {type: 'mail', data: 'littlejohnmensa9@gmail.com'}
];

let contactOverlay = document.querySelector('.overlayCont');
let overContUl = document.querySelector('.overCont ul');

for (let i = 0; i < contact.length; i++) {
    let li = document.createElement('li');
           
    let contactType;
    if (contact[i].type == 'phone') {
        contactType = true;
    } else {
        contactType = false;            
    }
    
    li.setAttribute('data-type', ''+contact[i].type+'');
    li.innerHTML = `
        <a href="${contactType ? `tel:${contact[i].data}` : `mailto:${contact[i].data}`}" class="contactAnchor">${contact[i].data}</a>

        <button type="button" class="copyContactBtn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 3H4V16" stroke="#292929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 7H20V19C20 20.1046 19.1046 21 18 21H10C8.89543 21 8 20.1046 8 19V7Z" stroke="#292929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
            
        <button type="button" class="contactBtn">
            ${contactType ? 
                `<svg class="phone" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.45 22.75C16.32 22.75 15.13 22.48 13.9 21.96C12.7 21.45 11.49 20.75 10.31 19.9C9.14 19.04 8.01 18.08 6.94 17.03C5.88 15.96 4.92 14.83 4.07 13.67C3.21 12.47 2.52 11.27 2.03 10.11C1.51 8.87 1.25 7.67 1.25 6.54C1.25 5.76 1.39 5.02 1.66 4.33C1.94 3.62 2.39 2.96 3 2.39C3.77 1.63 4.65 1.25 5.59 1.25C5.98 1.25 6.38 1.34 6.72 1.5C7.11 1.68 7.44 1.95 7.68 2.31L10 5.58C10.21 5.87 10.37 6.15 10.48 6.43C10.61 6.73 10.68 7.03 10.68 7.32C10.68 7.7 10.57 8.07 10.36 8.42C10.21 8.69 9.98 8.98 9.69 9.27L9.01 9.98C9.02 10.01 9.03 10.03 9.04 10.05C9.16 10.26 9.4 10.62 9.86 11.16C10.35 11.72 10.81 12.23 11.27 12.7C11.86 13.28 12.35 13.74 12.81 14.12C13.38 14.6 13.75 14.84 13.97 14.95L13.95 15L14.68 14.28C14.99 13.97 15.29 13.74 15.58 13.59C16.13 13.25 16.83 13.19 17.53 13.48C17.79 13.59 18.07 13.74 18.37 13.95L21.69 16.31C22.06 16.56 22.33 16.88 22.49 17.26C22.64 17.64 22.71 17.99 22.71 18.34C22.71 18.82 22.6 19.3 22.39 19.75C22.18 20.2 21.92 20.59 21.59 20.95C21.02 21.58 20.4 22.03 19.68 22.32C18.99 22.6 18.24 22.75 17.45 22.75ZM5.59 2.75C5.04 2.75 4.53 2.99 4.04 3.47C3.58 3.9 3.26 4.37 3.06 4.88C2.85 5.4 2.75 5.95 2.75 6.54C2.75 7.47 2.97 8.48 3.41 9.52C3.86 10.58 4.49 11.68 5.29 12.78C6.09 13.88 7 14.95 8 15.96C9 16.95 10.08 17.87 11.19 18.68C12.27 19.47 13.38 20.11 14.48 20.57C16.19 21.3 17.79 21.47 19.11 20.92C19.62 20.71 20.07 20.39 20.48 19.93C20.71 19.68 20.89 19.41 21.04 19.09C21.16 18.84 21.22 18.58 21.22 18.32C21.22 18.16 21.19 18 21.11 17.82C21.08 17.76 21.02 17.65 20.83 17.52L17.51 15.16C17.31 15.02 17.13 14.92 16.96 14.85C16.74 14.76 16.65 14.67 16.31 14.88C16.11 14.98 15.93 15.13 15.73 15.33L14.97 16.08C14.58 16.46 13.98 16.55 13.52 16.38L13.25 16.26C12.84 16.04 12.36 15.7 11.83 15.25C11.35 14.84 10.83 14.36 10.2 13.74C9.71 13.24 9.22 12.71 8.71 12.12C8.24 11.57 7.9 11.1 7.69 10.71L7.57 10.41C7.51 10.18 7.49 10.05 7.49 9.91C7.49 9.55 7.62 9.23 7.87 8.98L8.62 8.2C8.82 8 8.97 7.81 9.07 7.64C9.15 7.51 9.18 7.4 9.18 7.3C9.18 7.22 9.15 7.1 9.1 6.98C9.03 6.82 8.92 6.64 8.78 6.45L6.46 3.17C6.36 3.03 6.24 2.93 6.09 2.86C5.93 2.79 5.76 2.75 5.59 2.75ZM13.95 15.01L13.79 15.69L14.06 14.99C14.01 14.98 13.97 14.99 13.95 15.01Z" fill="#292D32"></path>
                </svg>`
                : 
                `<svg class="email" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5V4C2.44772 4 2 4.44772 2 5H3ZM21 5H22C22 4.44772 21.5523 4 21 4V5ZM3 6H21V4H3V6ZM20 5V17H22V5H20ZM19 18H5V20H19V18ZM4 17V5H2V17H4ZM5 18C4.44772 18 4 17.5523 4 17H2C2 18.6569 3.34315 20 5 20V18ZM20 17C20 17.5523 19.5523 18 19 18V20C20.6569 20 22 18.6569 22 17H20Z" fill="#292929"></path>
                    <path d="M3 5L12 14L21 5"></path>
                </svg>`}
        </button>
    `;
    
    overContUl.appendChild(li);
}

// codes for after the site has fully loaded
window.onload = function(){
    let overlayFloor = document.querySelector('.overlayFloor');
    let overCont = document.querySelector('.overCont');
    overlayFloor.addEventListener('click',()=>{
        let overContLi = document.querySelectorAll('.overCont ul li');

        contactOverlay.classList.remove('active')
        overCont.removeAttribute('data-loading');
    
        overContLi.forEach(li => {
            li.classList.remove('active')
        });
    });
    
    contactUsBtn.forEach(btn => {
        btn.addEventListener('click', ()=>{
            contactOverlay.classList.add('active');
        })
    });
    
    let copyContactBtn = document.querySelectorAll('.copyContactBtn');
    let contactBtn = document.querySelectorAll('.contactBtn');
    let contactAnchor = document.querySelectorAll('.contactAnchor');
    
    contactBtn.forEach((btn, i) => {
        btn.addEventListener('click', ()=>{
            contactAnchor[i].click();
        })        
    });

    copyContactBtn.forEach((btn, i) => {
        btn.addEventListener('click', ()=>{
            let copyText = contactAnchor[i];
            let textToCopy = copyText.innerText;

            let initialContent = btn.innerHTML;

            btn.innerHTML = `
                <svg class="copied" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.81 16.9501C10.62 16.9501 10.43 16.8801 10.28 16.7301L8.78 15.2301C8.49 14.9401 8.49 14.4601 8.78 14.1701C9.07 13.8801 9.55 13.8801 9.84 14.1701L10.81 15.1401L14.28 11.6701C14.57 11.3801 15.05 11.3801 15.34 11.6701C15.63 11.9601 15.63 12.4401 15.34 12.7301L11.34 16.7301C11.2 16.8801 11 16.9501 10.81 16.9501Z" fill="#292D32"/>
                    <path d="M14 6.75H10C9.04 6.75 7.25 6.75 7.25 4C7.25 1.25 9.04 1.25 10 1.25H14C14.96 1.25 16.75 1.25 16.75 4C16.75 4.96 16.75 6.75 14 6.75ZM10 2.75C9.01 2.75 8.75 2.75 8.75 4C8.75 5.25 9.01 5.25 10 5.25H14C15.25 5.25 15.25 4.99 15.25 4C15.25 2.75 14.99 2.75 14 2.75H10Z" fill="#292D32"/>
                    <path d="M15 22.7499H9C3.38 22.7499 2.25 20.1699 2.25 15.9999V9.99993C2.25 5.43993 3.9 3.48993 7.96 3.27993C8.37 3.25993 8.73 3.56993 8.75 3.98993C8.77 4.40993 8.45 4.74993 8.04 4.76993C5.2 4.92993 3.75 5.77993 3.75 9.99993V15.9999C3.75 19.6999 4.48 21.2499 9 21.2499H15C19.52 21.2499 20.25 19.6999 20.25 15.9999V9.99993C20.25 5.77993 18.8 4.92993 15.96 4.76993C15.55 4.74993 15.23 4.38993 15.25 3.97993C15.27 3.56993 15.62 3.24993 16.04 3.26993C20.1 3.48993 21.75 5.43993 21.75 9.98993V15.9899C21.75 20.1699 20.62 22.7499 15 22.7499Z" fill="#292D32"/>
                </svg>
            `;

            setTimeout(() => {
                btn.innerHTML = initialContent;
            }, 3000);
            navigator.clipboard.writeText(textToCopy).catch(error =>{
                alert("Couldn't complete the copy request")
            });
        })
    });
}

let servicesBtn = document.querySelectorAll('.servicesBtn');
servicesBtn.forEach(e => {
    e.addEventListener('click', ()=>{
        window.open('../../../services.html', '_self');
    })
});
let appointmentBtn = document.querySelectorAll('.appointmentBtn');
appointmentBtn.forEach(e => {
    e.addEventListener('click', ()=>{
        window.open('../../../appointment.html', '_self');
    })
});