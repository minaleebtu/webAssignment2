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
	var deptNameCont = "";
	var telNoCont = "";
	var emailAddrCont = "";

	var deptList = document.getElementById("deptList");
	var telList = document.getElementById("telList");
	var emailList = document.getElementById("emailList");

	var deptName = xmlDoc.getElementsByTagName("Name");
	var telNo = xmlDoc.getElementsByTagName("TelNo");
	var emailAddr = xmlDoc.getElementsByTagName("Email");

	for (i = 0; i < deptName.length; i++) {
		deptNameCont += "<p>" + deptName[i].childNodes[0].nodeValue + "</p>";
		telNoCont += "<p>" + telNo[i].childNodes[0].nodeValue + "</p>";
		emailAddrCont += "<p>" + emailAddr[i].childNodes[0].nodeValue + "</p>"
	}
	document.getElementById("deptList").innerHTML = deptNameCont;
	document.getElementById("telList").innerHTML = telNoCont;
	document.getElementById("emailList").innerHTML = emailAddrCont;
}
// var xmlDoc; // xml DOM
//
// function getXmlObj() {
// var xmlhttp = null;
//
// // Mozilla/Safari
// if (window.XMLHttpRequest) {
// xmlhttp = new XMLHttpRequest();
// } else if (window.ActiveXObject) {// IE
// xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
// }
//
// return xmlhttp;
// }
// function getXMLDom(pUrl, pOption, pSearchValue) {
//
// var xmlhttp = getXmlObj();
// var templateStr = null;
// var pAsync = false;
//
// if (pOption == "TRUE") {
// pAsync = true;
// }
//
// if (pOption == "POST") {
// xmlhttp.open("POST", pUrl, pAsync);
// xmlhttp.setRequestHeader('Content-Type',
// 'application/x-www-form-urlencoded');
// } else {
// xmlhttp.open("GET", pUrl, pAsync);
//
// }
// xmlhttp.onreadystatechange = function() {
//
// if (xmlhttp.readyState == "4") {
// xmlDoc = xmlhttp.responseXML;
// }
//
// }
//
// xmlhttp.send();
// return xmlDoc;
// }
// function getDomLength(pName, pDom) {
// try {
// return pDom.getElementsByTagName(pName).length;
//
// } catch (e) {
// return xmlDoc.getElementsByTagName(pName).length;
// }
// }
//
// function getValue(pName, pIndex, pAttr) {
//
// if (typeof pIndex == "undefined" || pIndex == "") {
// pIndex = 0;
// }
//
// x = xmlDoc.getElementsByTagName(pName);
//
// if (typeof pAttr == "undefined" || pAttr == "") {
//
// if (x[pIndex].hasChildNodes()) {
// v = x[pIndex].childNodes[0].nodeValue;
// } else {
// v = "";
// }
//
// } else {
// v = x[pIndex].getAttribute(pAttr);
// }
//
// return v;
// }
// function getXMLText(pCode, pValue) {
// var xDom = getXMLDom('../xml/phone.xml');
// var cnt = getDomLength(pCode, xDom);
// var strHTML = "";
// for (var i = 0; i < cnt; i++) {
// if (getValue(pCode, i, "code") == pValue)
// strHTML = getValue(pCode, i, "text");
// }
//
// return strHTML;
// }
//
// window.onload = function() {
// var doc = getXMLDom('../xml/phone.xml');
// var dept = getDomLength("Department");
// var deptName = "";
// var telNo = "";
// var deptNameTr = document.getElementById("deptNameTr");
// for (var i = 0; i < dept; i++) {
// deptName = deptName + getValue("Name", i);
// telNo = telNo + getValue("TelNo", i);
// }
// alert('deptName.length = ' + deptName.length);
// document.getElementById("phoneList").innerHTML = deptName + " / " + telNo;
// }
