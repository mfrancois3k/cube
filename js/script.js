let leftMarquee = document.querySelector('.left-marquee');
let rightMarquee = document.querySelector('.right-marquee');
let leftMarqueeText = document.querySelector('.left-marquee .marquee-text');
let rightMarqueeText = document.querySelector('.right-marquee .marquee-text');

function updateMarquee() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let windowHeight = window.innerHeight;
    let totalHeight = document.body.clientHeight;
    let progress = scrollTop / (totalHeight - windowHeight);
    let leftMarqueeProgress = (progress * 200) % 100;
    let rightMarqueeProgress = (progress * 200 - 100) % 100;
    leftMarqueeText.style.transform = `translateY(${leftMarqueeProgress}%)`;
    rightMarqueeText.style.transform = `translateY(${rightMarqueeProgress}%)`;
}

window.addEventListener('scroll', updateMarquee);
