export function loadForm() {
  const timestampInput = document.getElementById("timestamp");
  if (!timestampInput) return

  const now = new Date();
  const isoDate = now.toISOString();
  timestampInput.value = isoDate;

  const myInfo = new URLSearchParams(window.location.search);
  const rawDate = myInfo.get('date');
  const formattedDate = rawDate ? new Date(rawDate).toLocaleString() : "";

  document.querySelector('#results').innerHTML = `
    <p>${myInfo.get('first')} ${myInfo.get('last')}</p>
    <p>Your email: ${myInfo.get('email')}</p>
    <p>Your Phone: ${myInfo.get('phone')}</p>
    <p>Organizacion Name: ${myInfo.get('title')}</p>
    <p>Date: ${formattedDate}</p>
  `;
}
