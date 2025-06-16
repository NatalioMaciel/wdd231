export function loadFormData() {

  const storedData = localStorage.getItem('formData');
  if (storedData) {
    const data = JSON.parse(storedData);
    console.log(data);

    document.querySelector('#results').innerHTML = `
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Message:</strong> ${data.message}</p>
            <p><strong>Date:</strong> ${data.date}</p>
        `;
  } else {
    return
  }
}
