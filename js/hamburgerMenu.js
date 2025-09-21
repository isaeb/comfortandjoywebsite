const btn = document.getElementById('hamburgerBtn');
const menu = document.getElementById('mobileMenu');

btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    menu.style.display = expanded ? 'none' : 'flex';
    menu.setAttribute('aria-hidden', String(expanded));
});