// Простая анимация: мигающий заголовок
const headerTitle = document.querySelector("header h1");
setInterval(() => {
  headerTitle.style.color = headerTitle.style.color === "#fff" ? "#3aafa9" : "#fff";
}, 1000);
