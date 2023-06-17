// Funzione per gestire l'effetto di scorrimento delle immagini
function handleSlideshow() {
    const slideshows = document.getElementsByClassName('slideshow');
    for (let i = 0; i < slideshows.length; i++) {
      const images = slideshows[i].getElementsByTagName('img');
      let activeIndex = 0;
      
      // Funzione per mostrare l'immagine successiva
      function showNextImage() {
        images[activeIndex].classList.remove('active');
        activeIndex = (activeIndex + 1) % images.length;
        images[activeIndex].classList.add('active');
      }
      
      // Avvia il timer per scorrere le immagini ogni 5 secondi
      setInterval(showNextImage, 5000);
      
      // Mostra la prima immagine
      images[activeIndex].classList.add('active');
    }
  }
  
  // Chiama la funzione handleSlideshow quando la pagina è completamente caricata
  window.addEventListener('load', handleSlideshow);