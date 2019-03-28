$(document).ready(function() {
  $("form#match").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var food = $("select#food").val();
    var picjb = "img/justin.jpg";
    var picag = "img/ariana.jpg"
    var picts = "img/taylor.jpg"
    var picrg = "img/ryan.jpg"
    var picgg = "img/golum.jpg"
    

    if (gender === 'female' && age <= 21 ) {
    
    $("#matchpic").append("<img src=" + picjb + ">");
    $("#soulmate").empty().append("Justin Bieber");
    $("#result").show();
    
    } else if (gender === 'male' && age <= 21) {
    
    $("#matchpic").append("<img src=" + picag + ">");
    $("#soulmate").empty().append("Ariana Grande");
    $("#result").show();
      
    
    } else if (gender === 'male' && age <= 40) {
    
    $("#matchpic").append("<img src=" + picts + ">");
    $("#soulmate").empty().append("Taylor Swift");
    $("#result").show();
    } 
    
    else if (gender === 'female' && age <= 30) {
    
    $("#matchpic").append("<img src=" + picrg + ">");
    $("#soulmate").empty().append("Ryan Gosling");
    $("#result").show();
    } 
    
    else if (gender === 'female' && age > 30) {
    
    $("#matchpic").append("<img src=" + picgg + ">");
    $("#soulmate").empty().append("Golum");
    $("#result").show();
    
    } else if (gender === 'male' && age > 30) {
    
    $("#matchpic").append("<img src=" + picgg + ">");
    $("#soulmate").empty().append("Golum");
    $("#result").show();
    
    } else {
      alert('Please enter your information.');
    }
    
    event.preventDefault();
  });
});