const createForm = () => {
    return `
    <form class="feedback-form" autocomplete="off">
        <label>
            Email
            <input type="email" name="email" autofocus />
        </label>
        <label>
            Message
            <textarea name="message" rows="8"></textarea>
        </label>
        <button type="submit">Submit</button>
    </form>`;
};

const formAdd = document.querySelector('.task-form');
formAdd.innerHTML = createForm();
const formData = { email: "", message: "" };
const form = document.querySelector('.feedback-form');

const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));

    if (savedData) {
        formData.email = savedData.email || "";
        formData.message = savedData.message || "";
        form.email.value = formData.email;
        form.message.value = formData.message;
    }

// Додати делегування для відстеження події input
form.addEventListener('input', (event) => {
    const { name, value } = event.target; // Отримати ім'я та значення поля
    formData[name] = value.trim(); // Оновити об'єкт formData
    localStorage.setItem("feedback-form-state", JSON.stringify(formData)); // Зберегти у localStorage
});

// Обробник події submit
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Зупинити стандартну поведінку форми

    // Перевірка на заповненість полів
    if (!formData.email || !formData.message) {
        alert('Fill please all fields'); // Вивести попередження
        return;
    }

    // Вивести об'єкт formData у консоль
    console.log(formData);

    // Очищення localStorage і полів форми
    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
    form.email.value = '';
    form.message.value = '';
});