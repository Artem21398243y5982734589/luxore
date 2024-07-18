// // document.getElementById('togglePopupBtn').onclick = function(event) {
// //     var popup = document.getElementById('popup');
// //     if (popup.classList.contains('show')) {
// //         popup.classList.remove('show');
// //         setTimeout(() => {
// //             popup.style.display = 'none';
// //         }, 500); // Даем время для завершения анимации
// //     } else {
// //         // Получаем координаты кнопки
// //         var rect = event.target.getBoundingClientRect();
        
// //         // Устанавливаем позицию окна
// //         popup.style.top = rect.bottom + window.scrollY + 'px';
// //         popup.style.left = rect.left + window.scrollX + 'px';
// //         popup.style.display = 'block';
// //         setTimeout(() => {
// //             popup.classList.add('show');
// //         }, 0); // Запускаем анимацию после изменения display
// //     }
// // };
// let score = 0;

// document.addEventListener("DOMContentLoaded", () => {
//     const gameArea = document.getElementById("gameArea");
//     const cube = document.getElementById("cube");
//     const scoreDisplay = document.getElementById("score");

//     cube.addEventListener("click", () => {
//         score++;
//         scoreDisplay.textContent = `Очки: ${score}`;
//         moveCube();
//     });

//     function moveCube() {
//         const maxX = gameArea.clientWidth - cube.clientWidth;
//         const maxY = gameArea.clientHeight - cube.clientHeight;
//         const randomX = Math.floor(Math.random() * maxX);
//         const randomY = Math.floor(Math.random() * maxY);
//         cube.style.left = `${randomX}px`;
//         cube.style.top = `${randomY}px`;
//     }

//     moveCube();
// });

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Показываем оверлей и всплывающее окно
    document.getElementById('successOverlay').style.display = 'block';
    document.getElementById('successMessage').style.display = 'block';
});

document.getElementById('successOverlay').addEventListener('click', function() {
    // Скрываем оверлей и всплывающее окно при клике на оверлей
    document.getElementById('successOverlay').style.display = 'none';
    document.getElementById('successMessage').style.display = 'none';
});







