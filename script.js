/**
 * Loads the specified portfolio by checking for cached content and styles in localStorage.
 * If cached data is available, it uses that; otherwise, it fetches the data from the server.
 *
 * @param {string} portfolioName - The name of the portfolio to load.
 */
function loadPortfolio(portfolioName) {
  // Retrieve cached content and styles from localStorage
  const cachedContent = localStorage.getItem(`${portfolioName}-content`);
  const cachedStyles = localStorage.getItem(`${portfolioName}-styles`);

  // Check if both cached content and styles are available
  if (cachedContent && cachedStyles) {
      // Load cached content into the portfolio content area
      document.getElementById('portfolio-content').innerHTML = cachedContent;

      // Create a link element for the cached stylesheet and append it to the document head
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `${portfolioName}/style.css`;
      document.head.appendChild(link);

      // Close the navigation menu
      closeNav(); 
  } else {
      // If no cached data, fetch the portfolio content from the server
      fetch(`${portfolioName}/index.html`)
          .then(response => response.text()) // Convert the response to text
          .then(html => {
              // Load the fetched HTML into the portfolio content area
              document.getElementById('portfolio-content').innerHTML = html;

              // Create a link element for the stylesheet and append it to the document head
              const link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = `${portfolioName}/style.css`;
              document.head.appendChild(link);

              // Cache the fetched content and stylesheet URL in localStorage
              localStorage.setItem(`${portfolioName}-content`, html);
              localStorage.setItem(`${portfolioName}-styles`, link.href);

              // Close the navigation menu
              closeNav(); 
          })
          .catch(error => console.error(error)); // Log any errors to the console
  }
}

/**
 * Toggles the visibility of the navigation menu and the hamburger icon.
 */
function toggleNav() {
  // Get the navbar and hamburger elements
  const navbar = document.getElementById('navbar');
  const hamburger = document.querySelector('.hamburger');

  // Toggle the 'active' class on both elements to show/hide the menu
  navbar.classList.toggle('active');
  hamburger.classList.toggle('active');
}

/**
 * Closes the navigation menu and resets the hamburger icon state.
 */
function closeNav() {
  // Get the navbar and hamburger elements
  const navbar = document.getElementById('navbar');
  const hamburger = document.querySelector('.hamburger');

  // Remove the 'active' class from both elements to hide the menu
  navbar.classList.remove('active');
  hamburger.classList.remove('active');
}

// Event listener to update the progress bar based on scroll position
window.addEventListener('scroll', function() {
  // Get the current vertical scroll position using scrollY
  var scrollTop = window.scrollY || document.documentElement.scrollTop;

  // Calculate the total height of the document minus the viewport height
  var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  // Get the progress bar element
  var progressBar = document.getElementById('progress-bar');

  // Calculate the scroll progress as a percentage
  var progress = (scrollTop / scrollHeight) * 100;

  // Update the width of the progress bar to reflect the scroll progress
  progressBar.style.width = progress + '%';
});
