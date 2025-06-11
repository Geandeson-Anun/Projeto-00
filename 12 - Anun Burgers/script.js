const list = document.querySelector ('ul')
const buttonShowAll = document.querySelector ('.show-all')
const buttonMapAll = document.querySelector ('.map-all')
const sumAll = document.querySelector ('.sum-all')
const veganAll = document.querySelector('.vegan-all')

function formatCurrency(value){
    const newValue = value.toLocaleString('pt-br',{
        style: 'currency',
        currency: 'BRL'
    })
    return newValue
}

function showAll(productsArrey) {
    let myLi = ''

    productsArrey.forEach ((product)=> {

    myLi += `
         <li>
        <img src=${product.src} >
            <p>${product.name}</p>
            <p class="item-price">${formatCurrency(product.price)}</p>
        </li>
        ` 
    })

    list.innerHTML = myLi
}

function mapAllItens() {
    const newPrices = menuOptions.map((product) => ({
    ...product, price: product.price * 0.9
    }))

    showAll(newPrices)
}

function sumAllItems(){
const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);

    list.innerHTML =
`
         <li>
        
            <p> O valor total dos itens é de ${formatCurrency(totalValue)}</p>
        </li>
        ` 

}
function veganAllItens(){
const filteredMenu = menuOptions.filter((burgers) => burgers.vegan);

showAll(filteredMenu)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItens )
sumAll.addEventListener('click', sumAllItems)
veganAll.addEventListener('click', veganAllItens)

