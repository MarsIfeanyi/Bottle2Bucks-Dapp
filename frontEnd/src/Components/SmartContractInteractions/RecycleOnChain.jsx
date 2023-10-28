import { useContractWrite } from "wagmi";

import { useState, useEffect } from "react";
import {
  CONTRACT_ABI,
  CONTRACT_ADDRESS,
} from "../../../contracts/bottleBucksContract";

function RecycleOnChain() {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");

  const {
    data: recyclePetBottleData,
    isLoading: isRecycling,
    isSuccess: isRecycledStarted,
    write: recycleBottle,
    error: recycleError,
  } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "recyclePetBottle",
  });

  useEffect(() => {
    console.log("recyclePetBottleData:", recyclePetBottleData);
    console.log("isRecycling:", isRecycling);
    console.log("isRecycledStarted", isRecycledStarted);
    console.log("recycleError:", recycleError);
    console.log("___________");
  }, [recyclePetBottleData, isRecycling, isRecycledStarted]);

  const handleRecycle = async (e) => {
    e.preventDefault();
    try {
      // <ConnectButton />;
      recycleBottle({ args: [address, amount] });
    } catch (error) {
      console.error("Error calling recycleBottle:", error.message);
    }
  };

  return (
    <div className="mt-10">
      <form action="" onSubmit={handleRecycle}>
        <h1 className="  justify-center text-xl mx-auto items-center text-center font-medium   ">
          Deposit Your Plastic Bottles For Recycling
        </h1>

        <div className="flex flex-col space-y-6 md:space-x-4 mx-auto items-center justify-center mt-4">
          {/* Individual Container */}
          <div className="space-y-2 flex flex-col">
            <label htmlFor="recipient" className=" mr-2">
              USDCWalletAddress
            </label>

            <input
              type="text"
              value={address}
              placeholder="Enter Address (account)"
              required
              onChange={(e) => setAddress(e.target.value)}
              className="rounded-lg p-2 border border-[#8BC34A] w-72"
            />

            <p>{console.log(address)}</p>

            <label htmlFor="amount" className=" mr-2">
              Plastic Bottle Quantity
            </label>

            <input
              type="number"
              value={amount}
              placeholder="Enter the quantity of pet Bottles"
              required
              onChange={(e) => setAmount(e.target.value)}
              className="rounded-lg p-2 border border-[#8BC34A] w-72"
            />

            <p>{console.log(amount)}</p>

            <button
              // onClick={handleRecycle}
              type="submit"
              className="bg-[#8BC34A] rounded-xl py-2 px-4 text-white ml-2"
            >
              Recycle On-Chain
            </button>
          </div>
        </div>

        {isRecycling && (
          <div className="mt-4">Depositing your Pet Bottle for Recycling</div>
        )}
        {isRecycledStarted && (
          <div className="mt-4">
            Transaction: {JSON.stringify(recyclePetBottleData)}
          </div>
        )}
      </form>
    </div>
  );
}

export default RecycleOnChain;
