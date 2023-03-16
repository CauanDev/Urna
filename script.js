const title = document.querySelector('.divisao-1-esquerda-type')
const images = document.querySelector('.divisao-1-direita')
const imagebig = document.querySelector('.div-1-direita-img img');
const imagesmall = document.querySelector('.div-1-direita-img-small')
const information = document.querySelector('.divisao-1-esquerda-other')
const divDigits = document.querySelector('.divisao-1-esquerda-numbers')
const squares = document.querySelector('.divisao-1-esquerda-numbers .number')
const votoBranco = document.querySelector('.voto-branco')
const botoes = document.querySelectorAll('.teclado--linha .teclado--botao')
var soma = ''
var etapa;
var indice;




document.querySelector('.btn--branco').addEventListener('click',()=>{
    information.innerHTML = ''
    votoBranco.style.display = 'flex'
    divDigits.innerHTML= ''
    document.querySelector('.btn--confirma').addEventListener('click',()=>{
        votoBranco.style.display = 'none'

        if(etapa == 2){
            alert('Obrigado pelo seu voto!');
          Vereador();
        }
       if(etapa == 1){
        alert('Obrigado pelo seu voto!');
          Prefeito();
       }
        
    })
    
})
document.querySelector('.btn--corrige').addEventListener('click',()=>{
    soma = '';
    images.style.display = 'none'
    votoBranco.style.display = 'none'
    divDigits.innerHTML= ''
    Digits(indice); 
})

function AtualizarInterface(n){
    
   n = parseInt(n)  
   
   
  
    switch(n){
        
        case 1:
            somaUp = parseInt(soma)
            teste = List[0].candidatos.find((a,index) =>a.ID == somaUp)
            if(teste != null ){
            imagebig.src = `${teste.Image}`
            images.style.display = 'flex'
            document.querySelector('.div-1-direita-img span').innerHTML = List[0].title
            information.style.display = 'flex'
            information.innerHTML = `Nome: ${teste.Name}<br>Partido: ${teste.Partido}`
          
           
            
            
           }
           else{
                votoBranco.style.display = 'flex'
           }
           
           document.querySelector('.btn--confirma').addEventListener('click',()=>{
            List[0].candidatos.find((a) =>{
                if(a.ID == somaUp ){
                    votoBranco.style.display = 'none'
                    a.Votos++;
                    Prefeito();
                }
                else{
                    votoBranco.style.display = 'none'
                    Prefeito();
                }
            })
        })
        
        break;
        
        
        case 2:
            divDigits.style.display = 'flex'
            votoBranco.style.display = 'none'
            somaUp = parseInt(soma);
            teste = List[1].candidatos.find((a,index) =>a.ID == somaUp)
           
            
            if(teste != null ){

            
            imagebig.src = `${teste.FirstImage}`
            document.querySelector('.div-1-direita-img span').innerHTML = List[1].title
            document.querySelector('.div-1-direita-img-small img').src = `${teste.SecondImage}`
            document.querySelector('.div-1-direita-img-small span').innerHTML = "Vice"
            images.style.display = 'flex'
            document.querySelector('.div-1-direita-img span').innerHTML = List[1].title
            information.style.display = 'flex'
            information.innerHTML = `Nome: ${teste.Name}<br>Partido: ${teste.Partido}`
            document.querySelector('.btn--confirma').addEventListener('click',()=>{
                List[1].candidatos.find((a) =>{
                    if(a.ID == somaUp ){
                        votoBranco.style.display = 'none'
                        a.Votos++;
                        alert('Obrigado pelo seu voto!');
                        document.querySelector('.tela').innerHTML = ''
                        
                    }
                    else{
                        alert('Obrigado pelo seu voto!');
                        document.querySelector('.tela').innerHTML = ''
                        
                    }
                    
                })
            })
           
            
            
           }
           else{
                votoBranco.style.display = 'flex'
                
                document.querySelector('.btn--confirma').addEventListener('click',()=>{
                    alert('Obrigado pelo seu voto!');
                    document.querySelector('.tela').innerHTML = ''
                    
                })
           }


        
        break;
    }
   
 
}

function atribuir()
{
    
     botoes.forEach((e)=>
{
    e.addEventListener('click',()=>
    {
        
        Digitar(e.textContent,etapa)
        
        
        
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
    title.innerHTML = 'VEREADOR';
    images.style.display = 'none';
    information.style.display = 'none';
    imagesmall.style.display ='none'
    votoBranco.style.display ='none'
    etapa = 1;
    indice = 5;
    Digits(indice);      
    atribuir()
    

   
   
    
    
    
    
}

function Prefeito(){
    imagesmall.style.display ='flex'
    images.style.display = 'none'
    information.style.display = 'none'
    etapa = 2;
    title.innerHTML = 'PREFEITO';
    indice = 2;
   
    
   
    Digits(indice);    
    soma = '';
    
    

    
   
    
    
    
}

Vereador()
