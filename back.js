// Función para cambiar el idioma
function cambiarIdioma(idioma) {
    // Determinar la URL base actual
    var baseUrl = window.location.href.replace(window.location.pathname, '');
    
    // Obtener el nombre del archivo actual
    var currentPage = window.location.pathname.split('/').pop();
  
    // Redirigir solo si el usuario no está ya en la página correspondiente al idioma seleccionado
    if ((idioma === 'en' && currentPage !== 'index-en.html') || (idioma === 'es' && currentPage !== 'index-es.html')) {
      if (idioma === 'en') {
        window.location.href = baseUrl + '/index-en.html';
      } else if (idioma === 'es') {
        window.location.href = baseUrl + '/index-es.html';
      }
    }
  }
  
  // Event listener para detectar cambios en el menú de idiomas
  var languageSelect = document.getElementById('language-select');
  languageSelect.addEventListener('change', function() {
    var selectedLanguage = this.value;
    cambiarIdioma(selectedLanguage);
  });
  
  // Obtener el idioma actual de la página
  var idiomaActual = document.documentElement.lang;
  
  // Cambiar el valor del menú de idiomas al idioma actual
  languageSelect.value = idiomaActual;
  