window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 150) {
        header.classList.add('scrolled-high');
        header.classList.remove('scrolled', 'scrolled-medium');
    } else if (scrollPosition > 50) {
        header.classList.add('scrolled-medium');
        header.classList.remove('scrolled', 'scrolled-high');
    } else {
        header.classList.add('scrolled');
        header.classList.remove('scrolled-medium', 'scrolled-high');
    }
});

const navItems = document.querySelectorAll('.nav-item a');

navItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#ff6347'; 
    });

    item.addEventListener('mouseout', () => {
        item.style.color = ''; 
    });
});

let images = [
    'images/image1.jpg',  
    'images/image2.jpg', 
    'images/image3.jpg'
];
let currentImageIndex = 0;

function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.body.style.backgroundImage = `url(${images[currentImageIndex]})`;
    document.body.style.backgroundSize = 'cover';        
    document.body.style.backgroundPosition = 'center';   
    document.body.style.backgroundRepeat = 'no-repeat';
}

setInterval(changeBackgroundImage, 4000);

document.body.style.backgroundImage = `url(${images[currentImageIndex]})`;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';
document.body.style.backgroundRepeat = 'no-repeat';
