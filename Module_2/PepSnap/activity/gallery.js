let db;
let dbOpenRequest = indexedDB.open("Gallery", 1);
dbOpenRequest.onupgradeneeded = function (e) {
    db = e.target.result;
    db.createObjectStore("Media", { keyPath: "mid" }); // table will only be create when db is create first time
};
dbOpenRequest.onsuccess = function (e) {
    db = e.target.result;
    fetchMedia();
};
dbOpenRequest.onerror = function (e) {
    alert("Inside on error !!");
};


function fetchMedia() {
    let txnObject = db.transaction("Media", "readonly");
    let mediaTable = txnObject.objectStore("Media");
    let cursorObject = mediaTable.openCursor(); // to iterate on all the rows / tuples
    cursorObject.onsuccess = function (e) {
        let cursor = cursorObject.result;
        if (cursor) {
            let mediaObj = cursor.value;
            if (mediaObj.type == "photo") {
                appendPhoto(mediaObj);
            } else {
                appendVideo(mediaObj);
            }
            cursor.continue();
        }
    };
}



function appendPhoto(mediaObj) {
    let mediaDiv = document.createElement("div");
    mediaDiv.classList.add("media-div");
    mediaDiv.innerHTML = `<img class="media-img" src=${mediaObj.url} alt="">
    <div class="media-buttons">
        <div class="download-media">Download</div>
        <div class="delete-media">Delete</div>
    </div>`;
    document.querySelector(".gallery").append(mediaDiv);
    //   let media = document.querySelector(".download-media");

    mediaDiv.querySelector(".download-media").addEventListener("click", downloadMedia);
    mediaDiv.querySelector(".delete-media").addEventListener("click", deleteMedia);
    function downloadMedia() {
        //   console.log(e);
        let aTag = document.createElement("a");
        if (mediaObj.type == "photo") {
            aTag.href = mediaObj.url;
            aTag.download = `image${mediaObj.mid}.png`;
        } else {


            aTag.href = URL.createObjectURL(mediaObj.url);
            aTag.download = `video${mediaObj.mid}.mp4`;

        }
        aTag.click();
    }
    function deleteMedia() {
        let transaction = db.transaction("Media", "readwrite");
        let objectStore = transaction.objectStore("Media");
        mediaDiv.remove();
        objectStore.delete(mediaObj.mid);

}


function appendVideo(mediaObj) {
    let mediaDiv = document.createElement("div");
    mediaDiv.classList.add("media-div");
    mediaDiv.innerHTML = `<video class="media-video" controls></video>
    <div class="media-buttons">
        <div class="download-media">Download</div>
        <div class="delete-media">Delete</div>
    </div>`;
    mediaDiv.querySelector("video").src = URL.createObjectURL(mediaObj.url);
    document.querySelector(".gallery").append(mediaDiv);
}
}