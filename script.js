const uploadForm = document.getElementById("uploadForm");

uploadForm.addEventListener('submit', function(e){
    e.preventDefault();

    uploadFile(this);
});

const uploadFile = async data => {
    const formData = new FormData();

    const files = data.querySelector('input[type="file"]').files;

    for (let i=0; i<files.length; i++){
        form.append(`fileInput_${i}`, files[i]);
    }

    const options = {
        method: "POST",
        body: formData
    };

    const uploadPromise = await fetch("https://httpbin.org/post", options);

    const uploadRes = await uploadPromise.json();
    console.log(uploadRes.files);
}