function highlight() {
    //Write your code here
	var boldWords = document.querySelectorAll('strong');
            for (var i = 0; i < boldWords.length; i++) {
                boldWords[i].classList.add('highlight');
            }
}


function return_normal() {
    //Write your code here
	var boldWords = document.querySelectorAll('strong');
            for (var i = 0; i < boldWords.length; i++) {
                boldWords[i].classList.remove('highlight');
            }
}
