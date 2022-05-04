function ready() {
    if (document.readyState == 'complete') {
        Webcam.set({
            width: 300,
            height: 220,
            image_format: 'jpeg',
            jpeg_quality: 90,
           // facingMode: "user"
        });
         Webcam.set('constraints',{
            facingMode: "environment"
        });
        try {
            Webcam.attach('#camera');
        } catch (e) {
            alert(e);
        }
    }
}

function take_snapshot() {
    // take snapshot and get image data
    var data = null;
    Webcam.snap(function (data_uri) {

        data = data_uri;
    });
    return data;
}

function change_camera() {
    // take snapshot and get image data
  
   // Webcam.reset();
    Webcam.set({
        width: 300,
        height: 220,
        //			dest_width: 300,
        //			dest_height: 220
        image_format: 'jpeg',
        jpeg_quality: 90,
      //  facingMode: "environment"
    }
    );
     Webcam.set('constraints',{
            facingMode: "user"
        });
    try {
        Webcam.attach('#camera');
    } catch (e) {
        alert(e);
    }
}


