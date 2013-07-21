$(document).ready(function() {
	var cardCollection = document.getElementsByClassName('ex-descriptions-card');
	for(var i = 0; i < cardCollection.length; i++) {
		if (cardCollection[i].className == "hilite") {
			cardCollection[i].className += " hilite";
		}
	}

	
});
