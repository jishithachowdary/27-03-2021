function createMyElement(elementName,className="",id="")
{
    var ele = document.createElement(elementName);
    ele.setAttribute('class',className);
    ele.setAttribute('id',id);
    return ele;
}
function foo(){
    var row=createMyElement("tr");
    var col1=createMyElement("td");
    var col2=createMyElement("td");
    var col3=createMyElement("td");
    var col4=createMyElement("td");
    var col5=createMyElement("td");
    var col6=createMyElement("td");
    var col7=createMyElement("td");
    var col8=createMyElement("td");
    col1.innerHTML=document.getElementById('fname').value;
    col2.innerHTML = document.getElementById('lname').value;
    col3.innerHTML = document.getElementById('address').value;
    col4.innerHTML = document.getElementById('pincode').value; 
    col5.innerHTML = document.querySelector('input[name=gender]').value;
    col6.innerHTML = document.getElementById('food').value;
    col7.innerHTML = document.getElementById('state').value;
    col8.innerHTML = document.getElementById('country').value;
    row.append(col1,col2,col3,col4,col5,col6,col7,col8);
    document.getElementById('tbody').append(row);

}

