const btn = document.getElementById('btn');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // Google n Mozilla Voice
const recognition = new SpeechRecognition();

const greetings = ['Im good you little piece of love ' , 'Doing good homeboi' , 'Leave me alone'];
const goodmorning = [' Good Luck ' ,' Have a Nice Day!' ,' Have a Great Day! '];
const goodnight= [' Sweet Dreams' ,' Sleep tight!' ,' Sleep Well '];
const weather  = ['Weather is fine ' , 'You need tan'];
const joke  = ['No, a Funny One.! ' , 'HA HA HA!!',' Youre so ugly! Just Kidding '];
const love = ['Of course, not! You piece of junk! ' , ' I dont love you! Because I love myself' , 'Of course not ,  why Because I love her'];
const quote=[

    'The best thing about a boolean is even if you are wrong, you are only off by a bit. From (Anonymous)',
    'Without requirements or design, programming is the art of adding bugs to an empty text file. From (Louis Srygley)',
    'Before software can be reusable it first has to be usable. From (Ralph Johnson)',
    'The best method for accelerating a computer is the one that boosts it by 9.8 m/s2. From (Anonymous)',
    'I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing. From (Oktal)',
    'If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization. From (Gerald Weinberg)',
    'There are two ways to write error-free programs; only the third one works. From (Alan J. Perlis)',
    'Ready, fire, aim: the fast approach to software development. Ready, aim, aim, aim, aim: the slow approach to software development. From (Anonymous)',
    'It’s not a bug – it’s an undocumented feature. From (Anonymous)',
    'One man’s crappy software is another man’s full-time job. From (Jessica Gaston)',
    'A good programmer is someone who always looks both ways before crossing a one-way street. From (Doug Linder)',
    'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. From (Martin Golding)',
    'Programming is like sex. One mistake and you have to support it for the rest of your life. From (Michael Sinz)',
    'Deleted code is debugged code. From (Jeff Sickel)',
    'Walking on water and developing software from a specification are easy if both are frozen. From (Edward V Berard)',
    'If debugging is the process of removing software bugs, then programming must be the process of putting them in. From (Edsger Dijkstra)',
    'Software undergoes beta testing shortly before it’s released. Beta is Latin for “still doesn’t work. From (Anonymous)',
    'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far, the universe is winning. From (Rick Cook)',
    'It’s a curious thing about our industry: not only do we not learn from our mistakes, but we also don’t learn from our successes. From (Keith Braithwaite)',
    'There are only two kinds of programming languages: those people always bitch about and those nobody uses. From (Bjarne Stroustrup)',
    'In order to understand recursion, one must first understand recursion. From (Anonymous)',
    'The cheapest, fastest, and most reliable components are those that aren’t there. From (Gordon Bell)',
    'The best performance improvement is the transition from the nonworking state to the working state. From (J. Osterhout)',
    'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late. From (Seymour Cray)',
    'Don’t worry if it doesn’t work right. If everything did, you’d be out of a job. From (Mosher’s Law of Software Engineering)',
    'Even when you think your code is complete , one missing conditional can create a bug and crush your program There was conditional in particular ," If sandbox is everyone\'s dream  " , I overlooked this conditonal and this is result of it .  A bug occured , and I crashed . From (Nam Do-san)'
];

recognition.onstart = function(){
 //   console.log('You can speak now!!!');
    var speech = new SpeechSynthesisUtterance(); 
}

recognition.onresult = function(event){
    var text = event.results[0][0].transcript;
    console.log(text);
    document.getElementById('result').innerHTML = text;
    read(text);
  
}

