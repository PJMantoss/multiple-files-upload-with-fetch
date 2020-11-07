const uploadForm = document.getElementById("uploadForm");

uploadForm.addEventListener('submit', function(e){
    e.preventDefault();

    uploadFile(this);
});

const uploadFile = () => {}