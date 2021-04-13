const quantity = document.querySelector('.input-quantity')
const taskArray = ['Отжимание','Планка (мин)','Скакалка','Бицепс','Трицепс','Приседания','Колесо','Пресс','Эспандер','По желанию']
const playerArray = []

function formingObjects(quantityNumber) {
    playerArray.length = 0
    for (let index = 0; index < quantityNumber; index++) {
        const altName = `Игрок ${index+1}`
        const player = {'name':'','altName':altName}
        taskArray.forEach(element => {
            player[element] = 0
        })
        playerArray.push(player)
    }
    console.dir(playerArray)
}

function formingTable() {

}


quantity.addEventListener ('change', (event) => {
    formingObjects(quantity.valueAsNumber)
})

formingObjects(quantity.valueAsNumber)