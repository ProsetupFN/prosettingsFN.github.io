// Remove the custom cursor element if exists
const oldCursor = document.querySelector('.cursor');
if (oldCursor) oldCursor.remove();

// 1. Multi-color gradient that follows the mouse smoothly
const colors = [
  '#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff4500', '#1e90ff', '#ff69b4', '#32cd32'
];
let colorIndex = 0;

const gradientDiv = document.createElement('div');
gradientDiv.style.position = 'fixed';
gradientDiv.style.top = '0';
gradientDiv.style.left = '0';
gradientDiv.style.width = '150px';
gradientDiv.style.height = '150px';
gradientDiv.style.borderRadius = '50%';
gradientDiv.style.pointerEvents = 'none';
gradientDiv.style.zIndex = '9998';
gradientDiv.style.mixBlendMode = 'screen';
gradientDiv.style.transition = 'background 0.3s ease, transform 0.2s ease';
document.body.appendChild(gradientDiv);

window.addEventListener('mousemove', e => {
  gradientDiv.style.transform = `translate(${e.clientX - 75}px, ${e.clientY - 75}px)`;
  // Smoothly cycle colors
  gradientDiv.style.background = `radial-gradient(circle, ${colors[colorIndex]} 0%, transparent 70%)`;
});
setInterval(() => {
  colorIndex = (colorIndex + 1) % colors.length;
}, 1500);

// 2. Smooth scroll effect for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 3. Animate navigation links on hover with scaling and color glow
document.querySelectorAll('.navbar li a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transition = 'transform 0.4s ease, text-shadow 0.4s ease';
    link.style.transform = 'scale(1.2)';
    link.style.textShadow = '0 0 12px #00ffff, 0 0 20px #00ffff';
  });
  link.addEventListener('mouseleave', () => {
    link.style.transform = 'scale(1)';
    link.style.textShadow = 'none';
  });
});

// 4. Animate player cards on click: pulse and shadow
document.querySelectorAll('.player-grid li a').forEach(card => {
  card.addEventListener('click', () => {
    card.style.transition = 'transform 0.6s ease, box-shadow 0.6s ease';
    card.style.transform = 'scale(1.15)';
    card.style.boxShadow = '0 0 30px #00ffff, 0 0 50px #00ffff';
    setTimeout(() => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = 'none';
    }, 600);
  });
});

// 5. Toggle dark/light mode with smooth fade and better toggle button color
const toggleBtn = document.querySelector('.toggle-mode-btn');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  if (document.body.classList.contains('light-mode')) {
    toggleBtn.style.background = '#333';
    toggleBtn.style.color = '#0ff';
    toggleBtn.style.boxShadow = '0 0 12px #00ffff';
  } else {
    toggleBtn.style.background = '#00ffff';
    toggleBtn.style.color = '#111';
    toggleBtn.style.boxShadow = 'none';
  }
});

// 6. Animate footer links hover with glow effect
document.querySelectorAll('footer a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transition = 'text-shadow 0.4s ease';
    link.style.textShadow = '0 0 10px #00ffff, 0 0 20px #00ffff';
  });
  link.addEventListener('mouseleave', () => {
    link.style.textShadow = 'none';
  });
});

// 7. Animate disclosure section fade in on scroll
const disclosure = document.querySelector('.disclosure');
window.addEventListener('scroll', () => {
  if (!disclosure) return;
  const rect = disclosure.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    disclosure.style.transition = 'opacity 1.5s ease';
    disclosure.style.opacity = '1';
  }
});
if (disclosure) {
  disclosure.style.opacity = '0';
}

// 8. Animate main sections on scroll
const fadeElems = document.querySelectorAll('.featured h2, .guides h2, .player-grid li a, .guides article');
window.addEventListener('scroll', () => {
  fadeElems.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.transition = 'opacity 1.2s ease, transform 1.2s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    } else {
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';
    }
  });
});
fadeElems.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(40px)';
});

// 9. Animate header title flicker effect every 6 seconds
const headerTitle = document.querySelector('header h1');
if (headerTitle) {
  setInterval(() => {
    headerTitle.style.textShadow = '0 0 10px #00ffff, 0 0 20px #00ffff';
    setTimeout(() => {
      headerTitle.style.textShadow = '';
    }, 400);
  }, 6000);
}

