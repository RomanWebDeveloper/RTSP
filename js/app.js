  customSelect('select');

  /* Menu*/
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })

  /* Number Counter on Scroll */
  let nums = document.querySelectorAll(".trust__item .trust__number");
    let section = document.querySelector(".trust");
    let started = false; // Function Started ? No

    window.onscroll = function () {
      if (window.scrollY >= section.offsetTop) {
        if (!started) {
          nums.forEach((num) => startCount(num));
        }
        started = true;
      }
    };

    function startCount(el) {
      let goal = el.dataset.goal;
      let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
          clearInterval(count);
        }
      }, 3000 / goal);
    }

    /* Slick */
    $(document).ready(function(){
      $('.requirements__slider').slick({
        arrows:false,
        dots:false,
        slidesToShow:1,
        autoplay:true,
        speed:500
      });
    });

    /* Accordion */
    var acc = document.getElementsByClassName("questions__accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }

    /* Modal */
    document.addEventListener('DOMContentLoaded', function() {

       var modalButtons = document.querySelectorAll('.js-open-modal'),
           overlay      = document.querySelector('.js-overlay-modal'),
           closeButtons = document.querySelectorAll('.js-modal-close');


       modalButtons.forEach(function(item){

          item.addEventListener('click', function(e) {

             e.preventDefault();

             var modalId = this.getAttribute('data-modal'),
                 modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

             modalElem.classList.add('active');
             overlay.classList.add('active');
          });

       });

       closeButtons.forEach(function(item){

          item.addEventListener('click', function(e) {
             var parentModal = this.closest('.modal');

             parentModal.classList.remove('active');
             overlay.classList.remove('active');
          });

       });

        document.body.addEventListener('keyup', function (e) {
            var key = e.keyCode;

            if (key == 27) {

                document.querySelector('.modal.active').classList.remove('active');
                document.querySelector('.overlay').classList.remove('active');
            };
        }, false);

        overlay.addEventListener('click', function() {
            document.querySelector('.modal.active').classList.remove('active');
            this.classList.remove('active');
        });
    })