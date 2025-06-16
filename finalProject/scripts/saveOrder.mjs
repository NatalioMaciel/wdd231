export function saveFormData() {
    const form = document.querySelector('#contact-form');
    if (!form) return;

    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#phone');
    const messageInput = document.querySelector('#message');
    const timestampInput = document.getElementById("timestamp");

    if (!nameInput || !emailInput || !messageInput || !phoneInput || !timestampInput) {
        console.error("form not found");
        return;
    }
    const now = new Date();
    const formatted = now.toLocaleString('es-AR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    timestampInput.value = formatted;

    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        message: messageInput.value,
        date: formatted
    };

    localStorage.setItem('formData', JSON.stringify(formData));
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('#contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        saveFormData();
        window.location.href = 'thankyou.html';
    });
});
