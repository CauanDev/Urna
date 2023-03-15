const title = document.querySelector('.divisao-1-esquerda-type')
const images = document.querySelector('.divisao-1-direita')
const imagebig = document.querySelector('.div-1-direita-img img');
const imagesmall = document.querySelector('.div-1-direita-img-small')
const information = document.querySelector('.divisao-1-esquerda-other')
const divDigits = document.querySelector('.divisao-1-esquerda-numbers')
const squares = document.querySelector('.divisao-1-esquerda-numbers .number')
const votoBranco = document.querySelector('.voto-branco')
var soma = ''





function AtualizarInterface(n){
    
   n = parseInt(n)  
   soma = parseInt(soma)
  
    switch(n){
        
        case 1:{
           let teste = List[0].candidatos.find((a,index) =>a.ID == soma)
           if(teste != null ){
            imagebig.src = `${teste.Image}`
            images.style.display = 'flex'
            document.querySelector('.div-1-direita-img span').innerHTML = List[0].title
            information.style.display = 'flex'
            information.innerHTML = `Nome: ${teste.Name}<br>Partido: ${teste.Partido}`
            document.querySelector('.btn--confirma').addEventListener('click',()=>{
                List[0].candidatos.find((a) =>{
                    if(a.ID == soma ){
                        votoBranco.style.display = 'none'
                        a.Votos++;
                        Prefeito();
                    }
                    else if(votoBranco.style.display == 'flex'){
                        Prefeito();
                    }
                })
            })
           
            
            
           }
           else{
                votoBranco.style.display = 'flex'
           }
           
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
    divDigits.innerHTML = ''
    for(let i=0;i<x;i++)
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

function Digitar(content,n){
    let numero = document.querySelector('.number.pisca')
   
    if(numero !== null)
    {
        numero.innerHTML = content;       
        soma += `${content}`   
        console.log(soma)     
        numero.classList.remove('pisca')
        if(numero.nextElementSibling!=null){
            numero.nextElementSibling.classList.add('pisca');
        }
         else{            
            console.log(n)
            AtualizarInterface(n);
         }
    }
    
    

        
}

function Vereador()
{
    title.innerHTML = 'VEREADOR';
    images.style.display = 'none';
    information.style.display = 'none';
    imagesmall.style.display = 'none'
    votoBranco.style.display ='none'
    Digits(5);      
    atribuir(1)
    document.querySelector('.btn--corrige').addEventListener('click',()=>{
        soma = '';
        votoBranco.style.display = 'none'
        divDigits.innerHTML= ''
        Digits(5); 
    })

    document.querySelector('.btn--branco').addEventListener('click',()=>{
        votoBranco.style.display = 'flex'
        divDigits.innerHTML= ''
        document.querySelector('.btn--confirma').addEventListener('click',()=>{
            votoBranco.style.display = 'none'
            Prefeito();
        })
        
    })
   
    
    
    
    
}

function Prefeito(){
    title.innerHTML = 'PREFEITO';
    Digits(2); 
}

Vereador()
