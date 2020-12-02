$(document).ready(function () {
    $('input.upload').on('change', (e) => {
        // FileList
        var fileList = $(this).files || e.target.files;
        console.log(fileList);

        // File
        var file = fileList[0];

        var reader = new FileReader();
        reader.onload = (e) => {
            $('img').attr('src', e.target.result);
        };
        reader.readAsDataURL(file);
    });

    $('button').on('click', () => {
            $('img').attr('src', '');
            console.log($('input.upload').val(null));
    })
});

function addFile(event) {

    var jqDisplay = $('div.myTarget');
    var reader = new FileReader();
    var selectedFile = event.target.files[0];

    reader.onload = function (event) {
        var imageSrc = event.target.result;
        console.log(imageSrc);
        jqDisplay.html('<img src="' + imageSrc + '" alt="uploaded Image">');
    };
    reader.readAsDataURL(selectedFile);
}
