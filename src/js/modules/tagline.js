
function tagline() {
    const closeTaglineBtn = document.querySelector('.tegline__close');
    const tagline = document.querySelector('.tagline');

    closeTaglineBtn.onclick = function() {
        tagline.remove();
    };
};

export default tagline;