const Questions = [
  "наш",
  "глаз",
  "он",
  "уже",
  "говорить",
  "дело",
  "друг",
  "хороший ",
];
const Option1 = [
  "our, ours",
  "life",
  "she",
  "man, person",
  "yes, but",
  "business, affair, matter",
  "time, once, since",
  "good, nice",
];
const Option2 = [
  "my, our, your",
  "eye; sight",
  "that",
  "still, yet",
  "to say, to tell, to speak",
  "where",
  "two",
  "to look, watch",
];
const Option3 = [
  "now, right, well, come on",
  "first, front, former",
  "to be",
  "for, to",
  "would",
  "very",
  "to see",
  "simply",
];
const Option4 = [
  "where",
  "nothing",
  "he",
  "already, by now",
  "what, which, how",
  "with",
  "friend",
  "to sit",
];

var options = document.getElementsByClassName("option");
var quizCountElement = document.getElementById("quizCount");
var quizCount = parseInt(quizCountElement.innerHTML);
var loading_bar = document.getElementById("loading_bar");
var quizQuestion = document.getElementById("quizQuestion");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", function () {
    quizCount = quizCount + 1;
    if (quizCount >= 10) {
      window.location.href = "./quizFinishedPage.html";
    } else {
      quizCountElement.innerHTML = quizCount;
      var barWidth = quizCount * 10;
      loading_bar.style.width = `${barWidth}%`;
      elementCount = quizCount - 2;
      quizQuestion.innerHTML = Questions[elementCount];
      option1.innerHTML = Option1[elementCount];
      option2.innerHTML = Option2[elementCount];
      option3.innerHTML = Option3[elementCount];
      option4.innerHTML = Option4[elementCount];
    }
  });
}
