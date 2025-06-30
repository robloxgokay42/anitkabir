document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menü
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const mainMenu = document.getElementById('mainMenu');

    hamburgerMenu.addEventListener('click', () => {
        mainMenu.classList.toggle('active');
        hamburgerMenu.classList.toggle('active'); // Hamburger ikonunun değişimi için
    });

    // Menü dışına tıklanınca kapanma (isteğe bağlı)
    document.addEventListener('click', (event) => {
        if (!mainMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            mainMenu.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    });

    // FAQ (Sıkça Sorulan Sorular) Akordiyon
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            
            // Eğer tıklanan soru zaten açıksa, kapat
            if (question.classList.contains('active')) {
                question.classList.remove('active');
                answer.classList.remove('active');
            } else {
                // Diğer tüm açık SSS'leri kapat
                faqQuestions.forEach(item => {
                    if (item.classList.contains('active')) {
                        item.classList.remove('active');
                        item.nextElementSibling.classList.remove('active');
                    }
                });
                // Tıklanan SSS'yi aç
                question.classList.add('active');
                answer.classList.add('active');
            }
        });
    });

    // Smooth Scrolling (Menü linklerine tıklandığında yumuşak geçiş)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Mobil menüyü kapat
            if (mainMenu.classList.contains('active')) {
                mainMenu.classList.remove('active');
                hamburgerMenu.classList.remove('active');
            }
        });
    });

});
