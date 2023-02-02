document.addEventListener('DOMContentLoaded', function() {

    document.querySelector("#fiat-currency").onsubmit = function() {
    {  
      var myHeaders = new Headers();
      myHeaders.append("apikey", "Cmduy7W6307iHxA5b1kgFEymg468JqGB");

      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
      };

        fetch('https://api.apilayer.com/exchangerates_data/latest?base=USD', requestOptions)
        

        .then(response => response.json())
        .then(data => {
          const currency = document.querySelector('#currency').value.toUpperCase();
          const rate = data.rates[currency];
          if (rate !== undefined) {
            document.querySelector('#result').innerHTML = `1 USD is equal to ${rate.toFixed(3)} ${currency}.`; 
          } else
          {
            document.querySelector('#result').innerHTML = 'Invalid Currency.';
          }
          
        })
        .catch(error => {
            console.log('Error', error);
        });
      
      return false;
      }
        
    }});
    