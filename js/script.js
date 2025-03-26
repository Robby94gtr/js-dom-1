const lampOn = document.getElementById('lamp-on');
const lampOff = document.getElementById('lamp-off');
const btn = document.querySelector('.btn'); 

btn.addEventListener('click', ()=>{
         if (lampOff.className === 'd-block') {
             lampOff.className = 'd-none'; 
             lampOn.className = 'd-block';  
              btn.innerText = `Accendi`
             btn.innerText = 'Spegni'
         }
         else {
             lampOff.className = 'd-block';  
             lampOn.className = 'd-none';  
             btn.innerText = 'Accendi'
         }
     } )