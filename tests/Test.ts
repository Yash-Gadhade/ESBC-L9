import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { MyERC20, MyERC20__factory } from "../typechain-types";

describe("Basic tests for understanding ERC20", async () => {
    let accounts;
    let erc20TokenContract: MyERC20;
    beforeEach(async () => {
        accounts = await ethers.getSigners();
        const erc20TokenFactory = new MyERC20__factory(accounts[0]);
        erc20TokenContract = await erc20TokenFactory.deploy();
        await erc20TokenContract.deployed();
    });

    it("should have zero total supply at deployment", async () => {
        const totalSupply = await erc20TokenContract.totalSupply();
        expect(totalSupply).to.eq(0);
    });

    it("triggers the Transfer event with the address of the sender when sending transcation", async function () {

    });
})