window.addEventListener('online',function(){alert("online now")});
window.addEventListener('offline',function(){alert("offline now")});

Elm("speechReg_triggerBtn").addEventListener('touchstart',function(){
  let speech = document.querySelectorAll('.speech');
  speech.forEach(function(r){
  r.addEventListener("click",()=>{
  console.log("speech")
  })
  r.addEventListener('touchstart', function() {
    recognition.start();
  });
    r.addEventListener('touchend',function(){
    r.blur();
    recognition.stop();
    })
  })
})