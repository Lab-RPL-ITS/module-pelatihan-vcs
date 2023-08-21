var counter = 1

function prevSlide() {
    counter--
    if (counter < 1) counter = 5
    updateSlide()
}

function nextSlide() {
    counter++
    if (counter > 5) counter = 1
    updateSlide()
}

function updateSlide() {
    document.getElementById('radio' + counter).checked = true
    const counterPicture = document.getElementById("counter-picture")
    counterPicture.textContent = '0' + counter 
}

function updateCounter(newCounter) {
    counter = newCounter
    updateSlide()
}

updateSlide()

setInterval(() => {
    nextSlide()
}, 3000);