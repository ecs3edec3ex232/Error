function listening(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Ak7wY639e/model.json', modelReady);
}
 function modelReady(){
    classifier.classify(gotResults);
}
var Dog =0;
var Horse =0;
var Lion =0;
var Monkey =0;
var Background_noises =0; 
img = document.getElementById("animal");
function gotResults(error, results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    random_number_red = Math.floor(Math.random() * 255) + 1;
    random_number_green = Math.floor(Math.random() * 255) + 1;
    random_number_blue = Math.floor(Math.random() * 255) + 1;

    document.getElementById("noise").innerHTML = results[0].label;
    document.getElementById("animals_detected").innerHTML =(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("noise").style.color ="rgb("+random_number_red+","+random_number_green+","+random_number_blue+")";
    document.getElementById("animals_detected").style.color ="rgb("+random_number_red+","+random_number_green+","+random_number_blue+")";

    if(results[0].label == "barking/dog"){
    
    var Dog =1;
    var Horse =0;
    var Lion =0;
    var Monkey =0;
    var Background_noises =0; 
    img.src = 'dog.jpeg'; 
    }
    else if(results[0].label =="monkey noises") {
        var Dog =0;
    var Horse =0;
    var Lion =0;
    var Monkey =1;
    var Background_noises =0;  
    img.src = 'monkey.jpeg'; 
}
else if(results[0].label =="horse noises/neighing") {
    var Dog =0;
var Horse =1;
var Lion =0;
var Monkey =0;
var Background_noises =0;  
img.src = 'monkey.jpeg'; 
}
else if(results[0].label =="roaring") {
    var Dog =0;
var Horse =0;
var Lion =1;
var Monkey =0;
var Background_noises =0;  
img.src = 'monkey.jpeg'; 
}
    else{
    var Dog =0;
    var Horse =0;
    var Lion =0;
    var Monkey =0;
    var Background_noises =1;  
img.src = 'ear.jpeg'; 
}
}
}


