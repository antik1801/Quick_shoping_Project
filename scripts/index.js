function totalCalculator(perUnit, totalUnit){
    return perUnit*totalUnit;
}
document.getElementById('card-1').addEventListener('click',function(event){
    const productName = document.getElementById('coffee').innerText;
    const productPrice = document.getElementById('price').innerText;
    const productQuantity = document.getElementById('quantity').innerText;
    const tableBody = document.getElementById('table-body');
    const tr = document.createElement('tr');
    
    tr.innerHTML=`
    <td>${1}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQuantity}</td> 
    <td>${0}</td>
    `
    tableBody.appendChild(tr);
})