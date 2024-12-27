
let p = document.querySelector('p');
document.querySelector('button').addEventListener('click', ()=>{
    let texto = document.querySelector('input').value;
    reverseString(texto);
})

function reverseString(parametro){
    let parte = parametro.split('');
    let reverso = parte.reverse();
    let reversoCom = reverso.join('');
    if(parametro == reversoCom){
        p.innerHTML = `${parametro} é um palindromo`
    }
    else{
        p.innerHTML = `${parametro} não é um palindromo<br>
        <span>${reversoCom}</span>`
    }
}
