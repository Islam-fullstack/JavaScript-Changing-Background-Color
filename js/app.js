window.addEventListener('DOMContentLoaded', function () {
    console.log('Hello I am ready to DOMContentLoaded')
    let colorSpan = document.querySelector('.color');
    let btn = document.querySelector('#btn');
    let body = document.querySelector('body')

    let colorArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

    btn.addEventListener('click', () => {
        console.log(Choose());
        colorSpan.textContent = Choose();
        body.style.backgroundColor = Choose();
    });

    function Choose() {

        let choosenColor = '#';
        for (let i = 0; i < 6; i++) {
            let hash = Math.floor(Math.random() * 1.6 * 10);
            const element = colorArr[hash];
            choosenColor += element;
        }
        return choosenColor;
    }

});