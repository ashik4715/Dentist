// card hover css change
// jQuery('#cardCss2').on('mouseover', function() {
//     $('.card-counter').css('color', '#FF6285');
//     $('.cardCss').css('color', '#FF6285');
// });
// jQuery('#cardCss2').on('mouseout', function() {
//     $('.card-counter').css('color', '#1A3C86');
//     $('.cardCss').css('color', '#1A3C86');
//   })
// card hover css change

// Card Paginate

// end card paginate


// Project Counter
var a = 0;
$(window).scroll(function() {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter').each(function() {
            var $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 2500,
                easing: 'swing',
                step: function() {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
        a = 1; // 
    }
});

// end Project Counter

// telephone addon
$("#phoneNumber").intlTelInput({
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js"
});
// end telephone addon

// Contact form Validation
(function() {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()
// end Validation