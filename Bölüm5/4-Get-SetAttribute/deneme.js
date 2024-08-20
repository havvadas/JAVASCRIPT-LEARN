const link=document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.bbc.co.uk/learningenglish/english/features/6-minute-english_2024/ep-240815');
link.textContent='Ingelısh Time';


const pDegeri=document.querySelector('p');
console.log(pDegeri.getAttribute('class'));
pDegeri.setAttribute('class','error');
pDegeri.setAttribute('style','color:green');