// Вводим переменные для цен на товары
const priceOne = document.querySelector('.priceOne');
const priceTwo = document.querySelector('.priceTwo');
const priceThree = document.querySelector('.priceThree');
const priceFour = document.querySelector('.priceFour');
// Вводим переменную для элемента Итого
const totalPrice = document.querySelector('.total-price');
const discountButton = document.querySelector('.discount__btn');

// Приводим String к Numbers 
const a = +priceOne.innerHTML;
const b = +priceTwo.innerHTML;
const c = +priceThree.innerHTML;
const d = +priceFour.innerHTML;

// Считаем сумму
const sum = a + b + c + d;
// Форматируем с использованием функции toLocaleString('ru-RU')
totalPrice.innerHTML = sum.toLocaleString("ru-Ru", {style: "currency", currency: "RUB"});

// Функция для подсчёта суммы со скидкой
function countDiscount() {
    const result = sum - (sum * 0.2);
    totalPrice.innerHTML = result.toLocaleString("ru-Ru", {style: "currency", currency: "RUB"});
}
// Добавляем обработчик события по клику на кнопку
discountButton.addEventListener('click', countDiscount);

