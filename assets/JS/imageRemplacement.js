$("#file").change(function(){
    console.log('test');
    readURL(this);
});

function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.imageSet')
                .attr('src', e.target.result)
        };

        reader.readAsDataURL(input.files[0]);
    }
}

