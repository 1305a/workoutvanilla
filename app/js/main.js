const quantity = document.querySelector('.input-quantity')
const taskArray = ['Отжимание','Планка (мин)','Скакалка','Бицепс','Трицепс','Приседания','Колесо','Пресс','Эспандер','По желанию']

function formingObjects(quantityNumber) {
    for (let index = 0; index < quantityNumber; index++) {
        console.log(quantityNumber)
        const altName = `Игрок ${index+1}`
        const player = {'name':'','altName':altName}
        taskArray.forEach(element => {
            player[element] = 0
        })
        console.log(player)
    }
}

quantity.addEventListener ('change', (event) => {
    formingObjects(quantity.valueAsNumber)
})

formingObjects(quantity.valueAsNumber)