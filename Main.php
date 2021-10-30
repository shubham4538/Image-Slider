<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="Styles/style.css">
  <link rel="stylesheet" href="Styles/fontawesome-icons.css">
</head>
<body>
  <div class="slideShow">
    <div class="container">
      <!-- Images -->
      <div class="images">
      </div>

      <!-- Arrow -->
      <div class="arrows">
        <i id="leftArrow" class="slideshowArrow fas fa-caret-square-left"></i>
        <i id="rightArrow" class="slideshowArrow fas fa-caret-square-right"></i>
      </div>

      <!-- Add dot if adding image tag above -->
      <div class="slideshowCircles">
      </div>

    </div>
  </div>
  <?php
    $imageSet = array();

    // print_r($imageSet);
    $dir = getcwd()."/Resources/";
    $a = 0;
    if (is_dir($dir)){
      if ($dh = opendir($dir)){
        while (($file = readdir($dh)) !== false) {
          if (($file != '.') && ($file != '..') && !is_dir($dir.$file)) {
            array_push($imageSet,array('Id' => $a, 'Name' => $file ));
            $image = $imageSet[$a]['Name'];
            // echo "<img src='Resources/$image'>"; 
            // echo "<div src='Resources/$image'></div>"; 
            echo $image;
            // echo "<br>";
            $a++;
          }
        }
      }
    }
    print_r($imageSet);
    $imageSet = json_encode($imageSet);
    "<script>document.write(localStorage.setItem('Image','".$imageSet."'))</script>"
    // print_r($imageSet);
  ?>
<script src="script.js"></script>
</body>
</html>  
 