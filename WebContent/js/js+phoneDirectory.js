window.onload = function loadXMLDoc() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			myFunction(this);
		}
	};
	xmlhttp.open("GET", "../xml/phone.xml", true);
	xmlhttp.send();
};

function myFunction(xml) {
	var xmlDoc = xml.responseXML;
	var phonedir_tab = document.getElementById("phonedir_tab");

	var deptName = xmlDoc.getElementsByTagName("Name");
	var telNo = xmlDoc.getElementsByTagName("TelNo");
	var emailAddr = xmlDoc.getElementsByTagName("Email");

	var th = phonedir_tab.appendChild(document.createElement('TH'));
	th.setAttribute('id', 'deptList');
	document.getElementById('deptList').appendChild(
			document.createTextNode('Department'));
	var th = phonedir_tab.appendChild(document.createElement('TH'));
	th.setAttribute('id', 'telList');
	document.getElementById('telList').appendChild(
			document.createTextNode('Tel'));
	var th = phonedir_tab.appendChild(document.createElement('TH'));
	th.setAttribute('id', 'emailList');
	document.getElementById('emailList').appendChild(
			document.createTextNode('Email Address'));

	for (i = 0; i < deptName.length; i++) {
		document.getElementById("phonedir_tab").innerHTML += "<tr><td>"
				+ deptName[i].childNodes[0].nodeValue + "</td><td>"
				+ telNo[i].childNodes[0].nodeValue + "</td><td>"
				+ emailAddr[i].childNodes[0].nodeValue + "</td></tr>";
	}
}
