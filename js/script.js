let faviconElem = document.getElementById('favicon');
    faviconElem.setAttribute('href',`../Asset/favicon_${Math.floor(3*Math.random())+1}.png`);

;(function ( $ ) {
    //Make your content a heroe
    $.fn.transformHeroes = function() {
        //Variables
        var perspective = '500px',
        delta = 20,
        width = this.width(),
        height = this.height(),
        midWidth = width / 2,
        midHeight = height / 2;
        //Events
        this.on({
            mousemove: function(e) {
                var pos = $(this).offset(),
                cursPosX = e.pageX - pos.left,
                cursPosY = e.pageY - pos.top,
                cursCenterX = midWidth - cursPosX,
                cursCenterY = midHeight - cursPosY;
  
                $(this).css('transform','perspective(' + perspective + ') rotateX('+ (cursCenterY / delta) +'deg) rotateY('+ -(cursCenterX / delta) +'deg)');
                $(this).removeClass('is-out');
            },
            mouseleave: function() {
                $(this).addClass('is-out');
            }
        });
        //Return
        return this;
    };
  }( jQuery ));
  
  //Set plugin on cards
  $('.card').transformHeroes();

$('#forwardBut').on('mouseleave', function(e) {
    const bounds = this.getBoundingClientRect();
  
  
    $(this).css({
      transform: 'translate3d(0px, 0px, 0px)'
    });
  
    });
  
  $('#forwardBut').on('mousemove', function(e) {
    const bounds = this.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height;
  
    const deltaX = Math.floor((centerX - e.clientX)) * 0.222;
    const deltaY = Math.floor((centerY - e.clientY)) * 0.222;
  
  
    $(this).css({
      transform: 'translate3d('+ deltaX * 0.5 +'px, '+ deltaY * 0.5 +'px, 0px)'
    });
  });


  document.addEventListener('mousemove', showImgContent);

  function menushown() {
      document.getElementById("menu").style.width = "20%";
      document.getElementById("menuInner").style.opacity = "1";
      document.getElementById("container").style.paddingLeft = "20%";
    }
    function menushown2() {
      document.getElementById("menu").style.width = "100%";
      document.getElementById("menuInner").style.opacity = "1";
    }
    
    function menuhide() {
      document.getElementById("menu").style.width = "0%";
      document.getElementById("menuInner").style.opacity = "0";
      document.getElementById("container").style.maxWidth = "100%";
      document.getElementById("container").style.paddingLeft = "0%";
    } 