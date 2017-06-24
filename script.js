window.onload = function () {
	document.getElementById('res').innerHTML = '<div id="result"></div>';
	document.getElementById('btn').innerHTML = '<button id="search">Unique symbol</button>';
	document.getElementById('inp_text').innerHTML = '<textarea placeholder="Input your text"></textarea>';
		
	document.getElementById('search').onclick = function() {
		var symb = [];
		var uniq_symb = [];
		var all_text = document.getElementsByTagName("textarea")[0].value;
		var words = all_text.split(" ");
			
		for (var i = 0; i < words.length; i++) {
			if(Unique_symb(words[i], 0))
				symb.push(words[i][0]);
		}
		for (var k = 0; k < symb.length; k++) {
			if(Unique_symb(symb, k)){
				uniq_symb.push(symb[k]);
			}
		}
		document.getElementById('result').innerHTML = uniq_symb[0];
	}
}
function Unique_symb(word, ind) {
	for (var i = 0; i < word.length; i++) {
		if(i != ind && word[ind] == word[i])
			return false;
	}
	return true;
}