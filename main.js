let deferredPrompt;
  const installBtn = document.getElementById('installBtn');
  
  window.addEventListener('beforeinstallprompt', (e) => {
    console.log('Evento beforeinstallprompt disparado');
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = 'block'; // Mostrar el botón de instalación
  
    installBtn.addEventListener('click', () => {
      installBtn.style.display = 'none';
      deferredPrompt.prompt(); // Mostrar el prompt de instalación
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Usuario aceptó la instalación.');
        } else {
          console.log('Usuario rechazó la instalación.');
        }
        deferredPrompt = null;
      });
    });
  });
  

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registrado:', registration);
        })
        .catch((error) => {
          console.log('Service Worker falló al registrarse:', error);
        });
    });
  }
  
  