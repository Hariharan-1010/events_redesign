const tags = document.querySelectorAll('.tag');

tags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        const cardId = tag.getAttribute('id');
        const cardNum = cardId.substring(9, cardId.length);
        const card = document.getElementById('hoverCard-'+cardNum);
        
        const rect = tag.getBoundingClientRect();
        const containerRect = document.querySelector('#container').getBoundingClientRect();
        card.style.display = 'block';
        let cardTop = rect.bottom + window.scrollY; // Position below the tag
        let cardLeft = rect.left + window.scrollX; // Align with the tag

        // Check if the card overflows the right side
        if (cardLeft + card.offsetWidth > containerRect.right) {
            cardLeft = containerRect.right - card.offsetWidth - 10; // Adjust to the left
        }
        else {
            cardLeft -= 10;
        }

        // Check if the card overflows the bottom side
        if (cardTop + card.offsetHeight > containerRect.bottom) {
            cardTop = rect.top + window.scrollY - card.offsetHeight - 10; // Position above the tag
        }
        else {
            cardTop -= 100;
        }

        card.style.display = 'block';
        card.style.top = `${cardTop}px`;
        card.style.left = `${cardLeft}px`;
    });

    tag.addEventListener('mouseleave', () => {
        const cardId = tag.getAttribute('id');
        const cardNum = cardId.substring(9, cardId.length);
        const card = document.getElementById('hoverCard-'+cardNum);
        
        card.style.display = 'none';
    });
});