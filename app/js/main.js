const quantity = document.querySelector('.input-quantity')
const taskTable = document.querySelector('.table')
const calculateButton = document.querySelector('.calculate-button')
const testButton = document.querySelector('.test-button')
const taskArray = ['Отжимание','Планка (мин)','Скакалка','Бицепс','Трицепс','Приседания','Колесо','Пресс','Эспандер','По желанию']
const taskArrayTest = [20,2,40,30,20,30,5,30,20,10]
const playerArray = []


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
                console.log(ind)
            }
            else {
                player[element] = 0
            }
        })
        playerArray.push(player)
    }
    //console.log(playerArray)
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
        //divFirstPlayer.innerHTML = ?(playerArr[j].altName,
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
            input.dataset.player = j
            input.dataset.task = taskArr[k]
            divRow.appendChild(input)
        }
    }
}

function calculate() {
    
}

quantity.addEventListener ('change', (event) => {
    objectForming(quantity.valueAsNumber)
})


calculateButton.addEventListener ('click', (event) => {
    calculate()
})

testButton.addEventListener ('click', (event) => {
    quantity.valueAsNumber = 3
    objectForming(quantity.valueAsNumber,true)
})

objectForming(quantity.valueAsNumber)