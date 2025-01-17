// script.js

document.addEventListener('DOMContentLoaded', () => {
    const heroHeader = document.querySelector('header.hero');

    // Илова кардани эффект барои тағйири ранги замина ҳангоми скрол
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY > 50) {
            heroHeader.style.background = 'linear-gradient(to right, #388e3c, #66bb6a)';
        } else {
            heroHeader.style.background = 'linear-gradient(to right, #4caf50, #81c784)';
        }
    });

    // Таъсири интерактивӣ барои қисмати "Узвҳо"
    const organElements = document.querySelectorAll('.organ');
    organElements.forEach(organ => {
        organ.style.position = 'relative'; // Таъин кардани мавқеи нисбӣ барои ҳар як орган

        organ.addEventListener('mouseenter', () => {
            organ.style.transform = 'scale(1.1)';
            organ.style.transition = 'transform 0.3s ease';
            organ.style.zIndex = '10'; // Баланд кардани қабат барои намоён шудани орган аз болои дигарҳо
        });

        organ.addEventListener('mouseleave', () => {
            organ.style.transform = 'scale(1)';
            organ.style.zIndex = '1'; // Барқарор кардани қабат ба ҳолати аслӣ
        });
    });

    // Илова кардани аломати интерактивӣ ба видеои системаи ҷисм
    const videoElement = document.querySelector('video');
    if (videoElement) {
        videoElement.addEventListener('play', () => {
            console.log('Видео оғоз шуд!');
        });
        videoElement.addEventListener('pause', () => {
            console.log('Видео муваққатан қатъ шуд!');
        });
    }
});
