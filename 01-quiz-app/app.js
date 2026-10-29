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

