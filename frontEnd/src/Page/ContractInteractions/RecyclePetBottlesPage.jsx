import React from "react";

import SubmitAddress from "../../Components/SmartContractInteractions/SubmitAddress";

import { ConnectButton } from "@rainbow-me/rainbowkit";

import RecycleOnChain from "../../Components/SmartContractInteractions/RecycleOnChain";

const RecyclePetBottlesPage = () => {
  return (
    <>
      <div className="flex justify-end mt-10 mr-16">
        <ConnectButton />
      </div>

      <div className="flex items-center justify-center mx-auto  flex-col">
        <RecycleOnChain />

        <SubmitAddress />
      </div>
    </>
  );
};

export default RecyclePetBottlesPage;
