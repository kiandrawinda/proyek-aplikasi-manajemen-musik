const wordList = [
    {
        word: "python",
        hint: "bahasa pemrograman"
    },
    {
        word: "gitar",
        hint: "musik instrumen"
    },
    
    {
        word: "venus",
        hint: "planet di sistem tata surya"
    },
    {
        word: "emas",
        hint: "benda kuning berharga"
    },
    {
        word: "amazon",
        hint: "online shopping "
    },
    {
        word: "golang",
        hint: "bahasa pemograman"
    },
    {
        word: "coding",
        hint: "berhubungan dengan pemograman"
    },
    {
        word: "matrix",
        hint: "film science fiction"
    },
    {
        word: "bugs",
        hint: "berhubungan dengan pemograman"
    },
    {
        word: "avatar",
        hint: "epic science fiction film"
    },
    {
        word: "gif",
        hint: "format untuk gambar"
    },
    {
        word: "mental",
        hint: "berhubungan dengan pikiran"
    },
    {
        word: "peta",
        hint: "diagram yang berhubungan dengan area"
    },
    {
        word: "pulau",
        hint: "sesuatu yang dikelilingi air"
    },
    {
        word: "hockey",
        hint: "permainan luar ruangan"
    },
    {
        word: "catur",
        hint: "permainan dalam ruangan"
    },
    {
        word: "viber",
        hint: "social media"
    },
    {
        word: "github",
        hint: "berhubungan dengan coding"
    },
    {
        word: "png",
        hint: "format gambar"
    },
    {
        word: "metal",
        hint: "benda silver yang berharga"
    },
    {
        word: "mobile",
        hint: "alat elektronik"
    },
    {
        word: "gpu",
        hint: "komponen komputer"
    },
    {
        word: "java",
        hint: "bahasa pemograman"
    },
    {
        word: "google",
        hint: "pencari"
    },
    {
        word: "venice",
        hint: "kota air"
    },
    {
        word: "excel",
        hint: "microsoft"
    },
    {
        word: "mysql",
        hint: "database"
    },
    {
        word: "nepal",
        hint: "nama negara berawalan N"
    },
    {
        word: "seruling",
        hint: "instrument musik"
    },
    {
        word: "crypto",
        hint: "berhubungan dengan saham"
    },
    {
        word: "tesla",
        hint: "mobil penyelamat bumi"
    },
    {
        word: "mars",
        hint: "planet di sistem tata surya"
    },
    {
        word: "proxy",
        hint: "berhubungan dengan server aplikasi"
    },
    {
        word: "email",
        hint: "bertukar kabar"
    },
    {
        word: "html",
        hint: "bahasa pemograman"
    },
    {
        word: "udara",
        hint: "kehidupan"
    },
    {
        word: "ide",
        hint: "sebuah pemikiran"
    },
    {
        word: "server",
        hint: "berhubungan dengan komputer"
    },
    
    {
        word: "jpeg",
        hint: "format gambar"
    },
    
    {
        word: "kunci",
        hint: "benda kecil terbuat dari metal"
    },
    {
        word: "mesir",
        hint: "sebuah negara"
    },
    {
        word: "joker",
        hint: "film psikologi terkenal"
    },
    
    {
        word: "foto",
        hint: "manusia dan peristiwa"
    },
    {
        word: "nile",
        hint: "sungai besar"
    },
    {
        word: "hujan",
        hint: "berhubungan dengan langit"
    },
    
    ]
    
    
    const inputs = document.querySelector(".inputs"),
    hintTag = document.querySelector(".hint span"),
    guessLeft = document.querySelector(".guess-left span"),
    wrongLetter = document.querySelector(".wrong-letter span"),
    resetBtn = document.querySelector(".reset-btn"),
    typingInput = document.querySelector(".typing-input");
    
    let word, maxGuesses, incorrectLetters = [], correctLetters = [];
    
    function randomWord() {
        let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
        word = ranItem.word;
        maxGuesses = word.length >= 5 ? 8 : 6;
        correctLetters = []; incorrectLetters = [];
        hintTag.innerText = ranItem.hint;
        guessLeft.innerText = maxGuesses;
        wrongLetter.innerText = incorrectLetters;
    
        let html = "";
        for (let i = 0; i < word.length; i++) {
            html += `<input type="text" disabled>`;
            inputs.innerHTML = html;
        }
    }
    randomWord();
    
    function initGame(e) {
        let key = e.target.value.toLowerCase();
        if(key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(` ${key}`) && !correctLetters.includes(key)) {
            if(word.includes(key)) {
                for (let i = 0; i < word.length; i++) {
                    if(word[i] == key) {
                        correctLetters += key;
                        inputs.querySelectorAll("input")[i].value = key;
                    }
                }
            } else {
                maxGuesses--;
                incorrectLetters.push(` ${key}`);
            }
            guessLeft.innerText = maxGuesses;
            wrongLetter.innerText = incorrectLetters;
        }
        typingInput.value = "";
    
        setTimeout(() => {
            if(correctLetters.length === word.length) {
                alert(`Congrats!! kamu nemuin jawabannyaa ${word.toUpperCase()}`);
                return randomWord();
            } else if(maxGuesses < 1) {
                alert("Game over! dicoba lagi ya!!");
                for(let i = 0; i < word.length; i++) {
                    inputs.querySelectorAll("input")[i].value = word[i];
                }
            }
        }, 100);
    }
    
    resetBtn.addEventListener("click", randomWord);
    typingInput.addEventListener("input", initGame);
    inputs.addEventListener("click", () => typingInput.focus());
    document.addEventListener("keydown", () => typingInput.focus());