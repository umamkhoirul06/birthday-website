function throwConfetti() {
    // Satu 'tembakan' confetti
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
    // Tambahan 'tembakan' agar lebih meriah
    confetti({
      particleCount: 60,
      spread: 120,
      origin: { x: 0.2, y: 0.6 }
    });
    confetti({
      particleCount: 60,
      spread: 120,
      origin: { x: 0.8, y: 0.6 }
    });
  }
  
  // Confetti otomatis saat load
  window.onload = () => {
    throwConfetti();
  };
  