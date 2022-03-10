function start_classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/zuxXgjceR/model.json",modelready)
}
function modelready(){
    classifier.classify(gotresults);
}
function gotresults(error,results){
    if(error)
    {
      console.log(error); 
    }
    console.log(results);
    
}