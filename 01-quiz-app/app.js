/*

Front End Bilgi Yarışması - app.js / Front End Quiz - app.js 

TR:
Soruları ekrana yazar, seçilen cevabı kontrol eder, skoru tutar.

EN:
Loads questions, checks the selected answer and keeps the score.
*/

// Soru verileri: her nesne bir soru, correct = doğru şıkkın id'si / Quiz data: each object is a question, correct = id of the right option
const quizData = [
    {
        question : "Sayfanın en büyük başlığı için hangi etiket kullanılır?",
        a : "header",
        b : "head",
        c : "h1",
        d : "title",
        e : "body",
        correct : "c"
    },
    {
        question : "Metnin rengini hangi CSS özelliği değiştirir?",
        a : "color",
        b : "font-color",
        c : "text-color",
        d : "font-style",
        e : "background-color",
        correct : "a"
    },
    {
        question : "JavaScript'te sabit (değişmeyen) bir değişken hangi anahtar kelimeyle tanımlanır?",
        a : "let",
        b : "var",
        c : "function",
        d : "static",
        e : "const",
        correct : "e"
    },
    {
        question : "Bir elemanı id'si ile seçen JavaScript metodu hangisidir?",
        a : "querySelectorAll",
        b : "getElementsByClassName",
        c : "createElement",
        d : "getElementById",
        e : "addEventListener",
        correct : "d"
    },
    {
        question : "Öğeleri yan yana ya da alt alta hizalamak için kullanılan CSS düzeni hangisidir?",
        a : "float",
        b : "flexbox",
        c : "position",
        d : "z-index",
        e : "display: none",
        correct : "b"
    }
];

//HTML'de tanımlı olan soru (h2) ve cevap (label) id'lerini buraya çekiyoruz. / Get the question (h2) and answer (label) elements defined in the HTML by their ids.

//Soru / Question
const questionEl = document.getElementById('question');

//Cevaplar / Answers
const answerA = document.getElementById('a_text');
const answerB = document.getElementById('b_text');
const answerC = document.getElementById('c_text');
const answerD = document.getElementById('d_text');
const answerE = document.getElementById('e_text');

// answer class'ına sahip bütün radio input'ları seçiyoruz / select all radio inputs with the answer class
const answerEls = document.querySelectorAll('.answer');

//Burada sayacı tanımlıyoruz. / Define the counter here.
let currentQuiz = 0;

//Burada skoru tanımlıyoruz. / Define the score here.
let score = 0;

//Burada soruyu ve cevap şıklarını ekrana yazdıracak olan fonksiyonu tanımlıyoruz. / Define the function that displays the question and answers.
function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];

    //Burada artık soruyu ekrana yazdırıyoruz. / Display the question on the screen
    questionEl.textContent = currentQuizData.question;

     //Burada artık cevapları ekrana yazdırıyoruz. / Display the answers on the screen
    answerA.textContent = currentQuizData.a;
    answerB.textContent = currentQuizData.b;
    answerC.textContent = currentQuizData.c;
    answerD.textContent = currentQuizData.d;
    answerE.textContent = currentQuizData.e;
}

// seçilen şıkkı bulup id'sini döndüren fonksiyonu tanımlıyoruz / find the selected choice and return its id
function getSelected(){

   // Seçili şıkkın id'sini tutacak değişken, ilk tanımlandığında boş / Holds the id of the selected option, empty at first
    let answer;

    // A'dan E'ye kadar şıkları tek tek geziyoruz / Loop through each option from A to E
    answerEls.forEach(answerEl => {

        // bu şık seçiliyse id'sini answer değişkenine kaydediyoruz / if this option is checked, store its id in answer.
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    // seçili şıkkın id’sini döndürüyoruz, hiçbiri seçili değilse undefined / return the selected id, or undefined if none is selected
    return answer;
}

// İlk soruyu ekrana getirmek için fonksiyonu çağırıyoruz / Call the function to display the first question on the screen
loadQuiz();
