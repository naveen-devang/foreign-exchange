document.addEventListener('DOMContentLoaded', function() {

  const currency_one = document.getElementById('from');
  const amount = document.getElementById('amnt');
  const currency_two = document.getElementById('to');

    document.querySelector("#crypto-currency").onsubmit = function() {
    {  
      const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '095753a516mshdef233fd49dca49p1495e2jsnb39acf8b0594',
        'X-RapidAPI-Host': 'coinapi.p.rapidapi.com'
      }
    };
      
        const from = currency_one.value.toUpperCase();
        const to = currency_two.value.toUpperCase();
        const amnt = amount.value;

        fetch(`https://coinapi.p.rapidapi.com/v1/exchangerate/${from}/${to}`, options)
        

        .then(response => response.json())
        .then(response => console.log(response))
        .then(data => {
          const rates = data.rate;
          const final = rates*amnt;
          if (final !== undefined) {
            document.querySelector('#result').innerHTML = `${amnt} ${from} is equal to ${final.toFixed(3)} ${to}.`; 
          } else
          {
            document.querySelector('#result').innerHTML = 'Invalid Currency.';
          }
          
        })
        .catch(error => {
            console.log('Error', error);
        })

      
      return false;
      }
        
    }});
    
  