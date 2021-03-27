const loadProducts = (produtos,productId) => {
    const parentDiv = document.querySelector(productId)
    produtos.forEach(produto => {
    
    const html = `
    
    <article class="produto">
    <img src="${produto.image}" alt="" width="300">
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
            info.querySelector('#title').value = produto.title
            info.querySelector('#value').value = produto.value
            }
        }
                info.classList.contains('hide') == true ? info.classList.remove('hide') : info.classList.add('hide')
    
    
    }
    
    loadProducts(produtos, '#product-div')