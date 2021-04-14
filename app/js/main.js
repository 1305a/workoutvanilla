const quantity = document.querySelector('.input-quantity')
const taskTable = document.querySelector('.table')
const taskArray = ['Отжимание','Планка (мин)','Скакалка','Бицепс','Трицепс','Приседания','Колесо','Пресс','Эспандер','По желанию']
const playerArray = []


function objectForming(quantityNumber) {
    playerArray.length = 0
    for (let index = 0; index < quantityNumber; index++) {
        const altName = `Игрок ${index+1}`
        const player = {'name':'','altName':altName}
        taskArray.forEach(element => {
            player[element] = 0
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

quantity.addEventListener ('change', (event) => {
    objectForming(quantity.valueAsNumber)
})

objectForming(quantity.valueAsNumber)