// Minor Project

// ---------------------------------------------------------
// Create and Read Functionalities using JS

let array1 = []
let B = document.getElementById('btn')
let b1=document.getElementById('btn1')
B.addEventListener('click', function Clicked(){
    let id = document.getElementById('inp1').value
    let Name = document.getElementById('inp2').value
    let Email = document.getElementById('inp6').value
    let Salary = document.getElementById('inp3').value
    let City = document.getElementById('inp4').value
    let Gender= document.getElementById('genderid').value
    let Dob= document.getElementById('dateid').value

    // console.log(id, Name)

    document.getElementById('inp1').value = null
    document.getElementById('inp2').value = null
    document.getElementById('inp6').value = null
    document.getElementById('inp3').value = null
    document.getElementById('inp4').value = null
    document.getElementById('genderid').value = null
    document.getElementById('dateid').value = null

    // create an object using form data
    let obj = {'id':id, 'name':Name, 'sal':Salary, 'city':City,'gender':Gender,'dob':Dob,'email':Email}
    // console.log(obj)

    array1.push(obj)
    // console.log(array1)

    str = ``
    for (i=0; i<array1.length; i++){
        str += `<tr><td>${array1[i].id}</td><td>${array1[i].name}</td><td>${array1[i].gender}</td><td>${array1[i].dob}</td><td>${array1[i].email}</td><td>${array1[i].sal}</td><td>${array1[i].city}</td></tr>`
        let tbody = document.getElementById('table-body')
        tbody.innerHTML = str
    }    
})
b1.addEventListener('click',function clicks(){

    document.getElementById('inp1').value = null
    document.getElementById('inp2').value = null
    document.getElementById('inp6').value = null
    document.getElementById('inp3').value = null
    document.getElementById('inp4').value = null
    document.getElementById('genderid').value = null
    document.getElementById('dateid').value = null
})