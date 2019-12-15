window.onload = function() {
	document.getElementById("amount_chk").innerHTML = "<span>€ 0.00</span>";
}

function displayAmount(amount) {
	var value = amount.value;
	document.getElementById("amount_chk").setAttribute('data-value', value);
	document.getElementById("amount_chk").innerHTML = "<span>€ " + value
			+ ".00</span>";
}

function resetAmount() {
	document.getElementById("amount_chk").innerHTML = "<span>€ 0.00</span>";
	document.getElementById("amount_chk").removeAttribute('data-value');
}

function confirmDonate() {
	var amount = document.getElementById("amount_chk").getAttribute(
			'data-value');
	var text = 'Thank you for your support!\n\n' + 'The amount of €' + amount
			+ ' is now donated.\nYour Love will be sent to the rescue.';
	var returnValue = '';
	if (amount !== null) {
		returnValue = confirm("Do you really want to donate this amount of money?");
		if (returnValue == true) {
			alert(text);
			location.href = '../index.html';
		}
	}
}
