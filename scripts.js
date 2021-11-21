/* const word = document.getElementById('updateWord');
word.addEventListener('click', function(){
    word.contentEditable = true;
    console.log('Button Clicked');
    word.style.backgroundColor = "#dddbdb";
});
*/
//const edit_button = document.getElementById("nextWord");
//edit_button.addEventListener("click", updateWord())
var words=new Array();
words[0] = 'The'
words[1] = 'a'
words[2] = 'see'
words[3] = 'I'
words[4] = 'to'
words[5] = 'by'
words[6] = 'my'
words[7] = 'am'
words[8] = 'at'
words[9] = 'go'

function updateWord() {
    var word = document.getElementById('updateWord');
    if (words.indexOf(word.innerHTML) > -1) {
        var currentWord = words.indexOf(word.innerHTML) + 1
        if (words[currentWord] == undefined) {
            word.innerHTML = "Out of words!"
        } else {
            word.innerHTML = words[currentWord]
        }
    } else {
       word.innerHTML = words[0]
    }
}