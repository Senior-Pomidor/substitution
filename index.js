// Алфавит 
var symbols = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];

// console.log(encAlpha)

var decodedMessageForm = document.querySelector('.decodedMessage');
var encodedMessageForm = document.querySelector('.encodedMessage');

var cryptAlphaForm = document.querySelector('.crypt-alpha');
var resultForm = document.querySelector('.result');

var encodeBtn = document.querySelector('.encode-btn');
var decodeBtn = document.querySelector('.decode-btn');


function encode(message) {
	let encMessage = '';
	for (let i = 0; i < message.length; i++) {
		let index = symbols.indexOf(message[i]);
		encMessage += encAlpha[index];
	}
	console.log(encMessage);
	return encMessage;
}

function decode(message) {
	let decMessage = '';
	for (let i = 0; i < message.length; i++) {
		let index = encAlpha.indexOf(message[i]);
		decMessage += symbols[index];
	}
	console.log(decMessage);
	return decMessage;
}

// encode('яхочусдатьэкзамен', 'йцукенгшщзхъэждлорпавыфячсмитьбюё')
// ёфлчвпейаьбъщйжнд

// decode('ёфлчвпейаьбъщйжнд', 'йцукенгшщзхъэждлорпавыфячсмитьбюё')



encodeBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  var result = encode(decodedMessageForm.value);
  resultForm.textContent = result;
});

decodeBtn.addEventListener('click', function(evt) {
	evt.preventDefault();
  var result = decode(encodedMessageForm.value);
  resultForm.textContent = result;
});
