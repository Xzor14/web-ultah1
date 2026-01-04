<template>
  <div class="relative min-h-screen bg-[#050505] font-satoshi selection:bg-gold selection:text-black overflow-x-hidden text-white pb-10">
    
    <div ref="preloader" class="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center transition-opacity duration-1000">
      <div class="overflow-hidden relative">
        <h1 class="loader-text text-[6rem] md:text-[10rem] font-cinzel text-gold opacity-0 translate-y-20">19 Tahun</h1>
      </div>
      <p class="mt-4 text-gold/60 text-[10px] uppercase tracking-[0.8em] animate-pulse font-bold">The Royal Celebration</p>
    </div>

    <div class="fixed top-6 right-6 z-50 flex items-center gap-4">
      <button @click="toggleAudio" class="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-xl hover:scale-110 transition duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
        <div v-if="isPlaying" class="flex gap-1 items-end h-4">
           <div class="w-[2px] bg-gold h-full animate-[bounce_1s_infinite]"></div>
           <div class="w-[2px] bg-gold h-2/3 animate-[bounce_1.5s_infinite]"></div>
           <div class="w-[2px] bg-gold h-4/5 animate-[bounce_0.8s_infinite]"></div>
        </div>
        <span v-else class="text-[10px] font-bold text-gray-400">PLAY</span>
      </button>
      <audio ref="audioRef" loop src="assets/music/mela.mp3"></audio>
    </div>

    <header class="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <div class="z-10 relative">
        <div class="hero-sub opacity-0 mb-4 flex justify-center items-center gap-4">
          <div class="h-[1px] w-12 bg-gold/30"></div>
          <span class="text-rose-gold tracking-[0.5em] text-[10px] uppercase font-bold">Happy 19th Birthday</span>
          <div class="h-[1px] w-12 bg-gold/30"></div>
        </div>
        
        <h1 class="font-cinzel text-7xl md:text-9xl text-white leading-none overflow-hidden drop-shadow-2xl">
          <div class="hero-title-line translate-y-full">SITI MELAROJA</div>
        </h1>
        <h1 class="font-cinzel text-7xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-100 to-gold leading-none overflow-hidden pb-4">
          <div class="hero-title-line translate-y-full">MELAROJA</div>
        </h1>

        <p class="hero-desc opacity-0 mt-8 text-gray-400 font-light max-w-md mx-auto text-xs md:text-sm leading-relaxed border-t border-white/10 pt-4 px-6">
          "Teruntuk Siti Melaroja, semoga cahaya kebahagiaan selalu menyertai setiap langkahmu di usia yang ke-19 ini."
        </p>
      </div>
    </header>

    <div class="py-12 bg-black overflow-hidden border-y border-white/5 relative">
      <div class="text-marquee-container flex whitespace-nowrap">
        <h2 v-for="n in 3" :key="n" class="font-cinzel text-4xl md:text-6xl font-bold text-white/5 uppercase tracking-[0.2em] mx-10">
          Siti Melaroja • 08 Januari 2007 • Happy Birthday • Nineteenth • 
        </h2>
      </div>
    </div>

    <section class="py-24 bg-[#080808] overflow-hidden relative">
      <div class="flex gap-6 marquee-gallery-content w-max pl-6">
        <div v-for="i in 2" :key="i" class="flex gap-6">
          <div v-for="n in 6" :key="n" class="relative w-56 h-72 md:w-80 md:h-[450px] flex-shrink-0 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition duration-700 border border-white/10 group">
            <img :src="`/images/bg${n}.jpg`" class="w-full h-full object-cover group-hover:scale-110 transition duration-1000" alt="Memory">
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
               <span class="text-gold font-cinzel text-sm mb-1" data-aos="fade-up">Memory #{{n}}</span>
               <span class="text-white/50 text-[10px] tracking-widest">STORY OF SITI</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 max-w-5xl mx-auto">
      <h2 class="text-center font-cinzel text-4xl md:text-6xl text-gold mb-24" data-aos="zoom-in">The Journey</h2>
      
      <div class="relative border-l border-white/10 ml-4 md:mx-auto md:w-2/3 space-y-32">
        <div class="timeline-item relative pl-12" data-aos="fade-right">
          <div class="absolute -left-[7px] top-2 w-3 h-3 bg-gold rounded-full shadow-[0_0_15px_#bf953f]"></div>
          <span class="text-7xl font-cinzel text-white/5 absolute -top-10 left-10">2007</span>
          <h3 class="text-2xl font-bold text-white mb-2 font-cinzel tracking-wider">A Miracle Happens</h3>
          <p class="text-gray-500 text-sm leading-relaxed">8 Januari 2007. Tangisan pertamamu menjadi hadiah terindah bagi dunia.</p>
        </div>

        <div class="timeline-item relative pl-12" data-aos="fade-left">
          <div class="absolute -left-[7px] top-2 w-3 h-3 bg-rose-gold rounded-full shadow-[0_0_15px_#b76e79]"></div>
          <span class="text-7xl font-cinzel text-white/5 absolute -top-10 left-10">2026</span>
          <h3 class="text-2xl font-bold text-rose-gold mb-2 font-cinzel tracking-wider">Blooming Nineteen</h3>
          <p class="text-gray-500 text-sm leading-relaxed">Kini kamu tumbuh dengan pesona yang luar biasa. Siap menaklukkan dunia.</p>
        </div>
      </div>
    </section>

    <section class="py-32 text-center bg-gradient-to-b from-[#050505] to-[#111]">
      <h2 class="font-cinzel text-3xl text-gold mb-12" data-aos="fade-down">Make a Special Wish</h2>
      
      <div class="relative w-64 h-64 mx-auto cursor-pointer group" @click="blowCandles" data-aos="zoom-in">
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-60 h-32 bg-pink-400 rounded-b-3xl shadow-2xl z-10 group-hover:scale-105 transition"></div>
        <div class="absolute bottom-[120px] left-1/2 -translate-x-1/2 w-48 h-20 bg-pink-300 rounded-2xl z-0 group-hover:scale-105 transition"></div>
        
        <div class="absolute top-12 left-1/2 -translate-x-1/2 flex gap-6 z-20">
           <div v-for="n in 3" :key="n" class="relative">
              <div class="w-3 h-14 bg-white rounded-sm shadow-md"></div>
              <div v-if="isCandleLit" class="absolute -top-6 left-1/2 -translate-x-1/2 w-4 h-6 bg-orange-400 rounded-[50%] animate-flicker"></div>
              <div v-else class="absolute -top-8 left-1/2 -translate-x-1/2 text-gray-400 animate-smoke">💨</div>
           </div>
        </div>
      </div>
      <p v-if="isCandleLit" class="mt-12 text-gray-500 text-xs tracking-widest animate-pulse" data-aos="fade-up">KLIK KUE UNTUK TIUP LILIN</p>
      <p v-else class="mt-12 text-gold font-pinyon text-4xl animate-pop">Selamat Ulang Tahun, Siti!</p>
    </section>

    <section class="py-40 flex items-center justify-center bg-[#0a0a0a] perspective-container">
      <div 
        class="card-wrap w-[320px] h-[520px] cursor-pointer"
        @mousemove="handleTilt"
        @mouseleave="resetTilt"
        @click="openCard"
        data-aos="flip-up"
      >
        <div class="card-inner w-full h-full transition-transform duration-1000 transform-style-3d" :class="{ 'flipped': isCardOpen }">
          
          <div ref="cardFront" class="card-front absolute inset-0 bg-[#111] border border-gold/30 rounded-3xl p-8 flex flex-col items-center justify-between backface-hidden shadow-2xl">
            <div class="text-gold text-5xl font-cinzel mt-6">19</div>
            <div class="w-40 h-52 border border-gold/20 p-2 rounded-2xl overflow-hidden shadow-inner bg-black">
               <img src="/images/bg1.jpg" class="w-full h-full object-cover rounded-xl grayscale filter contrast-125">
            </div>
            <p class="text-[10px] tracking-[0.4em] text-gold animate-pulse">TEKAN TOMBOL INI!!</p>
          </div>

          <div class="card-back absolute inset-0 bg-[#fffcf7] text-black rounded-3xl p-10 backface-hidden flex flex-col items-center justify-center text-center rotate-y-180 shadow-2xl border-4 border-gold/20">
            <h3 class="font-pinyon text-5xl text-[#881337] mb-8">Dear Siti...</h3>
            <p class="font-satoshi text-sm leading-relaxed mb-10 text-gray-700 italic border-y border-[#881337]/10 py-6">
              "Selamat ulang tahun ke-19. Semoga di usia yang semakin dewasa ini, kamu selalu dikelilingi oleh cinta dan kebahagiaan yang tak pernah habis. I love you!"
            </p>
            <button @click.stop="fireConfetti" class="px-8 py-3 bg-[#881337] text-white text-[10px] font-bold rounded-full uppercase tracking-widest hover:scale-105 transition active:scale-95 shadow-lg">
              SEND LOVE ❤️
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 text-center bg-black border-t border-white/5">
      <h2 class="font-cinzel text-xl text-gray-500 mb-8" data-aos="fade-up">KIRIM CHAT KE AKU YAH SAYANG,TEKAN TOMBOL INI</h2>
      <a 
        href="https://wa.me/6283102113849?text=Terima%20kasih%20untuk%20kejutan%20websitenya!%20❤️" 
        target="_blank"
        class="inline-flex items-center gap-3 px-10 py-5 bg-green-600 text-white rounded-full font-bold hover:bg-green-500 transition shadow-[0_0_20px_rgba(37,211,102,0.3)] group"
        data-aos="zoom-in"
      >
        <span class="text-xl">💌</span> 
        <span class="tracking-widest text-xs uppercase">Kirim Pesan ke Aku</span>
      </a>
    </section>

    <footer class="py-12 text-center text-[10px] text-gray-700 uppercase tracking-[0.5em] font-bold">
      Designed for Siti Melaroja • Jan 08, 2026
    </footer>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import confetti from 'canvas-confetti';
