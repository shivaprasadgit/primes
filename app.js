const express = require('express')
const app = express()

app.get('/prime', (req, res) => {console.log("hello world")})

app.get('/prime/:number', (req, res) => {

    let xy = []
    
        let number = req.params.number;
        if (number <= 1) res.send({ number: `${number} is not a prime number`});
        else {
          var count = 0;
          for (i = 2; i < number; i++) if (number % i === 0)
          { 
              count++; 
              xy.push(`${i}`)          
          }
      
          if (count > 0) res.send(`${i} is not a prime number because these are divisibles ${xy}`);
          else 
          res.send(`${i} is a prime number`)
        }
  });

app.get('/primes/:rangePrime', (req, res) => {
  let x = req.params.rangePrime;
    var grandTotal = 0;
    let xy = []
  
    for (k = 2; k <= x; k++) {
      let count = 0;
      for (i = 2; i < k; i++)
        if (k % i === 0) 
          count++;
  
      if (count === 0) {
        // console.log(`${k} is a prime number`);
        xy.push(`${k}`)
        grandTotal++;
      }
    }
    res.send(`There are in total ${grandTotal} prime number(s) from 1 to ${x} and below are those prime numbers ${xy}`);
    
})


app.listen(3001,()=>{
  console.log('running on  3001')
})

