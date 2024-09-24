criarCartao  (categoria,pergunta,resposta ) (

)
criarCartao( categoria,pergunta,resposta)(
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
)
cartao.innerHTML = 
`<div class="cartao_conteudo_pergunta"> 
<p> O que é JavaScript?</p>
</div>
<div class="cartao_conteudo_resposta">
<p> O Java Script é uma liguagem da programação</p>`
CSSContainerRule.appenChild(cartao)
