// // // const objectItems = [{
// // //    title: 'привет',
// // //    price: 28,
// // //    color: 'blue',
// // // },
// // // {
// // //    title: 'рад',
// // //    price: 40,
// // //    color: 'red',
// // // },
// // // {
// // //    title: 'шалом',
// // //    price: 60,
// // //    color: 'yellow',
// // // },
// // // ];

// // // function funcObj(s) {
// // //    let titleNode = document.querySelector('.header__titles')
// // //    let priceNode = document.querySelector('.header__price')
// // //    let colorNode = document.querySelector('.header__colors')
// // //    s.forEach(el => {
// // //       let pt = document.createElement('p')
// // //       let p = document.createElement('p')
// // //       let div = document.createElement('div')
// // //       pt.classList.add('title')
// // //       p.classList.add('price')
// // //       div.classList.add('color')
// // //       div.style.background = el.color
// // //       div.addEventListener('click', function () {
// // //          titleNode.innerHTML = el.title
// // //          priceNode.innerHTML = el.price
// // //       })
// // //       titleNode.append(pt)
// // //       priceNode.append(p)
// // //       colorNode.append(div)
// // //    });
// // // }
// // // funcObj(objectItems)
// // // async function asincF(w) {
// // //    let fuc = await (w + 4)
// // //    console.log(fuc)
// // // }
// // // asincF(6)


// // const inputsNode = document.querySelectorAll('.header__input')
// // const buttonNode = document.querySelector('.header__button')
// // const inputNode = document.getElementById('result')
// // function funcRes() {
// //    if (inputNode.value !== 0) {
// //       let str = inputNode.value;
// //       let arr = str.split(' ');
// //       for (let i = 0; i < arr.length; i++) {
// //          // inputsNode[f].value = arr[i]
// //          console.log(arr[i])
// //       }
// //    }
// //    // if (inputNode.value == 0) {
// //    //    inputNode.placeholder = 'введите ваши данные'
// //    //    for (var f = 0; f < inputsNode.length; f++) {
// //    //       inputsNode[f].value = ''
// //    //    }
// //    // }

// // }

// // inputNode.addEventListener('blur', funcRes)
// const obj = [{
//    name: 'Гарик',
//    fam: 'Бесаев',
//    otch: 'Сосланович',
//    age: '28 лет',
// },
// {
//    name: 'Игорь',
//    fam: 'Меняев',
//    otch: 'Игоревич',
//    age: '18 лет',
// },
// {
//    name: 'Артур',
//    fam: 'Хитяев',
//    otch: 'Виняевич',
//    age: '43 лет',
// }
// ]
let paragrafNOde = document.getElementById('para')
let colorsStr = ['один', 'два', 'три']
let linkNode = document.querySelector('.link')
let i = 1;
let inpNode = document.querySelector('.header__input')
let checkNode = document.querySelectorAll('.checkbox')
// checkNode.addEventListener('click', func)
let listNode = document.querySelectorAll('.list')
let buttonNode = document.querySelectorAll('.button')
buttonNode.forEach(el => {
   el.addEventListener('click', function () {
      let str = el.closest('.list')
      str.style.display = 'none'
   })
})

function func() {

}
func()








