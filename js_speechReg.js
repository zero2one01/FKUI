window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'zh-hk';
recognition.continuous = true;

recognition.addEventListener('result', e =>{
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    
    if (e.results[0].isFinal) {
      recognitionResult(transcript);
    }
})
function recognitionResult(txt){
 console.log(txt);
}