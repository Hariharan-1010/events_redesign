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

function plusSlides(tagClasses, move) {
    const eventTag = tagClasses.parentNode.parentNode;
    const eventClass = eventTag.classList[1];
    const eventNum = getNumFromEvent(eventClass);
    const allTags = document.getElementsByClassName(eventClass);
    const imgTag = allTags[1];
    const ImgNum = imgTag.id;
    let slideNum = ImgNum.match(/=(\d+)/)[1];

    if(move == 1) slideNum = (parseInt(slideNum)+1)%5;
    else slideNum = (slideNum-1)%5;
    if(move === 1 && slideNum === 0) slideNum = 1;
    else if(move === -1 && slideNum  == 0) slideNum = 4;
    
    imgTag.src = "assets/event"+eventNum+"/img"+slideNum+".jpeg";
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