const SimpleBank = artifacts.require("SimpleBank");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("SimpleBank", function (accounts) {
  it("should assert true", async function () {
    await SimpleBank.deployed();
    return assert.isTrue(true);
  });

  it("should deposit and getBalance correctly", async function () {
    const account_one = accounts[0];
    const amount = "10";

    const simpleBank = await SimpleBank.deployed();
    await simpleBank.deposit(
      { from : account_one,
        value : web3.utils.toWei(amount,"ether")}
    );
    const balance = await simpleBank.getBalance({
      from : account_one
    })
    balanceInEther = web3.utils.fromWei(balance);

    //console.log("balanceInEther is " + balanceInEther);
    //console.log("balance is " + balance);

    assert.equal(balanceInEther, amount, "Balance not equal");

  });

  it("should withdraw correctly", async function () {
    //console.log('-----------');
    const account_one = accounts[0];
    const simpleBank = await SimpleBank.deployed();

    // get the existing balance first
    const balance = await simpleBank.getBalance({
      from : account_one
    })
    balanceInEther = web3.utils.fromWei(balance);
    //console.log("balanceInEther is " + balanceInEther);

    // do the withdrawal
    const amountToWithdraw = "3";
    const amountToWithdrawInWei = web3.utils.toWei(amountToWithdraw);
    await simpleBank.withdraw(
       amountToWithdrawInWei,  { from : account_one }
    );

    // get the new balance, after withdrawal
    const newbalance = await simpleBank.getBalance({
      from : account_one
    })

   // amount withdrew = existing balance - new balance.
    const amountWithdrew = web3.utils.fromWei(balance) - 
                           web3.utils.fromWei(newbalance);
    //console.log("amountWithdrew is " + amountWithdrew);

    assert.equal(amountToWithdraw.toString(), amountWithdrew.toString(), "withdrawal not correct");

  });


});
