function mainLoad() {
    window.alert("Welcome... Hover & click over the images to explore the art :D")
}

function imageOne () {
      document.getElementById("mainimage1").addEventListener('mouseover', function(){
          document.getElementById('mainbody').style.backgroundImage = "url(use_images/alyssa_img3.jpg)";
      }, false);
      document.getElementById("mainimage1").addEventListener('mouseout', function(){
        document.getElementById('mainbody').style.backgroundImage = "url('use_images/body_bg.jpg')";
    }, false);
}

function imageTwo () {
    document.getElementById("mainimage2").addEventListener('mouseover', function(){
        document.getElementById('mainbody').style.backgroundImage = "url(use_images/farhan_img6.jpg)";
    }, false);
    document.getElementById("mainimage2").addEventListener('mouseout', function(){
      document.getElementById('mainbody').style.backgroundImage = "url('use_images/body_bg.jpg')";
  }, false);
}

function imageThree () {
    document.getElementById("mainimage3").addEventListener('mouseover', function(){
        document.getElementById('mainbody').style.backgroundImage = "url(use_images/lucy_img3.jpg)";
    }, false);
    document.getElementById("mainimage3").addEventListener('mouseout', function(){
      document.getElementById('mainbody').style.backgroundImage = "url('use_images/body_bg.jpg')";
  }, false);
}

function imageFour () {
    document.getElementById("mainimage4").addEventListener('mouseover', function(){
        document.getElementById('mainbody').style.backgroundImage = "url(use_images/ming_img2.jpg)";
    }, false);
    document.getElementById("mainimage4").addEventListener('mouseout', function(){
      document.getElementById('mainbody').style.backgroundImage = "url('use_images/body_bg.jpg')";
  }, false);
}