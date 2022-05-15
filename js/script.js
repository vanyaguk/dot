const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    " вашей рекламе.",
    " вашем дизайне.",
    " вашей стратегии.",
    " вашем креативе."
];

const morphTime = 1;
const cooldownTime = 1;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();

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