/**
 * ============================================
 * PORTAFOLIO KEVIN MUÑOZ - JAVASCRIPT
 * ============================================
 * Funcionalidades:
 * - Cambio de tema (claro/oscuro)
 * - Video de fondo dinámico
 * - Envío de formulario de contacto via EmailJS
 * ============================================
 */

// ============================================
// CONSTANTES Y CONFIGURACIÓN
// ============================================
const CONFIG = {
  emailJS: {
    publicKey: 'e2Sl3H41c1FHJlRF7',
    serviceId: 'service_6d0nxod',
    templateId: 'template_qgx1kbb'
  },
  videos: {
    dark: './recurses/fondo_black.mp4',
    light: './recurses/fondo_white.mp4'
  }
};


// ============================================
// ELEMENTOS DEL DOM
// ============================================
const DOM = {
  themeToggle: document.getElementById('icon-theme'),
  video: document.getElementById('video_fondo'),
  videoSource: document.getElementById('source_video'),
  contactForm: document.querySelector('.form')
};


// ============================================
// GESTIÓN DE TEMAS
// ============================================
const ThemeManager = {
  currentTheme: 'dark',

  /**
   * Alterna entre tema claro y oscuro
   */
  toggle() {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.apply();
    VideoManager.changeBackground(this.currentTheme);
  },

  /**
   * Aplica el tema actual
   */
  apply() {
    const root = document.documentElement;

    // Aplicar o quitar clase theme-light
    if (this.currentTheme === 'light') {
      root.classList.add('theme-light');
    } else {
      root.classList.remove('theme-light');
    }

    // Log para debugging
    console.log(`Tema cambiado a: ${this.currentTheme}`);
  },

  /**
   * Inicializa el tema desde localStorage o usa el predeterminado
   */
  init() {
    const savedTheme = localStorage.getItem('portfolioTheme') || 'dark';
    this.currentTheme = savedTheme;
    this.apply();
  },

  /**
   * Guarda el tema actual en localStorage
   */
  save() {
    localStorage.setItem('portfolioTheme', this.currentTheme);
  }
};


// ============================================
// GESTIÓN DE VIDEO DE FONDO
// ============================================
const VideoManager = {
  /**
   * Cambia el video de fondo según el tema
   * @param {string} theme - 'dark' o 'light'
   */
  changeBackground(theme) {
    if (!DOM.video || !DOM.videoSource) {
      console.warn('Elementos de video no encontrados');
      return;
    }

    try {
      const videoSrc = theme === 'dark' ? CONFIG.videos.dark : CONFIG.videos.light;
      DOM.videoSource.src = videoSrc;
      DOM.video.load();
      DOM.video.play().catch(err => {
        console.warn('No se pudo reproducir el video:', err);
      });
    } catch (error) {
      console.error('Error al cambiar el video de fondo:', error);
    }
  }
};


// ============================================
// GESTIÓN DEL FORMULARIO DE CONTACTO
// ============================================
const ContactFormManager = {
  /**
   * Inicializa EmailJS
   */
  initEmailJS() {
    emailjs.init(CONFIG.emailJS.publicKey);
  },

  /**
   * Maneja el envío del formulario
   * @param {Event} event - Evento del formulario
   */
  async handleSubmit(event) {
    event.preventDefault();
    
    const formData = event.target;
    const submitButton = formData.querySelector('.form__submit');
    
    // Deshabilitar botón durante el envío
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Enviando...';
    }

    try {
      await emailjs.sendForm(
        CONFIG.emailJS.serviceId,
        CONFIG.emailJS.templateId,
        formData
      );
      
      alert('¡Correo enviado con éxito!');
      formData.reset();
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un error al enviar el correo. Por favor, intenta nuevamente.');
    } finally {
      // Rehabilitar botón
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Enviar mensaje';
      }
    }
  },

  /**
   * Configura el listener del formulario
   */
  init() {
    if (DOM.contactForm) {
      DOM.contactForm.addEventListener('submit', this.handleSubmit.bind(this));
    }
  }
};


// ============================================
// EVENT LISTENERS
// ============================================
const EventHandlers = {
  /**
   * Configura todos los event listeners
   */
  init() {
    // Toggle de tema
    if (DOM.themeToggle) {
      DOM.themeToggle.addEventListener('click', () => {
        ThemeManager.toggle();
        ThemeManager.save();
      });
    }
  }
};


// ============================================
// INICIALIZACIÓN DE LA APLICACIÓN
// ============================================
const App = {
  /**
   * Inicializa todas las funcionalidades
   */
  init() {
    // Inicializar tema
    ThemeManager.init();
    
    // Inicializar video de fondo
    VideoManager.changeBackground(ThemeManager.currentTheme);
    
    // Inicializar EmailJS y formulario
    ContactFormManager.initEmailJS();
    ContactFormManager.init();
    
    // Configurar event listeners
    EventHandlers.init();
    
    console.log('Portafolio inicializado correctamente');
  }
};


// ============================================
// EJECUCIÓN AL CARGAR LA PÁGINA
// ============================================
// Esperar a que el DOM esté completamente cargado
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  // El DOM ya está listo
  App.init();
}


// Alternativa con window.onload (espera a que todos los recursos estén cargados)
window.addEventListener('load', () => {
  console.log('Página completamente cargada');
});