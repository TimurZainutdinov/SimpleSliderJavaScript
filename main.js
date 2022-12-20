// Элементы на странице
const slider = document.querySelector('#slider')
const btnNext = document.querySelector('#btnNext')
const btnPrev = document.querySelector('#btnPrev')

// Преобразование в массив и его переобход
const sliderItems = Array.from(slider.children)

sliderItems.forEach(function(slide, index) {
    // Скрытие всех слайдов кроме первого
    if ( index !== 0 ) slide.classList.add('hidden')

    // Добавление индексов
    slide.dataset.index = index

    // Добавление data атрибут active для первого / активного слайда
    sliderItems[0].setAttribute('data-active', '')

    // Клик по слайду
    slide.addEventListener('click', function() {
        showNextSlide('next')
    })
})

btnNext.onclick = function() {
    showNextSlide('next')
}

btnPrev.onclick = function() {
    showNextSlide('prev')
}

function showNextSlide(direction) {

    // Скрытие текущего слайда
    const curentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +curentSlide.dataset.index // преобразование в число
    curentSlide.classList.add('hidden')
    curentSlide.removeAttribute('data-active')

     // Расчет индекса следующего слайда
    let nextSlideIndex

    if ( direction === 'next' ) {

        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1

    } else if ( direction === 'prev' ) {

        nextSlideIndex = currentSlideIndex  === 0 ? sliderItems.length - 1 : currentSlideIndex - 1

    }

    // Показываем следующий слайд
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
    nextSlide.classList.remove('hidden')
    nextSlide.setAttribute('data-active', '')

}