import AOS from 'aos';
import 'aos/dist/aos.css';

gsap.registerPlugin(ScrollTrigger);

// --- STATE ---
const isPlaying = ref(false);
const audioRef = ref(null);
const isCardOpen = ref(false);
const cardFront = ref(null);
const preloader = ref(null);
const isCandleLit = ref(true);

// --- LOGIC: AUDIO AUTO PLAY ---
const attemptPlay = () => {
  if (audioRef.value && !isPlaying.value) {
    audioRef.value.play()
      .then(() => {
        isPlaying.value = true;
        ['scroll', 'touchstart', 'click'].forEach(e => window.removeEventListener(e, attemptPlay));
      })
      .catch(() => console.log("Waiting for user interaction..."));
  }
};

const toggleAudio = () => {
  if (!audioRef.value) return;
  isPlaying.value ? audioRef.value.pause() : audioRef.value.play();
  isPlaying.value = !isPlaying.value;
};

// --- LOGIC: INTERACTIVE CAKE ---
const blowCandles = () => {
  if (!isCandleLit.value) return;
  isCandleLit.value = false;
  
  // Ledakan Confetti Besar
  const duration = 4000;
  const end = Date.now() + duration;
  (function frame() {
    confetti({ particleCount: 7, angle: 60, spread: 80, origin: { x: 0 }, colors: ['#bf953f', '#b76e79', '#ffffff'] });
    confetti({ particleCount: 7, angle: 120, spread: 80, origin: { x: 1 }, colors: ['#bf953f', '#b76e79', '#ffffff'] });
    if (Date.now() < end) requestAnimationFrame(frame);
  }());
};

