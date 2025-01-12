let btn=document.querySelector("#btn")
let content=document.querySelector("#con")
let voice=document.querySelector("#vc") 

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day = new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12)
    {
       speak("Good Morning") 
    }
    else if(hours>=12 && hours<16)
    {
        speak("Good afternoon")

    }
    else
    {
        speak("good evening")
    }

}
window.addEventListener("load",()=>{
    wishMe()
})
let speechreg= window.SpeechRecognition|| window.webkitSpeechRecognition
let recognation = new speechreg()
recognation.onresult=(event)=>{

  let curindex=event.resultIndex 
  let transcript=event.results[curindex][0].transcript
  content.innerText=transcript
  takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognation.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(mesg){
    if(mesg.includes("hello")||mesg.includes("hey")||mesg.includes("hi"))
    {
        speak("hello,how i can help you?")
    }

    else if(mesg.includes("who are you"))
    {
        speak("I am virtual assisstent,created by devanshi")
    }
    else if(mesg.includes("open youtube"))
    {
        speak("now youtube is open")
        window.open("https://www.youtube.com","_blank")
    }
    else if(mesg.includes("open google"))
    {
        speak("google is open")
        window.open("https://www.google.com","_blank")
    }

    else if(mesg.includes("open whatshapp"))
        {
            speak("google is open")
            window.open("https://web.whatsapp.com","_blank")
        }
        else{
            speak("i don't know this command,sorry add some other command")
        }
    
    




}



