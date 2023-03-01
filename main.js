// Mobile Navigation
const mobileNav = document.querySelector('.mobile-nav');
const menuIcon = document.querySelector('.bx-dots-vertical-rounded');
const mobileMenuItems = document.querySelectorAll('.mobile-nav .menu-items li')

menuIcon.addEventListener('click', ()=> {
    mobileNav.classList.toggle('active')
})

mobileMenuItems.forEach((i) => {
    i.addEventListener('click', () => {
        mobileNav.classList.remove('active')
    })
})

// code added from testimonial section from another project

let testimonials = [
    {
        name: "Stacey Michael",
        src: "assets/testimonial-1.jpg",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor explicabo error mollitia quis aspernatur, officia repellat voluptate, ducimus praesentium eum!',
        profession: 'Business Admin'
    },

    {
        name: "Peter Elvis",
        src: "assets/testimonial-2.jpg",
        text: 'Dolor explicabo error mollitia quis aspernatur, Lorem ipsum dolor sit. officia repellat voluptate, ducimus praesentium eum!',
        profession: 'Entreprenuer'
    }, 

    {
        name: "Steven Marker",
        src: "assets/testimonial-3.jpg",
        text: 'Officia repellat voluptate, ducimus praesentium eum!, Dolor explicabo aspernatur, Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        profession: 'Data Analyst'   
    }, 

    {
        name: "Rose Stone",
        src: "assets/testimonial-4.jpg",
        text: 'Great services provided here!, Really love it. Dolor explicabo error mollitia quis aspernatur, Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        profession: 'Bank Manager'   
    }
];

const picEl = document.querySelector('.genimage')
const textEl = document.querySelector('.text')
const nameEl = document.querySelector('.username')
const professionEl = document.querySelector('.profession')

let idx = 0;
updateTestimonial()

function updateTestimonial() {
    const {name, src, text, profession} = testimonials[idx];
    picEl.src = src;
    textEl.innerHTML = text;
    nameEl.innerHTML = name;
    professionEl.innerHTML = profession;
    idx++;
    if(idx===testimonials.length){
        idx = 0
    }
    setTimeout(()=>{
        updateTestimonial()
    }, 5000)/* 2nd parameter timer in milliseconds*/
}