function read(text){
    var speech = new SpeechSynthesisUtterance();   
    speech.text = text;

    // Greetings n Time
    
    if (text.includes('how are you')) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
    }
    
 /*   else if (text.includes('today')) {
    const finalText = weather[Math.floor(Math.random() * weather.length)];
    speech.text = finalText;
    } */

    else if(text.includes('time')){
    speech.text = 'It is '+new Date().getHours() + " " + new Date().getMinutes()+" right now";
    }
    else if(text.includes('good morning')) {
    const finalText = goodmorning[Math.floor(Math.random() * goodmorning.length)];    
    speech.text = 'Good Morning too , Today is '+new Date()+ " Get up , Take a shower , Meditate ,"+finalText;
    }
    else if(text.includes('good night')) {
        const finalText = goodnight[Math.floor(Math.random() * goodnight.length)];    
        speech.text = 'Good Night too'+finalText;
        }
        else if(text.includes('quote')) {
            const finalText = quote[Math.floor(Math.random() * quote.length)];    
            speech.text = 'is'+finalText;
            }
        
    else if(text.includes('thank you')) {
    speech.text = 'You\'re Always Welcome!!!';
    }
    else if(text.includes('annyeong')) {
        speech.text = 'annyeong';
    }
    else if(text.includes('saranghae')) {
        speech.text = 'saranghamnida';
    }
    else if(text.includes('aigoo')) {
        speech.text = 'geez';
    }
    else if(text.includes('kamsamida')) {
        speech.text = 'You\'re Welcome!!!';
    }    
    
    // Jokes

    else if(text.includes('love')) {
    const finalText = love[Math.floor(Math.random() * love.length)];
    speech.text = finalText;
    }
    else if(text.includes('joke')){
    const finalText = joke[Math.floor(Math.random() * joke.length)];
    speech.text = finalText;
    }
    else if(text.includes('my birthday')){
    speech.text = 'Do you think you\'re famous! How the heck would I know your birthday!';    
    }
    else if(text.includes('hear me')) {
    speech.text = 'Of course , not!!!';
    }
    else if(text.includes('really')){
    speech.text = 'Of course , yes!!!';
    }
    else if(text.includes('erase')) {
    speech.text = 'sorry!!! , just kidding';
    }
    //  Name 

    else if(text.includes('your name')){
    speech.text = 'is BENGAR!!!!';
    }
    else if(text.includes('master')) {
    speech.text = 'Yes his name is Renzo!!!';
    }

    // Open New Tab
    else if (text.includes('instagram')){
    speech.text = 'Opening!!! sir';
    window.open('https://www.instagram.com');
    }
    else if (text.includes('twitter')){
    speech.text = 'Opening!!! sir';
    window.open('https://www.twitter.com');
    }
    else if (text.includes('facebook')){
    speech.text = 'Opening!!! sir';
    window.open('https://www.facebook.com');
    }
    else if (text.includes('youtube')){
    speech.text = 'Opening!!! sir';
    window.open('https://www.youtube.com');
    }
    else if (text.includes('weather')){
    speech.text = 'The weather is';
    window.open('https://www.google.com/search?q=weather&oq=weather+&aqs=chrome..69i57.2214j0j1&sourceid=chrome&ie=UTF-8');
    } 
    else if (text.includes('kissasian')){
    speech.text = 'Opening!!! sir';
    window.open('https://www.kissasian.sh');
    }
    else if (text.includes('personal')){
        speech.text = 'Opening!!! sir';
        window.open('http://yeong.epizy.com/?fbclid=IwAR11NpdVdNK4PypebrORRpBL5Rovk-tZzYV8fF6PyJld-xBvGmHZUtMirfQ');
        }
        else if (text.includes('wordpress')){
            speech.text = 'Opening!!! sir';
            window.open('https://lassrenzo.wordpress.com/');
            }        
        

    window.speechSynthesis.speak(speech)
}  

var dt = new Date();
document.getElementById("datetime").innerHTML = (("0"+(dt.getMonth()+1)).slice(-2)) +"/"+ (("0"+dt.getDate()).slice(-2)) +"/"+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));

function addDarkmodeWidget() {
    new Darkmode().showWidget();
  }
  window.addEventListener('load', addDarkmodeWidget);

  // UPDATED YEAR FOOTER
const year = document.querySelector('#year');
year.textContent = new Date().getFullYear();

