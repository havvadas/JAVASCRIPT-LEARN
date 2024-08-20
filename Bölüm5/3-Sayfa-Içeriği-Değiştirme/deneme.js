// const pdeğeri=document.querySelector('p');
// console.log(pdeğeri.innerText);

// pdeğeri.innerText='havva daş Fullstack Developer';

const pdeğeri=document.querySelectorAll('p');
pdeğeri.forEach(a =>{
    console.log(a.innerText);
    a.innerText +=' yeni alan';
})


const icerik=document.querySelector('.içerik');
console.log(icerik.innerHTML);
icerik.innerHTML +=' <h2>Vue JS, React JS,Angular JS</h2>';

const ogrenciler=['havva','tuba','elif'];
ogrenciler.forEach(ogrencı=>{
    icerik.innerHTML+=`<p>${ogrencı}</p>`;
})
