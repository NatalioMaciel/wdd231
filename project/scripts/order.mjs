export function loadOrder() {
    const timestampInput = document.getElementById("timestamp");
    if (!timestampInput) return

    const now = new Date();
    const isoDate = now.toISOString();
    timestampInput.value = isoDate;

    const myInfo = new URLSearchParams(window.location.search);
    const rawDate = myInfo.get('date');
    const formattedDate = rawDate ? new Date(rawDate).toLocaleString() : "";

    document.querySelector('#results').innerHTML = `
    <p>Hello <strong>${myInfo.get('name')}</strong></p>
    <p>We will contact you using the information provided:</p>
    <p><strong>Email:</strong> ${myInfo.get('email')}</p>
    <p><strong>Phone: </strong>${myInfo.get('phone')}</p>
    <p><strong>Date:</strong> ${formattedDate}</p>
  `;
}
