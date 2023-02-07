document.addEventListener('DOMContentLoaded', function() {

  const currency_one = document.getElementById('from');
  const amount = document.getElementById('amnt');
  const currency_two = document.getElementById('to');

    document.querySelector("#crypto-currency").onsubmit = function() {
    {  
      var options = {
        "method": "GET",
        "headers": {'X-CoinAPI-Key': '7C868E2B-4BC8-408B-998A-D5E0509B97CA'}
      };

      var request = https.request(options, function (response) {
        var chunks = [];
        response.on("data", function (chunk) {
          chunks.push(chunk);
        });
      });

      request.end();
      
        const from = currency_one.value.toUpperCase();
        const to = currency_two.value.toUpperCase();
        const amnt = amount.value;

        fetch(`https://rest.coinapi.io/v1/exchangerate/${from}/${to}`)
        

        .then(response => response.json())
        .then(data => {
          const rates = data.rate[to];
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
        });
      
      return false;
      }
        
    }});
  