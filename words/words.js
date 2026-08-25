(()=>{
    document.getElementById("words-list").addEventListener('click', (e) => {
        const target = e.target;
        if(target.classList.contains("word-EN")){
            const utterance = new SpeechSynthesisUtterance(target.textContent);
            utterance.lang = 'en-US';   
            utterance.rate = 1;         
            utterance.pitch = 1;        
            speechSynthesis.speak(utterance);
        }
    });
})();