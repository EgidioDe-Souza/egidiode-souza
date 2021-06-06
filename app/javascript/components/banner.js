import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Egidio De-Souza", "Full-Stack Developer"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };