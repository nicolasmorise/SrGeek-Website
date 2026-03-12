  function goTo(id) {
    var el = document.getElementById(id);
    if (!el) return;
    var top = el.getBoundingClientRect().top + window.pageYOffset - 66;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }

  window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 40);
  });

  document.getElementById('hbg').addEventListener('click', () => {
    document.getElementById('mobMenu').classList.toggle('open');
  });
  function closeMob() { document.getElementById('mobMenu').classList.remove('open'); }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('v'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.r').forEach(el => obs.observe(el));

  function enviarWpp() {
    const name    = document.getElementById('fname').value.trim();
    const phone   = document.getElementById('fphone').value.trim();
    const subject = document.getElementById('fsubject').value;
    const msg     = document.getElementById('fmsg').value.trim();

    if (!name || !phone || !subject) {
      alert('Preencha nome, WhatsApp e assunto antes de enviar.');
      return;
    }

    const text = `Olá! Vim pelo site da Sr. Geek 🎮\n\n👤 Nome: ${name}\n📱 WhatsApp: ${phone}\n📦 Assunto: ${subject}${msg ? '\n\n💬 ' + msg : ''}`;
    const url  = 'https://wa.me/5588921485374?text=' + encodeURIComponent(text);

    const toast = document.getElementById('toast');
    toast.style.display = 'block';
    setTimeout(() => toast.style.display = 'none', 3000);
    setTimeout(() => window.open(url, '_blank'), 600);
  }

const track = document.querySelector(".carousel-track");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

next.onclick = () => {
  track.scrollBy({ left: 350, behavior: "smooth" });
};

prev.onclick = () => {
  track.scrollBy({ left: -350, behavior: "smooth" });
};