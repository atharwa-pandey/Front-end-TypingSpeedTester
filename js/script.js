document.addEventListener('DOMContentLoaded',()=>{
    const timeLeftDisplay = document.querySelector('#timeleft')
    const startBtn = document.querySelector('#startButton')
    let timeleft = 60;
    var end = false;
    function countDown(){
        setInterval(function(){
            if(timeleft<=0){
                clearInterval(timeleft=0);
                end_everything();
            }
            timeLeftDisplay.innerHTML=timeleft;
            timeleft -=1;
        },1000)
    }
    function displayText(){
        var questionMsg=["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).","Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",];
        var display_index =Math.floor((Math.random() * 3) + 1);
        if(timeleft==0){
            document.getElementById("questiontext").style.display='none';
        }else{
        document.getElementById("questiontext").innerHTML=questionMsg[display_index];
        document.getElementById("questiontext").style.transition="0.5s";
        }
    }
    function hidebutton(){
        document.getElementById("startButton").style.display = 'none';
        document.getElementById("startButton").style.transition="0.5s";
    }
    const TypedWords = document.querySelector('#inputBox')
    function disable_enable(){
            TypedWords.disabled = false;
    }
    console.log(timeleft);
    function end_everything(){
            document.getElementById("questiontext").style.display='none';
            TypedWords.disabled=true;
            function result(){
                const total_words = TypedWords.value.split(" ").length;
                finalMsg = error(document.getElementById("questiontext").innerHTML,TypedWords.value);
                document.getElementById("final_result").innerHTML=finalMsg;
            }
            result();
    }
    function error(str1,str2){
        let words1 = str1.split(" ");
        let words2 = str2.split(" ");
        let cnt=0;
        words1.forEach(function (item,index) {
            if(item==words2[index]){
                cnt++
            }
        })
        let accuracy = Math.round((cnt/words2.length)*100);
        return("Your speed was "+cnt +" words per minute with accuracy of "+accuracy+"%.");
    }

        
    startBtn.addEventListener('click',countDown)
    startBtn.addEventListener('click',displayText)
    startBtn.addEventListener('click',hidebutton)
    startBtn.addEventListener('click',disable_enable)
    
})
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }
