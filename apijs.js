let  country=document.getElementById('country_name');
country.addEventListener('blur',func);
let country_did=document.getElementById('country_1');
country_did.addEventListener('click',funci);


function funci(){
    country.value=country_did.innerHTML;
    func();
}


function func(){
    const request= new XMLHttpRequest();
    request.open('GET',`https://restcountries.com/v3.1/name/${country.value}`)
    request.send();
    request.addEventListener('load',function(){
        let res=JSON.parse(request.responseText);
        for(let x in res){
            
            country_did.innerHTML=""; 
            document.getElementById('flag').innerHTML='';
            let currency=Object.values(res[x].currencies)[0].name;
            let currency_sym=Object.values(res[x].currencies)[0].symbol;
            let name=res[x]['name']['common'];
            if(name.toLowerCase()==country.value.toLowerCase()){
                document.getElementById('flag').innerHTML+=` <h4 style='display:inline'>${res[x]['name']['common']}</h4> <br> Capital  : ${res[x].capital} <br> Flag : <h3 style='display:inline' >${res[x].flag}</h3><br> Currency  : ${currency} ( ${currency_sym} ) <br> Population  : ${res[x]['population']}  <br><br>`
            }
            else if (name){
                document.getElementById('flag').innerHTML='Did You Mean?? '
                country_did.innerHTML=name; 
            }
        }       
    })
}