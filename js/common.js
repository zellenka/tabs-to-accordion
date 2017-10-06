$(function() {
    



    $('#tabs').children('li').first().children('a').addClass('active-tab').next().addClass('is-open').show();

    $('#tabs').on('click', 'li > a', function() {

        if (!$(this).hasClass('active-tab')) {

            $('#tabs .is-open').removeClass('is-open').hide();
            $(this).next().toggleClass('is-open').toggle();

            $('#tabs').find('.active-tab').removeClass('active-tab');
            $(this).addClass('active-tab');
        } else {
            $('#tabs .is-open').removeClass('is-open').hide();
            $(this).removeClass('active-tab');
        }
    });

        var url = window.location.href;
        if(url === 'https://zellenka.github.io/tabs-to-accordion/'){
            history.pushState("", "", "https://zellenka.github.io/tabs-to-accordion//#General");
        }
        else if (window.location.hash.length > 0) {
        $('a[href="' + window.location.hash + '"]').click();
    };


});
