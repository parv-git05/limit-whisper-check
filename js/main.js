
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
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('register-page').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
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
      document.getElementById('dashboard').style.display = 'none';
      document.getElementById('login-page').style.display = 'block';
    });
  }

  // Navigation between dashboard sections
  const navLinks = document.querySelectorAll('.sidebar-nav a');
  if (navLinks.length) {
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the target section
        const targetSectionId = this.getAttribute('data-section');
        if (!targetSectionId) return;
        
        // Hide all sections
        document.querySelectorAll('.dashboard-section').forEach(section => {
          section.style.display = 'none';
        });
        
        // Show target section
        document.getElementById(targetSectionId).style.display = 'block';
        
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
});
