const tags = document.querySelectorAll('.tag');

tags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        const cardId = tag.getAttribute('id');
        const cardNum = cardId.substring(9, cardId.length);
        const card = document.getElementById('hoverCard-'+cardNum);
        card.style.visibility = 'visible';
        card.style.zIndex = 5;
        card.style.opacity = 1;
    });

    tag.addEventListener('mouseleave', () => {
        const cardId = tag.getAttribute('id');
        const cardNum = cardId.substring(9, cardId.length);
        const card = document.getElementById('hoverCard-'+cardNum);
        card.style.zIndex = 3;
        card.style.visibility = 'hidden';
        card.style.opacity = 0;
    });
});