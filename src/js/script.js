
/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 400,
      "density": {
        "enable": true,
        "value_area": 2000
      }
    },
    "color": {
      "value": ["#10b981", "#06b6d4", "#8b5cf6", "#f59e0b", "#ef4444", "#3b82f6"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 6
      }
    },
    "opacity": {
      "value": 0.8,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "opacity_min": 0.3,
        "sync": false
      }
    },
    "size": {
      "value": 1.5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 3,
        "size_min": 0.5,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 80,
      "color": "#ffffff",
      "opacity": 0.6,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": true,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": ["grab", "bubble"]
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 120,
        "line_linked": {
          "opacity": 1,
          "color": "#10b981",
          "width": 2
        }
      },
      "bubble": {
        "distance": 100,
        "size": 4,
        "duration": 0.3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 80,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 8
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// Enhanced DNA-style particle animation with color cycling
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.querySelector('#particles-js canvas');
  if (canvas) {
    let mouseX = 0;
    let mouseY = 0;
    let colorIndex = 0;
    
    // DNA color palette
    const dnaColors = [
      'rgba(16, 185, 129, 0.1)', // emerald
      'rgba(6, 182, 212, 0.1)',  // cyan
      'rgba(139, 92, 246, 0.1)', // violet
      'rgba(245, 158, 11, 0.1)', // amber
      'rgba(239, 68, 68, 0.1)',  // red
      'rgba(59, 130, 246, 0.1)'  // blue
    ];
    
    // Animated background color cycling
    function cycleBackgroundColors() {
      const particlesContainer = document.getElementById('particles-js');
      if (particlesContainer) {
        colorIndex = (colorIndex + 1) % dnaColors.length;
        particlesContainer.style.background = `
          radial-gradient(circle at 20% 20%, ${dnaColors[colorIndex]} 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, ${dnaColors[(colorIndex + 2) % dnaColors.length]} 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, ${dnaColors[(colorIndex + 4) % dnaColors.length]} 0%, transparent 50%),
          linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(2, 6, 23, 0.98) 100%)
        `;
      }
    }
    
    // Start color cycling
    setInterval(cycleBackgroundColors, 3000);
    cycleBackgroundColors(); // Initial call
    
    // Enhanced mouse interaction
    canvas.addEventListener('mousemove', function(e) {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      
      // Create DNA helix effect around mouse
      canvas.style.cursor = 'none';
      
      // Add glow effect at mouse position
      const glowEffect = document.createElement('div');
      glowEffect.style.position = 'absolute';
      glowEffect.style.left = (e.clientX - 10) + 'px';
      glowEffect.style.top = (e.clientY - 10) + 'px';
      glowEffect.style.width = '20px';
      glowEffect.style.height = '20px';
      glowEffect.style.background = 'radial-gradient(circle, rgba(16, 185, 129, 0.8) 0%, transparent 70%)';
      glowEffect.style.borderRadius = '50%';
      glowEffect.style.pointerEvents = 'none';
      glowEffect.style.zIndex = '1000';
      glowEffect.style.animation = 'pulse 0.5s ease-out forwards';
      
      document.body.appendChild(glowEffect);
      
      setTimeout(() => {
        if (glowEffect.parentNode) {
          glowEffect.parentNode.removeChild(glowEffect);
        }
      }, 500);
    });
    
    canvas.addEventListener('mouseleave', function() {
      canvas.style.cursor = 'default';
    });
    
    // Add pulsing animation styles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0% {
          transform: scale(0);
          opacity: 0.8;
        }
        100% {
          transform: scale(3);
          opacity: 0;
        }
      }
      
      #particles-js {
        transition: background 2s ease-in-out;
      }
      
      #particles-js canvas {
        filter: brightness(1.1) contrast(1.1);
      }
    `;
    document.head.appendChild(style);
  }
});
