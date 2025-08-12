let ismkirit = prompt('ismingizni kiriting');


let ism = document.getElementById("ism");



ism.textContent = ismkirit;



let famil = prompt ('familyangizni kiriting');

let familya = document.getElementById('familya');

familya.textContent = famil;


let yoshsh = prompt ('yoshingizni kiriting');

let yoshin = document.getElementById('yosh');

yoshin.textContent = yoshsh;



let box = document.getElementById ('box')


box.style.backgroundColor = 'black'
box.style.color = 'white'
box.style.borderRadius = '20px'
box.style.width = '600px'
box.style.height = '220px'
ism.style.marginLeft = '10px'
ism.style.paddingTop = '20px'
familya.style.marginLeft = '10px'
yoshin.style.marginLeft = '10px'

let tanlov = prompt ('1 - katta harflar, 2 - kichik harflar')

if (tanlov == '1') {
    ism.textContent = ism.textContent.toUpperCase()
    familya.textContent = familya.textContent.toUpperCase()
    yoshin.textContent = yoshin.textContent.toUpperCase()
}else {
    ism.textContent = ism.textContent.toLowerCase()
    familya.textContent = familya.textContent.toLowerCase()
    yoshin.textContent = yoshin.textContent.toLowerCase()
}


if (tanlov == '1') {
    ism.textContent=ism.textContent.toUpperCase()
    familya.textContent=ism.textContent.toUpperCase()
    yoshin.textContent=ism.textContent.toUpperCase()
}else if(tanlov == '2') {
    ism.textContent = ism.textContent.toLowerCase()
    familya.textContent = familya.textContent.toLowerCase()
    yoshin.textContent = yoshin.textContent.toLowerCase()
}else{
    let tanlov2 = prompt('faqat 1 yoki 2 sonini tanlashingiz mumkun')
}



if (tanlov2 == '1') {
    ism.textContent=ism.textContent.toUpperCase()
    familya.textContent=ism.textContent.toUpperCase()
    yoshin.textContent=ism.textContent.toUpperCase()
}else{
    ism.textContent = ism.textContent.toLowerCase()
    familya.textContent = familya.textContent.toLowerCase()
    yoshin.textContent = yoshin.textContent.toLowerCase()
}