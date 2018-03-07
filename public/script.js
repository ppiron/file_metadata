const selectFile = document.querySelector('#fileInput');
let url = "http://localhost:3000/";
let formData = new FormData();

const displayFileData = (event) => {

    const path = event.target.value.split('\\')[event.target.value.split('\\').length - 1];
    // window.history.pushState(null, null, path);

    formData.append('somefile', event.target.files[0]);
    fetch('/', {
        method: 'post',
        body: formData,
        //redirect: 'follow'
    }).then(function(response) {
        window.location.assign(path);
    })
}
selectFile.addEventListener('change', displayFileData);