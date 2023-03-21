const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;
const secp = require("ethereum-cryptography/secp256k1");

app.use(cors());
app.use(express.json());

const balances = {
  "0476e3efabc8962023098d96490e6087d59476d07e8cf9a615f25e00de87a0965a5998749abce733a1319e3ef93254debc0391ea8664c2eb3f8c651476f64f3dc2": 100,
  "049d04ef1b733a352f2328cc2e3374206fe7a7decdc898eb7fd1a6d122edddc908ff5c27c5263d2602f0559f74ef47821a41c856338919da5ff9177741c42d58e3": 50,
  "04b0d792b04c5f55f93043c0f9dc74905867abf7f61a6e2e1195e855d71cecd5a84a33ea0e11b4323c1884fa8cb0f772772dca52fdf1f53e838557a3b8b83402c3": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount, sign, msgHash, address } = req.body;
  const isSigned = secp.verify(sign, msgHash, address);
  if(isSigned){
    setInitialBalance(sender);
    setInitialBalance(recipient);
  
    if (balances[sender] < amount) {
      res.status(400).send({ message: "Not enough funds!" });
    } else {
      balances[sender] -= amount;
      balances[recipient] += amount;
      res.send({ balance: balances[sender] });
    }
  } else {
    res.status(400).send({ message: "Invalid sender"});
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
