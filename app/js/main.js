const quantity = document.querySelector('.input-quantity')
const taskTable = document.querySelector('.table')
const calculateButton = document.querySelector('.calculate-button')
const testButton = document.querySelector('.test-button')
const difText = document.querySelector('.difficulty-text')
const taskArray = ['Отжимание','Планка (мин)','Скакалка','Бицепс','Трицепс','Приседания','Колесо','Пресс','Эспандер','По желанию']
const taskArrayTest = [20,2,40,30,20,30,5,30,20,10]
const playerArray = []
let taskNumbers = 5


function objectForming(quantityNumber,test) {
    playerArray.length = 0
    for (let index = 0; index < quantityNumber; index++) {
        const altName = `Игрок ${index+1}`
        const player = {'name':'','altName':altName}
        
        taskArray.forEach((element, ind) => {
            if (test) {
                player[element] = taskArrayTest[ind]
                if (index==0) {
                    player['name'] = 'Андрей'
                }
                else if (index==1) {
                    player['name'] = 'Миша'
                }
                else if (index==2) {
                    player['name'] = 'Ренат'
                }
            }
            else {
                player[element] = 0
            }
        })
        playerArray.push(player)
    }
    tableForming(taskArray,playerArray)
}

function tableForming(taskArr,playerArr) {
    while (taskTable.firstChild) {
        taskTable.removeChild(taskTable.firstChild);
    }
        
    let divColumnTask = document.createElement('div')
    divColumnTask.className = 'column-task'
    taskTable.appendChild(divColumnTask)
    let divFirstTask = document.createElement('div')
    divFirstTask.className = 'row-task'
    divFirstTask.innerHTML = 'Упражнения'
    divColumnTask.appendChild(divFirstTask)
    for (let i = 0; i < taskArr.length; i++) {
        let div = document.createElement('div')
        div.className = 'row-task'
        div.innerHTML = taskArr[i]
        divColumnTask.appendChild(div)
    }

    for (let j = 0; j < playerArr.length; j++) {
        let divColumnPlayer = document.createElement('div')
        divColumnPlayer.className = 'column-task'
        taskTable.appendChild(divColumnPlayer)

        let divFirstPlayer = document.createElement('div')
        divFirstPlayer.className = 'row-task'
        divFirstPlayer.innerHTML = playerArr[j].name.length > 0 ? playerArr[j].name : playerArr[j].altName
        divColumnPlayer.appendChild(divFirstPlayer)

        for (let k = 0; k < taskArr.length; k++) {
            let divRow = document.createElement('div')
            divRow.className = 'row-player'
            divColumnPlayer.appendChild(divRow)
            let input = document.createElement('input')
            input.value = playerArr[j][taskArr[k]]
            input.className = 'row-input'
            input.type = "number"
            // input.dataset.player = j
            // input.dataset.task = taskArr[k]
            input.id = playerArr[j].altName + taskArr[k]
            divRow.appendChild(input)
        }
    }
}

 function setDifficulty (difLevel) {

    if (difLevel === 'easy') {
        taskNumbers = 3
        difText.innerHTML = `3 задания / повторений 70-85%`
        difText.classList.remove('difficulty-text-yellow','difficulty-text-red')
        difText.classList.add('difficulty-text-green')
    }
    else if (difLevel === 'normal') {
        taskNumbers = 5
        difText.innerHTML = `5 заданий / повторений 80-95%`
        difText.classList.remove('difficulty-text-green','difficulty-text-red')
        difText.classList.add('difficulty-text-yellow')
    }
    else if (difLevel ==='hard') {
        taskNumbers = 7
        difText.innerHTML = '7 заданий / повторений 90-105% / Успехов!:)'
        difText.classList.remove('difficulty-text-yellow','difficulty-text-green')
        difText.classList.add('difficulty-text-red')
    }
}

function calculate() {
    for (let pl = 0; pl < playerArray.length; pl++) {
        const randomArray = []
        
        for (let i = 0; i < taskArray.length; i++) {
            randomArray.push(taskArray[i])
        }
            randomArray.sort(function(){ 
                return 0.5 - Math.random()
            })
        
            for (let ra = 0; ra < taskNumbers; ra++) {
            const taskInput = document.getElementById(playerArray[pl].altName+randomArray[ra])
            console.log(playerArray[pl].name, randomArray[ra],taskInput.valueAsNumber)
        }
    }
}

quantity.addEventListener ('change', (event) => {
    event.preventDefault()
    objectForming(quantity.valueAsNumber)
})

const difficulty = document.querySelectorAll('input[name="difficulty"]');
    [...difficulty].forEach(function(item) {
        item.addEventListener('change',  (event) => {
            event.preventDefault()
            setDifficulty (item.value)
        })
    })

calculateButton.addEventListener ('click', (event) => {
    event.preventDefault()
    calculate()
})

testButton.addEventListener ('click', (event) => {
    event.preventDefault()
    quantity.valueAsNumber = 3
    objectForming(quantity.valueAsNumber,true)
})

setDifficulty('normal')
objectForming(quantity.valueAsNumber)
