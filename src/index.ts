import In3Client from 'in3'
//import web3 from 'web3'

// use the In3Client
const in3 = new In3Client({
    proof         : 'standard',
    signatureCount: 1,
    requestCount  : 2,
    chainId       : 'kovan' //'mainnet'
})

//const w3 = new web3(in3.createWeb3Provider())

async function getLastBlock() {
    await in3.eth.getBlockByNumber('latest').then((res) => {
        console.log("--------------------------- getLastBlock ---------------------------");
        console.log(res.hash);
    } );
}

async function getBlock(address: string) {
    await in3.eth.getBlockByHash(address).then((res) => {
        console.log("--------------------------- getBlock ---------------------------");
        console.log(res);
    } );
}

async function callFunction() {
    let contracttAddress = "0xb79ea29fb1ec8d28e190a1b9c723cb519426dda0";  //"0x02eA0061885206d8A39c7eD34328e9bae1068946";
    let accountAddress = "0xb99E064b0f7Ba04bb32C9632553aAdF1C78b354b";
    await in3.eth.callFn(contracttAddress, 'balanceOf(address):uint256', accountAddress).then((res) => {
        console.log("--------------------------- callFunction ---------------------------");
        console.log(res);
    });
}

async function callTransaction() {
    let contractAddress = "0xb79ea29fb1ec8d28e190a1b9c723cb519426dda0";  //"0x02eA0061885206d8A39c7eD34328e9bae1068946";
    let accountAddress = "0xb99E064b0f7Ba04bb32C9632553aAdF1C78b354b";
    let myPrivateKey = "0x4542265184AA6A1A941B2CA4D97B43B52E9B4D978FA03721177E7FDFA696AFC0";   //0x private key
    await in3.eth.sendTransaction({ 
        to           : contractAddress, 
        method       : 'setValue(uint256)',
        args         : [1],
        //confirmations: 2,
        pk           : myPrivateKey
      }).then((res) => {
        console.log("--------------------------- callTransaction ---------------------------");
        console.log(res);
    });
}

getLastBlock();
getBlock("0xebf3091cf992aab5dcd351dc96523b1a6038d4d63704e9409a0283ebb275a3c4");
callFunction();
callTransaction();