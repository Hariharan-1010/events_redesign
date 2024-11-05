const tags = document.querySelectorAll('.tag');

tags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        const cardId = tag.getAttribute('id');
        const cardNum = cardId.substring(9, cardId.length);
        const card = document.getElementById('hoverCard-'+cardNum);
        const imgTag = card.children[1];
        imgTag.style.visibility = 'visible';
        imgTag.style.zIndex = 5;
        imgTag.style.opacity = 1;
    });

    tag.addEventListener('mouseleave', () => {
        const cardId = tag.getAttribute('id');
        const cardNum = cardId.substring(9, cardId.length);
        const card = document.getElementById('hoverCard-'+cardNum);
        const imgTag = card.children[1];
        imgTag.style.zIndex = 3;
        imgTag.style.visibility = 'hidden';
        imgTag.style.opacity = 0;
    });
});

function plusSlides(tagClasses, move) {
    const eventTag = tagClasses.parentNode.parentNode;
    const eventClass = eventTag.classList[1];
    const eventNum = getNumFromEvent(eventClass);
    const allTags = document.getElementsByClassName(eventClass);
    const imgTag = allTags[1];
    const ImgNum = imgTag.id;
    let slideNum = ImgNum.match(/=(\d+)/)[1];

    // if(move == 1) slideNum = (parseInt(slideNum)+1)%2;
    // else slideNum = (slideNum-1)%2;
    // if(move === 1 && slideNum === 0) slideNum = 1;
    // else if(move === -1 && slideNum  == 0) slideNum = 1;

    slideNum = 1
    
    imgTag.src = "assets/events/event"+eventNum+"/img"+slideNum+".jpg";
    imgTag.id = "image-event="+slideNum;
    imgTag.name = "image-event="+slideNum;
    

    // console.log(eventClass, slideNum, imgTag.src, eventNum)

}
function getNumFromEvent(val) {
    let i = 0;
    for(i = 0; i < val.length; i++) {
        if('0' <= val[i] && val[i] <= '9') break;
    }
    return val.substring(i, val.length);
}