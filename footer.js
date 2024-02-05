document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    // const content = document.querySelector(".content");
    const footer = document.querySelector(".footer");
  
    const adjustFooter = () => {
      const contentHeight = content.offsetHeight;
      const windowHeight = window.innerHeight;
      
      if (contentHeight < windowHeight) {
        const footerHeight = footer.offsetHeight;
        content.style.minHeight = `calc(100vh - ${footerHeight}px)`;
      }
    };
  
    // Call adjustFooter initially and on window resize
    adjustFooter();
    window.addEventListener("resize", adjustFooter);
  });
  