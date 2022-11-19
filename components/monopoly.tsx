import { FC } from "react";
import styles from "../styles/Home.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";

export const Monopoly: FC = () => {
  return (
    <div>
      <span>Wallet connect.</span>
      <span>Use this link to start game</span>
      <a href="https://www.intrepidcoder.com/projects/monopoly/">click thiss</a>
    </div>
  );
};
