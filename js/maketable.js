//maketable.js


//oneoff, build a table from the tracer data object
var tracerTable  = document.getElementById('tracerTable');
console.log(tracerData);
if(tracerData.head){

	var headerData = tracerData.head;
	var headerString = '<thead><tr>'

	for(var i=0;i<headerData.length;i++){

		headerString += '<td>'+headerData[i]+'</td>';


	}

	headerString +='</tr></thead>';

    //now body
	var bodyData = tracerData.platforms;
    var bodyString = '<tbody>';

console.log(headerString)

for (var i = 0; i < bodyData.length; i++) {

    bodyString += '<tr>';
    
    //update later with loop
    bodyString += '<td>' + bodyData[i].platname + '</td>';
    bodyString += '<td>' + bodyData[i].NWA + '</td>';
    bodyString += '<td>' + bodyData[i].HWA + '</td>';
    bodyString += '<td>' + bodyData[i].CP + '</td>';
    bodyString += '<td>' + bodyData[i].CH + '</td>';
    bodyString += '<td>' + bodyData[i].pin + '</td>';

    bodyString += '</tr>';
}
bodyString += '</tr></tbody>';

    //update strings for words not numbers
bodyString = bodyString.replace(/100/g, 'full support').replace(/50/g, 'partial support').replace(/0/g, 'no support').replace(/49/g, 'unknown');

	tracerTable.innerHTML = headerString+bodyString;


}