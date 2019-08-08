const Web3 = require("web3");
exports.USDTBalance = async (acctobj) => {
    //object

    try {
        let _from = acctobj.address;
        let contract = new web3js.eth.Contract(minABI, "0xdac17f958d2ee523a2206206994597c13d831ec7");
        const balance = await contract.methods.balanceOf(_from).call();
        return balance/1000000;
    } catch (err) {
        console.log(err);
    }
}

const web3js = new Web3(
    new Web3.providers.HttpProvider("http://192.168.1.124:8545"),
);

let minABI = [
    // transfer
    {
        constant: false,
        inputs: [
            {
                name: "_to",
                type: "address",
            },
            {
                name: "_value",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "_owner",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                name: "balance",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_spender",
                type: "address",
            },
            {
                name: "_value",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        type: "function",

    },
];