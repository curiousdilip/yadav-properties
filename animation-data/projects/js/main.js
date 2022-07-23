(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }
  });

  /**
   * Porfolio isotope and filter
  
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container01');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item01',
      });

      let portfolioFilters = select('#portfolio-flters01 li', true);

      on('click', '#portfolio-flters01 li', function(e) {
        //alert('Test');
        //$(".filter-panasonic").css("display", "block");
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          //alert(el);
          el.classList.remove('filter-active');
          //el.classList.remove('pana');
          //$(".filter-panasonic").css("display", "block");
        });
        $(".pana").css("display", "block");
        this.classList.add('filter-active');
        
        //alert(this);

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }
  });  */
  
    window.addEventListener('load', () => {
    let workfolioContainer = select('.workfolio-container');
    if (workfolioContainer) {
      let workfolioIsotope = new Isotope(workfolioContainer, {
        itemSelector: '.workfolio-item',
      });

      let workfolioFilters = select('#workfolio-flters li', true);

      on('click', '#workfolio-flters li', function(e) {
        e.preventDefault();
        workfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        workfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        workfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }
  });


})()