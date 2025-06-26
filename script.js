const toggleBtn = document.getElementById("darkToggleBtn");
const themeIcon = document.getElementById("themeIcon");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeIcon.src = isDark ? "images/sun.png" : "images/moon.png";
  themeIcon.alt = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
});
// Contact form handler
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById('form-status');

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    status.textContent = "Please fill in all fields.";
    status.style.color = "red";
    return;
  }

  status.textContent = "Message sent successfully!";
  status.style.color = "green";
  form.reset();
  setTimeout(() => (status.textContent = ""), 3000);
}

