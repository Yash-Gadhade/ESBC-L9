import { ethers } from "hardhat";
import * as dotenv from "dotenv";
import { MyERC20__factory } from "../typechain-types";
dotenv.config();

async function main() {
    const accounts = await ethers.getSigners();
    const erc20TokenFactory = new MyERC20__factory(accounts[0]);
    const erc20TokenContract = await erc20TokenFactory.deploy();
    await erc20TokenContract.deployed();
    console.log(`Contract deployed at address ${erc20TokenContract.address}`);
    const totalSupply = await erc20TokenContract.totalSupply();
    console.log(`The total supply of this contract is ${totalSupply}`);
    const balanceofAccount0 = await erc20TokenContract.balanceOf(accounts[0].address);
    console.log(`The balance of Account 0 in this contract is ${balanceofAccount0}`);
    const transferTx = await erc20TokenContract.transfer(accounts[1].address, 1);
    await transferTx.wait();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})