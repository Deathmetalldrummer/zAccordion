$(document).ready(function () {
    $('#iphone-color').click(function () {
        if ($('#iphone').hasClass('iphone-black')) {
            $('#iphone').addClass('iphone-white').removeClass('iphone-black');
        } else {
            $('#iphone').addClass('iphone-black').removeClass('iphone-white');
        }
        return false;
    });
});