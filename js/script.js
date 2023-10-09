let mioDiv = document.getElementById('testo');
console.dir(mioDiv)

let km = parseInt(prompt('numero di chilometri:'))
let età = parseInt(prompt('età del passeggero:'))
let prezzo_km = 0.21

console.log('numero di chilometri', km, 'età del passeggero', età)


if(isNaN(km) || isNaN(età))
{
    mioDiv.innerHTML = 'devi inserire dei numeri !';
    setTimeout(function()
    {
        window.location.reload();
    }, 2000);
}

if(età >= 65)
{
    console.log(prezzo_km * km * 0.6)
}

else if(età < 18)
{
    console.log(prezzo_km * km * 0.8)
}

else
{
    console.log(prezzo_km * km)
}