// 10. Show a subtle glow on toggle button hover with color cycling
let glowColors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'];
let glowIndex = 0;
toggleBtn.addEventListener('mouseenter', () => {
  toggleBtn.style.transition = 'box-shadow 0.3s ease';
  toggleBtn.style.boxShadow = `0 0 15px ${glowColors[glowIndex]}`;
  glowIndex = (glowIndex + 1) % glowColors.length;
});
toggleBtn.addEventListener('mouseleave', () => {
  toggleBtn.style.boxShadow = 'none';
});

// 11. Animate table rows in player settings (if exists)
const playerSettingsTables = document.querySelectorAll('.player-settings table tr');
playerSettingsTables.forEach(row => {
  row.style.transition = 'background-color 0.4s ease';
  row.addEventListener('mouseenter', () => {
    row.style.backgroundColor = 'rgba(0, 255, 255, 0.15)';
  });
  row.addEventListener('mouseleave', () => {
    row.style.backgroundColor = 'transparent';
  });
});

// 12. Add bounce effect to footer links on click
document.querySelectorAll('footer a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    link.style.transition = 'transform 0.4s ease';
    link.style.transform = 'scale(1.3)';
    setTimeout(() => {
      link.style.transform = 'scale(1)';
      // You can replace below with actual navigation if needed
    }, 300);
  });
});

// 13. Animate hover glow on gear guide articles
document.querySelectorAll('.guides article').forEach(article => {
  article.addEventListener('mouseenter', () => {
    article.style.transition = 'box-shadow 0.5s ease';
    article.style.boxShadow = '0 0 25px #00ffff, 0 0 40px #00ffff';
  });
  article.addEventListener('mouseleave', () => {
    article.style.boxShadow = 'none';
  });
});

// 14. Animate nav bar background color on scroll
const navBar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navBar.style.backgroundColor = 'rgba(0,0,0,0.85)';
    navBar.style.backdropFilter = 'blur(5px)';
    navBar.style.transition = 'background-color 0.5s ease';
  } else {
    navBar.style.backgroundColor = 'transparent';
  }
});

// 15. Animate smooth fade in for footer on page load
const footer = document.querySelector('footer');
window.addEventListener('load', () => {
  footer.style.opacity = '0';
  footer.style.transition = 'opacity 1.8s ease';
  setTimeout(() => {
    footer.style.opacity = '1';
  }, 500);
});

// 16. Add keyboard shortcut (L) to toggle dark/light mode
window.addEventListener('keydown', e => {
  if (e.key.toLowerCase() === 'l') {
    toggleBtn.click();
  }
});

// 17. Animate player list fade in delay for each item
const players = document.querySelectorAll('.player-grid li a');
players.forEach((player, i) => {
  player.style.opacity = '0';
  player.style.transform = 'translateX(-40px)';
  setTimeout(() => {
    player.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    player.style.opacity = '1';
    player.style.transform = 'translateX(0)';
  }, i * 150);
});

// 18. Animate disclosure text letter spacing on hover
if (disclosure) {
  disclosure.addEventListener('mouseenter', () => {
    disclosure.style.transition = 'letter-spacing 0.5s ease';
    disclosure.style.letterSpacing = '0.2em';
  });
  disclosure.addEventListener('mouseleave', () => {
    disclosure.style.letterSpacing = 'normal';
  });
}

// 19. Animate guides section scaling on scroll into view
const guidesArticles = document.querySelectorAll('.guides article');
window.addEventListener('scroll', () => {
  guidesArticles.forEach(article => {
    const rect = article.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      article.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
      article.style.transform = 'scale(1)';
      article.style.opacity = '1';
    } else {
      article.style.transform = 'scale(0.95)';
      article.style.opacity = '0.6';
    }
  });
});

// 20. Animate player settings table appearance with slide up
const playerSettings = document.querySelector('.player-settings');
if (playerSettings) {
  playerSettings.style.opacity = '0';
  playerSettings.style.transform = 'translateY(50px)';
  window.addEventListener('load', () => {
    setTimeout(() => {
      playerSettings.style.transition = 'opacity 1s ease, transform 1s ease';
      playerSettings.style.opacity = '1';
      playerSettings.style.transform = 'translateY(0)';
    }, 700);
  });
}