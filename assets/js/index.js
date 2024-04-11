// console.log("Hello World!")

// var name_var = "Akaka"
// let name_let = "alaka"

// const name_const = "Констака"

// console.log(name_var, name_let, name_const);


// name_var = "атата"
// name_let = "новый лет"

// console.log(name_var, name_let, name_const);

//prompt("Текст")

// let string = "10dwqdqdwqdwq" // ""
// let number = 10.8 //10
// let boolean = true //false

// let zero = null // пока пусто
// let pustota = undefined // фиг знает

// let infinite = Infinity
// let nan = NaN
// let bigInt = 1234567890123456789012345678901234567890n

// let obj = {
//     key1: 10,
//     name: "Имя",
//     age: 10,
//     isSmoke: false,
//     children: {
//         nameChild: "Петя"
//     }
// }
// let sym = Symbol("id")
// console.log(100 / "2d2");
// console.log(bigInt);
// console.log(obj.name, obj.children.nameChild);


// console.log(typeof (bigInt));
// console.log(typeof (infinite));
// console.log(typeof (obj));
// console.log(typeof (sym));
// console.log(typeof (nan));
// console.log(typeof (string));
// alert("ВНИМАНИЕ!!!!")
// let b = prompt('Введите число', 20)
// console.log(b);
10 < 20 //true
10 > 20 //false
// || или  && и ! НЕ
// let age = prompt('Введите возраст: ')
// if (age < 10) {
//     console.log('Ребенок');
// }
// else  {
//     if (age >= 10 && age < 18) {
//         console.log('Подросток');
//     }
//     else {
//         if (age >= 18 && age < 60) {
//         console.log('Взрослый');    
//     }
//         else {
//             console.log('Пожилой');
//         }
//     }
// }
// let i = 0
// while (i<10) {
//     console.log('Цикл работает', i);
//     i += 2
//     break
// }
// debugger
// var n = 1
// let g = prompt('Введите число: ')
// for(let i = 1; i<=g; i += 1) {
//     n = n * i
//     console.log(n);
// }
// let id = document.getElementById("50");
// console.dir(id);
// // id.style.fontSize = '20px'
// // id.style.color = 'blue'
// id.innerText = 'he he'
// let mass = ['wgcfhu', 12, 'rtrfgyu', 44, 'bvghk']
// console.log(mass[5]);
// let fromTag = document.getElementsByTagName('h1')
// console.dir(fromTag)
// console.log[fromTag[0]];
// let gettem = document.querySelector('+id1')
// console.log('querySelector', gettem);
// let gettems = document.querySelectorAll('.class1')
// console.log('querySelectorAll', gettems);
// получение по Id
// let id = document.getElementById("id1");
// console.log(id);
// id.style.fontSize = "20px"
// id.style.color = "pink"

// let mass = ["wdqw", "dwdqdqw", 12, "wqedewq"]

// console.log(mass[5]);

// let fromTag = document.getElementsByTagName("h1")
// console.dir(fromTag)
// console.log(fromTag[0]);

// let fromClass = document.getElementsByClassName("class1")
// console.log(fromClass);

// Запрос_Селектора
// let getItem = document.querySelector(".list")
// getItem.insertAdjacentHTML("afterbegin", '<div class="item"></div>')
let click = document.querySelector('.light-switch')
let switcher = document.getElementById('switch')
let background = document.querySelector('.wrapper')
click.onclick = function() {
    console.log('АААА шрек');
    if(switcher.checked == true){
    background.style.backgroundImage = 'url(./assets/img/shrek.jpg.jpg)'  
    }
        else{
            background.style.backgroundImage = 'url(./assets/img/background.jpg)'
        }
}
let educator = document.querySelector('.choice-block__btn')
let cards = document.querySelector('.page-about__profile-list')
let masscards = [
    {
        tittle:'Hehehe',
        etu:'Huh',
        start: 1784,
        end:1884,
    },
    {
        tittle:'eheheH',
        etu:'Hah',
        start: 1784,
        end:1884,
    },
    {
        tittle:'EhhEhe',
        etu:'O_O',
        start: 1784,
        end:1884,
    },
]
educator.onclick = function(){
    console.log('Ура');
    cards.innerHTML = ''
    for (let i = 0; i < 3; i++) {

        
    
    cards.insertAdjacentHTML('afterbegin',            `<article class="profile-item"><h5>${masscards[i].tittle}</h5><div class="profile-item__bottom">  <h5>${masscards[i].etu}</h5>  <div class="profile-item__date">    <img src="./assets/img/calenadar.svg" alt="" />    <h6>${masscards[i].start} - ${masscards[i].end}</h6>  </div></div></article>`)
    }
}
let work = document.getElementById('work')
masscard = [
    {
        tittle:'Hehe',
        etu:'Huh',
        start: 1784,
        end:1884,
    },
    {
        tittle:'eheh',
        etu:'Hah',
        start: 1784,
        end:1884,
    },
    {
        tittle:'EhhE',
        etu:'O_O',
        start: 1784,
        end:1884,
    },
]
work.onclick = function(){
    console.log('Ару');
    cards.innerHTML = ''
    for (let i = 0; i < 3; i++) {

        
    
    cards.insertAdjacentHTML('afterbegin',            `<article class="profile-item"><h5>${masscard[i].tittle}</h5><div class="profile-item__bottom">  <h5>${masscard[i].etu}</h5>  <div class="profile-item__date">    <img src="./assets/img/calenadar.svg" alt="" />    <h6>${masscard[i].start} - ${masscard[i].end}</h6>  </div></div></article>`)
    }
}