const list = document.querySelector('ul')

let myLi = ''


function showProducts() {

    myLi = ''

    menuOptions.forEach(shirt => {

        myLi += `   
       <li>
           <img src=${shirt.src}>
           <p>Season ${shirt.season}</p>
           <p>${shirt.price.toFixed(2)} R$</p>
       </li>
       `
    })

    list.innerHTML = myLi
}


function showDiscount() {

    myLi = ''

    const discount = menuOptions.map(item => {

        return myLi += `   
        <li>
            <img src=${item.src}>
            <p>Season ${item.season}</p>
            <p>50% OFF - ${(item.price / 100 * 50).toFixed(2)} R$</p>
        </li>
        `

    })

    list.innerHTML = myLi
}


function showTotalValue() {

    const totalValue = menuOptions.reduce((acumulador, valorAtual) => {

        return acumulador + valorAtual.price

    }, 0)

    myLi = ''
    myLi = `<li>
        <p>Valor Total = R$${totalValue.toFixed(2)}</p>
        </li>`

    list.innerHTML = myLi
}

function showFeminine() {

    const feminine = menuOptions.filter(item => {

        if (item.feminino === true) {

            myLi = ''
            return myLi += `   
            <li>
                <img src=${item.src}>
                <p>Season ${item.season}</p>
                <p>${item.price.toFixed(2)} R$</p>
            </li>
            `

        } else {
            return false
        }

    })

    list.innerHTML = myLi
}