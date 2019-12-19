window.onload = function loadXMLDoc() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			myFunction(this);
		}
	};
	xmlhttp.open("GET", "../xml/doctorList.xml", true);
	xmlhttp.send();
};

function myFunction(xml) {
	var xmlDoc = xml.responseXML;
	var doclist = document.getElementById("doclist");
	
	var docName = xmlDoc.getElementsByTagName("name");
	var deptName = xmlDoc.getElementsByTagName("department");
	
	var nameList = document.getElementById("nameList");
	var deptList = document.getElementById("deptList");
	
	
	var th = doclist.appendChild(document.createElement('TH'));
	th.setAttribute('id', 'nameList');
	document.getElementById('nameList').appendChild(
			document.createTextNode('Name'));
	
	var th = doclist.appendChild(document.createElement('TH'));
	th.setAttribute('id', 'deptList');
	document.getElementById('deptList').appendChild(
			document.createTextNode('Department'));
	
	for (i = 0; i < deptName.length; i++) {
		document.getElementById("doclist").innerHTML += "<tr><td>"
				+ docName[i].childNodes[0].nodeValue + "</td><td>"
				+ deptName[i].childNodes[0].nodeValue + "</td></tr>";
	}

}
