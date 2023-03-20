const tagsEL = document.getElementById('tags')
const textarea = document.getElementById('textarea')
const pointsDisplay = document.createElement('p')

let points = 0;
let userInput = '';

textarea.focus()

textarea.addEventListener('keyup',(e) => {
    createTags(e.target.value)
    if(e.key === 'Enter'){
        randomSelect()
    }
})

input.addEventListener('keyup',(e) => {

    if(e.key === 'Enter'){
        setTimeout(() =>{
            e.target.value = ''
        }, 1000)
        randomSelect()
    }
})

input.addEventListener('input', (e) => {
    userInput = e.target.value.trim();
})

function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    tagsEL.innerHTML = ''
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEL.appendChild(tagEl)
    })
}

function randomSelect(){
    const times = 30

    const interval = setInterval(() =>{
        const randomTag = pickRandomTag()

        highlightTag(randomTag)
        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100);

    setTimeout(() =>{
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)

            // Compare the last highlighted tag with the user's input and update points
            if (randomTag.innerText === userInput) {
                points = points + tags.length;
            }
            if (userInput === '') {
                points = points;
            }else if(randomTag.innerText !== userInput) {
                points = points - 1;
            }
            updatePointsDisplay(); // Update the points display

        }, 100)
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag){
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}

function updatePointsDisplay() {
    pointsDisplay.innerText = `Points: ${points}`;
    document.body.appendChild(pointsDisplay);
}