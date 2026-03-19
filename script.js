window.addEventListener("load", ()=>{

    let name = document.querySelector(".name");
    let intro = document.querySelector(".intro-loader");

    setTimeout(()=>{
        name.style.opacity='1'
        name.style.transform="translateY(0)"
    },300)

    setTimeout(()=>{
        intro.style.top="-200%"
    },2000)
})
document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
            
            hamburger.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                hamburger.innerHTML = navLinks.classList.contains('active') ? 
                    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });
            
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });
            
            const header =document.getElementById('header');
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
            
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            const sections = document.querySelectorAll('section');
            
            window.addEventListener('scroll', function() {
                let current = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    
                    if (pageYOffset >= sectionTop - 200) {
                        current = section.getAttribute('id');
                    }
                });
                
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                });
            });
            
            const typewriterElement = document.querySelector('.typewriter');
            const words = ['Peter  Mutinda', 'A Web Developer', 'A Problem Solver', 'A Tech Enthusiast'];
            let wordIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            let typingSpeed = 150;
            
            function type() {
                const currentWord = words[wordIndex];
                const currentChar = currentWord.substring(0, charIndex);
                
                typewriterElement.textContent = currentChar;
                
                if (!isDeleting && charIndex < currentWord.length) {
                    charIndex++;
                    setTimeout(type, typingSpeed);
                } else if (isDeleting && charIndex > 0) {
                    charIndex--;
                    setTimeout(type, typingSpeed / 2);
                } else {
                    isDeleting = !isDeleting;
                    if (!isDeleting) {
                        wordIndex = (wordIndex + 1) % words.length;
                    }
                    setTimeout(type, typingSpeed);
                }
            }
            
            setTimeout(type, 1000);
            
            const skillBars = document.querySelectorAll('.skill-progress');
            
            function animateSkillBars() {
                skillBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = '0';
                    
                    const observer = new IntersectionObserver((entries) => {
                        if (entries[0].isIntersecting) {
                            bar.style.width = width + '%';
                            observer.unobserve(bar.parentElement.parentElement);
                        }
                    });
                    
                    observer.observe(bar.parentElement.parentElement);
                });
            }
            
            animateSkillBars();
            
            const filterButtons = document.querySelectorAll('.filter-btn');
            const projectCards = document.querySelectorAll('.project-card');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    const filterValue = this.getAttribute('data-filter');
                    
                    projectCards.forEach(card => {
                        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
            
            const testimonialDots = document.querySelectorAll('.testimonial-dot');
            const testimonialSlides = document.querySelectorAll('.testimonial-slide');
            
            testimonialDots.forEach(dot => {
                dot.addEventListener('click', function() {
                    const slideIndex = this.getAttribute('data-slide');
                    
                    testimonialDots.forEach(d => d.classList.remove('active'));
                    this.classList.add('active');
                    
                    testimonialSlides.forEach(slide => slide.classList.remove('active'));
                    testimonialSlides[slideIndex].classList.add('active');
                });
            });
            
            let currentTestimonial = 0;
            
            function rotateTestimonials() {
                testimonialDots.forEach(d => d.classList.remove('active'));
                testimonialSlides.forEach(s => s.classList.remove('active'));
                
                currentTestimonial = (currentTestimonial + 1) % testimonialDots.length;
                
                testimonialDots[currentTestimonial].classList.add('active');
                testimonialSlides[currentTestimonial].classList.add('active');
            }
            
            let testimonialInterval = setInterval(rotateTestimonials, 5000);
            
            const testimonialContainer = document.querySelector('.testimonials-container');
            
            testimonialContainer.addEventListener('mouseenter', () => {
                clearInterval(testimonialInterval);
            });
            
            testimonialContainer.addEventListener('mouseleave', () => {
                testimonialInterval = setInterval(rotateTestimonials, 5000);
            });
                        
            const backToTopButton = document.querySelector('.back-to-top');
            
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.add('active');
                } else {
                    backToTopButton.classList.remove('active');
                }
            });
            
            backToTopButton.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            document.getElementById('Year').textContent = new Date().getFullYear();
        });
        
