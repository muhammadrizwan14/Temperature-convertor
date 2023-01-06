
    let  cel=document.getElementById("cel");
    let farh=document.getElementById("farh");

     cel.addEventListener('input' , function(){
    let c=this.value;
    let f= (c*9/5) + 32;
    farh.value= (Math.round(f* 100) / 100).toFixed(1);
   

        console.log("changed")
     });
     
     farh.addEventListener ('input', function(){

        let f=this.value;
        let c= (f-32) * 5/9;
        cel.value=(Math.round(c * 100) / 100).toFixed(4);
        // Math.round(c).toFixed(3)

        console.log("changed")

     });