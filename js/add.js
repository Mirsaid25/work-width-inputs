// ЕСЛИ ИЗУЧАЕТЕ VUEX
// Показывать задачи по массиву во VUEX
// state: {
//     todos: []
// }

// ЕСЛИ VANILLA JS
// Показывать задачи по массиву
// в переменной arr
// Задачи, которые были выделены как активные - должны оставаться активными при обновлении страницы и переходе на другую страницу тоже

// ВСЕМ
// Менять ключ completed при нажатии на задачу
// Ключ left означает то, сколько дней осталось задаче (0 - сегодня, 1 - завтра и тд)

let arr = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false,
        left: 12
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false,
        left: 0
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false,
        left: 1
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true,
        left: 41
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false,
        left: 22
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false,
        left: 21
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false,
        left: 4
    },
    {
        "userId": 1,
        "id": 13,
        "title": "et doloremque nulla",
        "completed": false,
        left: 3
    },
    {
        "userId": 1,
        "id": 14,
        "title": "repellendus sunt dolores architecto voluptatum",
        "completed": true,
        left: 2
    },
    {
        "userId": 1,
        "id": 15,
        "title": "ab voluptatum amet voluptas",
        "completed": true,
        left: 8
    },
    {
        "userId": 1,
        "id": 16,
        "title": "accusamus eos facilis sint et aut voluptatem",
        "completed": true,
        left: 6
    },
    {
        "userId": 1,
        "id": 17,
        "title": "quo laboriosam deleniti aut qui",
        "completed": true,
        left: 4
    },
    {
        "userId": 1,
        "id": 18,
        "title": "dolorum est consequatur ea mollitia in culpa",
        "completed": false,
        left: 2
    },
    {
        "userId": 1,
        "id": 19,
        "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
        "completed": true,
        left: 0
    },
    {
        "userId": 1,
        "id": 20,
        "title": "ullam nobis libero sapiente ad optio sint",
        "completed": true,
        left: 0
    },
    {
        "userId": 2,
        "id": 21,
        "title": "suscipit repellat esse quibusdam voluptatem incidunt",
        "completed": false,
        left: 0
    },
    {
        "userId": 2,
        "id": 22,
        "title": "distinctio vitae autem nihil ut molestias quo",
        "completed": true,
        left: 1
    },
    {
        "userId": 2,
        "id": 23,
        "title": "et itaque necessitatibus maxime molestiae qui quas velit",
        "completed": false,
        left: 1
    },
    {
        "userId": 2,
        "id": 24,
        "title": "adipisci non ad dicta qui amet quaerat doloribus ea",
        "completed": false,
        left: 23
    },
    {
        "userId": 2,
        "id": 25,
        "title": "voluptas quo tenetur perspiciatis explicabo natus",
        "completed": true,
        left: 1
    },
    {
        "userId": 2,
        "id": 26,
        "title": "aliquam aut quasi",
        "completed": true,
        left: 26
    },
    {
        "userId": 2,
        "id": 27,
        "title": "veritatis pariatur delectus",
        "completed": true,
        left: 29
    },
    {
        "userId": 2,
        "id": 28,
        "title": "nesciunt totam sit blanditiis sit",
        "completed": false,
        left: 12
    },
    {
        "userId": 2,
        "id": 29,
        "title": "laborum aut in quam",
        "completed": false,
        left: 6
    },
    {
        "userId": 2,
        "id": 30,
        "title": "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
        "completed": true,
        left: 12
    },
    {
        "userId": 2,
        "id": 31,
        "title": "repudiandae totam in est sint facere fuga",
        "completed": false,
        left: 52
    },
    {
        "userId": 2,
        "id": 32,
        "title": "earum doloribus ea doloremque quis",
        "completed": false,
        left: 21
    },
    {
        "userId": 2,
        "id": 33,
        "title": "sint sit aut vero",
        "completed": false,
        left: 41
    },
    {
        "userId": 2,
        "id": 34,
        "title": "porro aut necessitatibus eaque distinctio",
        "completed": false,
        left: 31
    },
    {
        "userId": 2,
        "id": 35,
        "title": "repellendus veritatis molestias dicta incidunt",
        "completed": true,
        left: 1
    }
]

let forToday = document.querySelector(".forToday")
let tomorrow = document.querySelector(".tomorrow")
let later = document.querySelector(".later")

let span1 = document.querySelector(".span1")
let span2 = document.querySelector(".span2")

let h1_todos = document.querySelector(".h1_todos")
let p_title = document.querySelector(".p_title")

let h2_1 = document.querySelector(".h2_1")
let h2_2 = document.querySelector(".h2_2")
let h2_3 = document.querySelector(".h2_3")


function reload(arr ,forToday , tomorrow , later) {
    forToday.innerHTML = ""
    tomorrow.innerHTML = ""
    later.innerHTML = ""

    let inpt =[]
    let inpt1 = JSON.parse(localStorage.getItem("info_inp"))
    for(let item of arr){
        let block = document.createElement("div")
        let br1 = document.createElement("br")
        let br2 = document.createElement("br")
        let input = document.createElement("input")
        let h3 = document.createElement("h3")
        let p = document.createElement("p")
        let span = document.createElement("span")

        block.classList.add("block")

        input.type = "checkbox"
        for(let item2 of inpt1){
            if(item2.id === item.id && item2.checked == true){
                input.checked
            }
        }


        h3.innerHTML = "Buy S Plaid!"
        p.innerHTML = item.title
        span.innerHTML = `Left ${item.left}`

        block.append(input, h3, br1, p , br2, span)
        if(item.left === 0){
            forToday.append(block)
        } else if(item.left === 1){
            tomorrow.append(block)
        } else {
            later.append(block)
        }

        input.onchange=()=>{
            console.log(input.checked , item.id);
            let lis = {
                checked: input.checked,
                id: item.id
            }
            inpt.push(lis)
            localStorage.setItem("info_inp", JSON.stringify(inpt))
        }
    }
}


reload(arr, forToday, tomorrow, later)

span1.onclick= () =>{
    span2.classList.remove("active")
    span1.classList.add("active")
    reload(arr, forToday, tomorrow, later)
    h1_todos.innerHTML = "ALL TODOS"
    p_title.style.display = "block"
    h2_1.style.display = "block"
    h2_2.style.display = "block"
    h2_3.style.display = "block"
    tomorrow.style.display = "grid"
    later.style.display = "grid"
}

span2.onclick= () =>{
    span1.classList.remove("active")
    span2.classList.add("active")
    reload(arr, forToday, tomorrow, later)
    h1_todos.innerHTML = "ONLY TODAY TODOS"
    p_title.style.display = "none"
    h2_1.style.display = "none"
    h2_2.style.display = "none"
    h2_3.style.display = "none"
    tomorrow.style.display = "none"
    later.style.display = "none"
}