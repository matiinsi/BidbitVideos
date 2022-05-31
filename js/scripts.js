document.addEventListener('DOMContentLoaded', () => {
    

    const detectCountVideos = () => {

        const listVideosGrid = document.querySelector('.videos__container--list'),
            videos = document.querySelectorAll('.video__container'),
            videosCount = videos.length;

            listVideosGrid.classList.remove('gridTemplateOne', 'gridTemplateTwo', 'gridTemplateThree', 'gridTemplateFour', 'gridTemplateFive', 'gridTemplateSix');

            // Dependiendo la cantidad de videos, muestro una grilla diferente
            if (videosCount === 2) {
                listVideosGrid.classList.add('gridTemplateTwo');
            } else if (videosCount === 3) {
                listVideosGrid.classList.add('gridTemplateThree');
            } else if (videosCount === 4) {
                listVideosGrid.classList.add('gridTemplateFour');
            } else if (videosCount === 5) {
                listVideosGrid.classList.add('gridTemplateFive');
            } else if (videosCount === 6) {
                listVideosGrid.classList.add('gridTemplateSix');
            } else {
                listVideosGrid.classList.add('gridTemplateOne');
            }

    };

    detectCountVideos();

});