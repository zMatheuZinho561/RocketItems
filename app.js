const loadProducts = (produtos,productId) => {
const parentDiv = document.querySelector(productId)
produtos.forEach(produto => {

const html = `

<article class="produto">
<img src="${produto.image}" alt="" width="230">
<h4>${produto.title}</h4>
<p>${produto.title1}</p>
<p>${produto.value}<br><img src="./imagens/credits.png"  class="credito" width="30"></p>
<button id="" class="btnc" onclick="modalTrigger(${produto.id})">Comprar</button>
</article>


`


    parentDiv.insertAdjacentHTML('beforeend', html)
})


}
const modalTrigger = (productId)=>{

    const info = document.querySelector('.modal')
    
    if(productId != null){
        const produto = produtos.filter(produto => produto.id == productId )[0]
        if(produto != null){
            window.alert('Por favor aceite para comprar!')
        info.querySelector('#title').value = produto.title
        info.querySelector('#value').value = produto.value
        info.querySelector('#cor').value = produto.title1
        }
    }
            info.classList.contains('hide') == true ? info.classList.remove('hide') : info.classList.add('hide')


}
function capthac(){

    window.alert('Por favor aceita para confirmar a compra!')
    
    
    }

const search =(products, searchTerm) => products.filter(product=> product.title3.includes(`${searchTerm}`)) ||
products.title3.includes(`${searchTerm}`) 



const loadSearch = (form, productsDivId) =>{
    const productsDiv = document.querySelector(productsDivId)
    const inputSearch = form.querySelector('#inputSearch')


    form.addEventListener('submit' ,(e) =>{
       e.preventDefault()  
if(inputSearch.value != ''){
       

productsDiv.querySelectorAll('.produto').forEach(produto=>{

    produto.remove()
})
const  results =search(produtos, inputSearch.value)

results.forEach(produto => {

    const html = `
    
    <article class="produto">
    <img src="${produto.image}" alt="" width="230">
    <h4>${produto.title}</h4>
    <p>${produto.title1}</p>
    <p>${produto.value}<br><img src="./imagens/credits.png"  class="credito" width="30"></p>
    <button id="" class="btnc" onclick="modalTrigger(${produto.id})">Comprar</button>
    </article>
    
    
    `
    
    
       productsDiv.insertAdjacentHTML('beforeend', html)
    })
    }
})

}


loadProducts(produtos, '#product-div')
loadSearch(document.querySelector('#formSearch'),'#product-div')

