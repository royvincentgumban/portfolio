window.addEventListener('load', () => {

  const startTime = performance.now();

  const removeLoader = () => {
    const endTime = performance.now();
    const loadDuration = endTime - startTime;
    const minLoaderDuration = 1000;

    const duration = Math.max(minLoaderDuration, loadDuration);

    setTimeout(() => {
      document.body.classList.add('loaded');
      document.body.classList.remove('overflow-hidden');

    }, duration);
  };
  
  document.body.classList.add('overflow-hidden');
  
  removeLoader();
});

// display menu
const toggleShow = document.getElementById("showToggle");
const toggleClose = document.getElementById("closeToggle");
const menuTitle = document.getElementById("menu-title");
const menu = document.getElementById("menu-show");

toggleShow.addEventListener("click", function() {
    menu.classList.add('show-menu');
    menuTitle.innerHTML = "CLOSE";
    toggleClose.classList.remove('hidden')
});

toggleClose.addEventListener("click", function() {
    menu.classList.remove('show-menu');
    menuTitle.innerHTML = "MENU";
    toggleClose.classList.add('hidden')
});

// filtering projects
document.addEventListener('DOMContentLoaded', function() {
  const filterItems = document.querySelectorAll('.filter-item');
  const projectContainers = document.querySelectorAll('.projects-container');

  const defaultFilter = 'all';
  filterItems.forEach(function(filterItem) {
      filterItem.classList.remove('active');
  });
  document.querySelector(`.filter-item[data-type="${defaultFilter}"]`).classList.add('active');
  projectContainers.forEach(function(container) {
      container.classList.remove('hidden');
      container.classList.add('active');
  });

  filterItems.forEach(function(filterItem) {
    filterItem.addEventListener('click', function() {
        // Remove 'active' class from all filter items and hide all project containers
        filterItems.forEach(function(item) {
            item.classList.remove('active');
        });
        projectContainers.forEach(function(container) {
            container.classList.remove('active');
            container.classList.add('hidden');
        });

        // Add 'active' class to the clicked filter item
        filterItem.classList.add('active');

        // Show the corresponding project containers
        const filterType = filterItem.getAttribute('data-type');
        if (filterType === 'all') {
            projectContainers.forEach(function(container) {
                container.classList.remove('hidden');
                container.classList.add('active');
            });
        } else {
            const filteredContainer = document.querySelector(`.${filterType}-container`);
            if (filteredContainer) {
                filteredContainer.classList.remove('hidden');
                filteredContainer.classList.add('active');
            }
        }
    });
  });
});


// show menu on scroll
const toggle = document.getElementById("showToggle");
const titleMenu = document.getElementById("menu-title");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const screenWidth = window.innerWidth;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 10 && screenWidth > 568 && titleMenu.innerHTML.trim() !== "CLOSE") {
    titleMenu.classList.add('fadeout');
  } else {
      titleMenu.classList.remove('fadeout');
  }
  
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function bottomFunction() {
  document.body.scrollTop = document.body.scrollHeight;
  document.documentElement.scrollTop = document.documentElement.scrollHeight;
}

const scrollBottom = document.getElementById("scrollBottom");
scrollBottom.addEventListener("click", () => {
  bottomFunction();
});



// close menu
const clickedLI = document.querySelectorAll(".clicked");
clickedLI.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const href = this.querySelector('a').getAttribute('href');

        menu.classList.remove('show-menu');
        menuTitle.innerHTML = "MENU";
        toggleClose.classList.add('hidden')

        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});



// cursor and hover div
const cursor = document.querySelector('.cursor');
const h1Elements = document.querySelectorAll('h1');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

h1Elements.forEach(h1 => {
    h1.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(6)';
    });

    h1.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
});

// scroll animation
const scaleUpContainer = document.querySelector('.scale-up-container');
const scaleUpSection = document.querySelector('#scale-up');


window.addEventListener('scroll', () => {
  scaleUp();
})

function scaleUp() {
  let { bottom } = scaleUpSection.getBoundingClientRect();
  bottom = Math.round(bottom);
  
  let scale = 1 - ((bottom - window.innerHeight) * 0.0005);
  scale = Math.max(0.2, Math.min(scale, 1));
  scaleUpContainer.style.transform = `scale(${scale})`;

}

const scaleDownContainer = document.querySelector('.scale-down-container');
const scaleDownSection = document.querySelector('#scale-down');

window.addEventListener('scroll', () => {
  scaleDown();
})

function scaleDown() {
  let { bottom } = scaleDownSection.getBoundingClientRect();

  let reachBottom = bottom - window.innerHeight;

  if (reachBottom <= 0) {
    let scale = 1 - Math.abs(reachBottom) / window.innerHeight * .4 ;
    scaleDownContainer.style.transform = `scale(${scale})`;
  } else {
    scaleDownContainer.style.transform = 'scale(1)';
  }
  
}


document.addEventListener('DOMContentLoaded', function() {
  const targetDivs = document.querySelectorAll('.target-div');
  const slides = document.querySelectorAll('.slide');

  targetDivs.forEach(function(targetDiv, index) {
      targetDiv.addEventListener('click', function() {
          // Remove 'active' class from all slides and targetDivs
          slides.forEach(function(slide) {
              slide.classList.remove('active');
          });
          targetDivs.forEach(function(td) {
              td.classList.remove('active');
          });

          // Add 'active' class to the clicked slide and targetDiv
          slides[index].classList.add('active');
          targetDiv.classList.add('active');
      });
  });
});


// parallax
//const headerContent = document.getElementById('header-content');
//window.addEventListener('scroll', () => {
//    const value = window.scrollY;
//    headerContent.style.left = value * -2 + 'px';
//    headerContent.style.transition = "all 0.3s ease"
//});







