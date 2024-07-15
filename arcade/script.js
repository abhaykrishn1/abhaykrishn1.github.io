function loadPortfolio(portfolioName) {
    const cachedContent = localStorage.getItem(`${portfolioName}-content`);
    const cachedStyles = localStorage.getItem(`${portfolioName}-styles`);
  
    if (cachedContent && cachedStyles) {
      document.getElementById('portfolio-content').innerHTML = cachedContent;
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `${portfolioName}/style.css`;
      document.head.appendChild(link);
    } else {
      fetch(`${portfolioName}/index.html`)
        .then(response => response.text())
        .then(html => {
          document.getElementById('portfolio-content').innerHTML = html;
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = `${portfolioName}/style.css`;
          document.head.appendChild(link);
  
          localStorage.setItem(`${portfolioName}-content`, html);
          localStorage.setItem(`${portfolioName}-styles`, link.href);
        })
        .catch(error => console.error(error));
    }
  }