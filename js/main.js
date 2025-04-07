
// Main JavaScript for Kisan Direct Market

document.addEventListener('DOMContentLoaded', function() {
  // Navigation between auth pages
  window.switchToRegister = function() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('register-page').style.display = 'block';
  };

  window.switchToLogin = function() {
    document.getElementById('register-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'block';
  };

  // Form submission handlers
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      
      // In a real app, you would perform authentication here
      // This is just a demo that shows the dashboard
      handleSuccessfulLogin('Demo User');
    });
  }

  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('register-name').value;
      const email = document.getElementById('register-email').value;
      const password = document.getElementById('register-password').value;
      const userType = document.getElementById('user-type').value;
      
      // In a real app, you would perform registration here
      // This is just a demo that shows the dashboard
      handleSuccessfulLogin(name);
    });
  }

  function handleSuccessfulLogin(username) {
    // Update username display
    const usernameDisplay = document.getElementById('username-display');
    if (usernameDisplay) {
      usernameDisplay.textContent = username;
    }
    
    // Hide auth pages and show dashboard
    const loginPage = document.getElementById('login-page');
    const registerPage = document.getElementById('register-page');
    const dashboard = document.getElementById('dashboard');
    
    if (loginPage) loginPage.style.display = 'none';
    if (registerPage) registerPage.style.display = 'none';
    if (dashboard) dashboard.style.display = 'block';
  }

  // Sidebar toggle for mobile
  const sidebarToggle = document.getElementById('sidebar-toggle');
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('active');
    });
  }

  // Logout button handler
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      window.location.href = "index.html";
    });
  }

  // Navigation between dashboard sections
  const navLinks = document.querySelectorAll('.sidebar-nav a');
  if (navLinks.length) {
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // If it's pointing to another page with a file extension, let it navigate
        if (this.href.includes('.html') && !this.href.includes('#')) {
          return;
        }
        
        e.preventDefault();
        
        // Get the target section
        const targetSectionId = this.getAttribute('data-section');
        if (!targetSectionId) return;
        
        // Hide all sections
        document.querySelectorAll('.dashboard-section').forEach(section => {
          section.style.display = 'none';
        });
        
        // Show target section
        const targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
          targetSection.style.display = 'block';
        }
        
        // Update active state in sidebar
        document.querySelectorAll('.sidebar-nav li').forEach(navItem => {
          navItem.classList.remove('active');
        });
        this.parentElement.classList.add('active');
        
        // On mobile, close sidebar after navigation
        if (window.innerWidth < 992) {
          document.getElementById('sidebar').classList.remove('active');
        }
      });
    });
  }

  // Weather specific JavaScript functionality
  // This would integrate with an actual weather API in a real application
  const weatherSearchInput = document.querySelector('.weather-search-container input');
  const weatherSearchButton = document.querySelector('.weather-search-container button');
  
  if (weatherSearchInput && weatherSearchButton) {
    weatherSearchButton.addEventListener('click', function() {
      const location = weatherSearchInput.value;
      if (location) {
        // Update the location display (in a real app, this would fetch data from an API)
        document.querySelector('.current-location span').textContent = location;
        
        // Show a notification that would typically happen after API call
        alert(`Weather data for ${location} would be loaded from an API in a real application.`);
      }
    });
    
    // Allow pressing enter to search
    weatherSearchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        weatherSearchButton.click();
      }
    });
  }
});
