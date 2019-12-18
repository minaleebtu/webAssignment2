window.onload = function loadXMLDoc() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			myFunction(this);
		}
	};
	xmlhttp.open("GET", "../xml/doctorlist.xml", true);
	xmlhttp.send();
};

function myFunction(xml) {
	var xmlDoc = xml.responseXML;

	var nameCont = "";
	var deptNameCont = "";

	var nameList = document.getElementById("nameList");
	var deptList = document.getElementById("deptList");

	var name = xmlDoc.getElementsByTagName("name");
	var deptName = xmlDoc.getElementsByTagName("department");

	for (i = 0; i < deptName.length; i++) {
    nameCont += name[i].childNodes[0].nodeValue;
	deptNameCont += deptName[i].childNodes[0].nodeValue;
	}
	document.getElementById("nameList").innerHTML = nameCont;
	document.getElementById("deptList").innerHTML = deptNameCont;
}
