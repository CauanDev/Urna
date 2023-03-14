const title = document.querySelector('.divisao-1-esquerda-type')
const images = document.querySelector('.divisao-1-direita')
const information = document.querySelector('.divisao-1-esquerda-other')
const divDigits = document.querySelector('.divisao-1-esquerda-numbers')
const squares = document.querySelector('.divisao-1-esquerda-numbers .number')
var index;
var soma='';

function AtualizarInterface(n){
   n = parseInt(n)
   soma = parseInt(soma)
    switch(n){
        case 1:{
           let teste = List[0].candidatos.find((a) =>a.ID == soma)
                  
            break;
        }
    }
}

function atribuir(n)
{
    const botoes = document.querySelectorAll('.teclado--linha .teclado--botao').forEach((e)=>
{
    e.addEventListener('click',()=>
    {
        
        Digitar(e.textContent,n)

        
        
    })
})
}
function Digits(x)
{    
    for(let i=0;i<5;i++)
    {      
        if(i==0)
        {
          divDigits.innerHTML+= '<div class="number pisca"></div>';            
        }
        else
        {
            divDigits.innerHTML+= '<div class="number"></div>';
        }      
    }  
}

function Digitar(n){
    let numero = document.querySelector('.number.pisca')
    
    if(numero !== null)
    {
        numero.innerHTML = n;       
        soma += `${n}`        
        numero.classList.remove('pisca')
        if(numero.nextElementSibling!=null){
            numero.nextElementSibling.classList.add('pisca');
        }
         else{            
            AtualizarInterface(n);
         }
    }
    
    

        
}

function Vereador()
{
    title.innerHTML = 'Vereador';
    images.style.display = 'none';
    information.style.display = 'none';
    Digits(5);      
    atribuir(1)
   
    
    
    
    
}


Vereador()
