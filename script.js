/* Mobile nav */
const mobileToggle = document.getElementById('mobileToggle');
const primaryNav = document.getElementById('primaryNav');
mobileToggle.addEventListener('click', () => {
  const open = primaryNav.classList.toggle('is-open');
  mobileToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

/* Footer year */
document.getElementById('year').textContent = new Date().getFullYear();

/* EmailJS init — using your PUBLIC KEY (safe to expose) */
// eslint-disable-next-line no-undef
emailjs.init('MGForec9CcOM_7orJ');

/* Form validation + EmailJS send */
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

function setError(field, msg) {
  const err = form.querySelector(`.error[data-for="${field}"]`);
  if (err) err.textContent = msg || '';
}

function validate() {
  let ok = true;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  setError('name', ''); 
  setError('email', ''); 
  setError('subject', ''); 
  setError('message', '');

  if (name.length < 2) {
    setError('name', 'Please enter your full name.');
    ok = false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setError('email', 'Enter a valid email address.');
    ok = false;
  }

  if (subject.length < 3) {
    setError('subject', 'Subject must be at least 3 characters.');
    ok = false;
  }

  if (message.length < 10) {
    setError('message', 'Message must be at least 10 characters.');
    ok = false;
  }

  return ok;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  statusEl.textContent = '';
  
  if (!validate()) return;

  const params = {
    from_name: form.name.value.trim(),
    reply_to: form.email.value.trim(),
    subject: form.subject.value.trim(),
    message: form.message.value.trim(),
  };

  // ✅ Your updated EmailJS IDs
  const SERVICE_ID = 'service_235hn4p';
  const TEMPLATE_ID = 'template_3fe2f8g';

  try {
    // eslint-disable-next-line no-undef
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, params);
    form.reset();
    statusEl.textContent = '✅ Message sent! Please check your email for confirmation.';
  } catch (err) {
    console.error(err);
    statusEl.textContent = '❌ Sorry, something went wrong. Please try again later.';
  }
});
