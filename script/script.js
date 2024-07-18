function Oppo (ass) {
let num = Math.ceil(Math.random()*10)
let numb
let GameComp
// 1 = Камень
// 2 = Ножницы 
// 3 = Бумага
// let yourNumb 
let yourGame = prompt('выбери камень, ножницы или бумага ')
if (num==1 || num==2|| num==3) {
  numb =1
  GameComp = 'Камень'
} if(num==4 || num==5 || num== 6){
  numb = 2
  GameComp = 'Ножницы'
} if (num==7 || num ==8 || num==9) {
  numb = 3
  GameComp = 'Бумага'
} if (numb == 10){
  numb == 4
}


if (yourGame == 'Камень' && GameComp == 'Ножницы'){
  alert('ты выиграл' +','+' '+'Компьютер выбрал:'+' '+GameComp)  
} if (yourGame =='Камень' && GameComp == 'Бумага'){
  alert('ты проиграл' +','+' '+'Компьютер выбрал:'+ ' '+GameComp)
} if (yourGame == 'Камень' && GameComp == 'Камень') {
  alert('ничья' +','+' '+'Компьютер выбрал:'+' '+GameComp)
}

if (yourGame == 'Ножницы' && GameComp == 'Ножницы'){
  alert('ничья' +','+' '+'Компьютер выбрал:'+' '+GameComp)  
} if (yourGame =='Ножницы' && GameComp == 'Бумага'){
  alert('ты выиграл' +','+' '+'Компьютер выбрал:'+' '+GameComp)
} if (yourGame == 'Ножницы' && GameComp == 'Камень') {
  alert('ты проиграл' +','+' '+'Компьютер выбрал:'+' '+GameComp)
}

if (yourGame == 'Бумага' && GameComp == 'Ножницы'){
  alert('ты проиграл' +','+' '+'Компьютер выбрал:'+' '+GameComp)  
} if (yourGame =='Бумага' && GameComp == 'Бумага'){
  alert('ничья' +','+' '+'Компьютер выбрал:'+' '+GameComp)
} if (yourGame == 'Бумага' && GameComp == 'Камень') {
  alert('ты выиграл' +','+' '+'Компьютер выбрал:'+' '+GameComp)
}
  
} 



// document.getElementById('togglePopupBtn').onclick = function(event) {
//   var popup = document.getElementById('popup');
//   if (popup.classList.contains('show')) {
//       popup.classList.remove('show');
//       setTimeout(() => {
//           popup.style.display = 'none';
//       }, 500); // Даем время для завершения анимации
//   } else {
//       // Получаем координаты кнопки
//       var rect = event.target.getBoundingClientRect();
      
//       // Устанавливаем позицию окна
//       popup.style.top = rect.bottom + window.scrollY + 'px';
//       popup.style.left = rect.left + window.scrollX + 'px';
//       popup.style.display = 'block';
//       setTimeout(() => {
//           popup.classList.add('show');
//       }, 0); // Запускаем анимацию после изменения display
//   }
// };






document.getElementById('togglePopupBtn').onclick = function(event) {
  var popup = document.getElementById('popup');
  if (popup.classList.contains('show')) {
      popup.classList.remove('show');
      setTimeout(() => {
          popup.style.display = 'none';
      }, 300); // Уменьшенная задержка на скрытие до 300 миллисекунд
  } else {
      var rect = event.target.getBoundingClientRect();
      
      popup.style.top = rect.bottom + window.scrollY + 'px';
      popup.style.left = rect.left + window.scrollX + 'px';
      popup.style.display = 'block';
      setTimeout(() => {
          popup.classList.add('show');
      }, 100); // Уменьшенная задержка на показ до 100 миллисекунд
  }

  document.addEventListener('click', closePopupOutside);
};

function closePopupOutside(event) {
  var popup = document.getElementById('popup');
  if (!popup.contains(event.target) && event.target !== document.getElementById('togglePopupBtn')) {
      popup.classList.remove('show');
      setTimeout(() => {
          popup.style.display = 'none';
      }, 300); // Уменьшенная задержка на скрытие до 300 миллисекунд

      document.removeEventListener('click', closePopupOutside);
  }
}





///////////////////////////////////////////////////////////////////////

document.getElementById('passwordForm').onsubmit = function(event) {
  event.preventDefault(); // Отменяем стандартное поведение отправки формы

  var passwordInput = document.getElementById('password_ad').value;

  // Проверяем введенный пароль
  if (passwordInput === 'd1pos0-') {
      // Перенаправляем на другую страницу
      window.location.href = 'admin.html'; // Замените на ваш URL
  } else {
      alert('Неверный пароль. Попробуйте еще раз.');
      // Очищаем поле пароля
      document.getElementById('password_ad').value = '';
  }
};










let regist_form = false



document.getElementById('formReg').addEventListener('submit', function(event) {
  if (!this.checkValidity()) {
      // Если форма не прошла валидацию, прерываем выполнение функции
      return;
  }
  
  event.preventDefault();
  
  // Показываем сообщение об успешной регистрации
  alert('you registrat!');
  regist_form = true;
  
  // Показываем оверлей и всплывающее окно

});
console.log(regist_form)