const fireConfetti = () => {
  confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, scalar: 1.2 });
};

// --- LOGIC: 3D CARD TILT ---
const handleTilt = (e) => {
  if (isCardOpen.value) return;
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left; 
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  gsap.to(cardFront.value, {
    rotationX: ((y - centerY) / centerY) * -12,
    rotationY: ((x - centerX) / centerX) * 12,
    duration: 0.3
  });
};

const resetTilt = () => {
  if (!isCardOpen.value) gsap.to(cardFront.value, { rotationX: 0, rotationY: 0, duration: 0.8, ease: "elastic.out(1, 0.5)" });
};

const openCard = () => {
  isCardOpen.value = !isCardOpen.value;
  if (isCardOpen.value) gsap.to(cardFront.value, { rotationX: 0, rotationY: 0, duration: 0 });
};

// --- GSAP & INTRO ANIMATIONS ---
const initAnimations = () => {
  const tl = gsap.timeline();
  tl.to('.loader-text', { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" })
    .to(preloader.value, { opacity: 0, duration: 1, delay: 0.5, onComplete: () => preloader.value.style.display = 'none' })
    .to('.hero-title-line', { y: 0, duration: 1.5, stagger: 0.15, ease: 'power4.out' }, "-=0.3")
    .to('.hero-sub', { opacity: 1, duration: 1 }, '-=1')
    .to('.hero-desc', { opacity: 1, y: 0, duration: 1 }, '-=0.8');

  // Background Text Marquee
  gsap.to(".text-marquee-container", { xPercent: -50, ease: "none", duration: 15, repeat: -1 });

  // Gallery Marquee
  gsap.to(".marquee-gallery-content", { xPercent: -50, ease: "none", duration: 25, repeat: -1 });
};

const randomStar = () => ({
  top: Math.random() * 100 + '%',
  left: Math.random() * 100 + '%',
  width: Math.random() * 2 + 1 + 'px',
  height: Math.random() * 2 + 1 + 'px',
  animationDelay: Math.random() * 5 + 's',
  opacity: Math.random() * 0.5
});

// --- MOUNTED ---
onMounted(() => {
  AOS.init({ duration: 1200, once: false, mirror: true });
  initAnimations();
  ['scroll', 'touchstart', 'click'].forEach(e => window.addEventListener(e, attemptPlay, { once: true }));
});
</script>

<style>
/* 3D CORE */
.perspective-container { perspective: 1200px; }
.transform-style-3d { transform-style: preserve-3d; }
.backface-hidden { backface-visibility: hidden; }
.flipped { transform: rotateY(180deg); }
.rotate-y-180 { transform: rotateY(180deg); }

/* CAKE ANIMATIONS */
@keyframes flicker {
  0%, 100% { transform: translateX(-50%) scale(1); opacity: 1; }
  50% { transform: translateX(-50%) scale(0.9, 1.1); opacity: 0.8; }
}
.animate-flicker { animation: flicker 0.1s infinite alternate; }

@keyframes smoke {
  0% { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
  100% { opacity: 0; transform: translateX(-50%) translateY(-30px) scale(2); }
}
.animate-smoke { animation: smoke 1s forwards ease-out; }

@keyframes pop {
  0% { transform: scale(0.5); opacity: 0; }
  80% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}
.animate-pop { animation: pop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
</style>
