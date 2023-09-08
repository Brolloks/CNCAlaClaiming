import {
	Container,
	Text,
	Stack,
	Heading,
	Button,
	useDisclosure,
	Center,
} from "@chakra-ui/react";
import ModalWindow from "@cncala/app/components/ModalWindow";
import { EaseInWithSlidingAnimation } from "@cncala/app/components/animations/EaseInWithSlidingAnimation";
import { CardanoWallet, useAssets, useWallet } from "@meshsdk/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Props, useWithdrawal } from "@cncala/app/marlowe/marlowe-raffle.js";

export default function Raffle() {
	const { wallet, connected } = useWallet();
	const assets = useAssets();
	const [isWinner, setIsWinner] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const winnerPolicyId =
		"13ff06b51c6c6b4d171255280027982d8e50055470516614195b4ec6";

	useEffect(() => {
		if (assets && connected) {
			console.log(wallet);
			assets.map((asset) => {
				if (winnerPolicyId === asset["policyId"]) {
					setIsWinner(true);
				}
			});
			onOpen();
		}
	}, [assets]);

	const Withdrawal = (wallet:any) => {
		const hookProps: Props = {
			network: "preprod",
			wallet: wallet.wallet,
			txOutRef: {
				txId: // "8f7d1dd9f64b5b02733261ebfff49837ff7bf1f06daf9a383576e8144e6e22b9",
          // "748d2831fe08d500442736da8ef1a5d5c724794b76d8d2f02209e05cacb8ba03",
          "bdfaf2c4d4fd500adef5349890f9737569877b62f8e2781855d84798413abbf4",
        // "c93175feff92ddfb571f4d12b9d34ab910594dce54ad4017a5670a0b43a930f5",
				// txId: "3605db0c5ae9be7623cd4ecb04f8e99d784da35258f2952896b25f7613968b54",
				txIx: 2,
			},
			blockfrostProjectId: "preprodD9cONxVqzHYtFEL4RObOZ46y4begqNHc",
		};
		const { status, reset } = useWithdrawal(hookProps);

		let action, body, initProblem, isWinner, alreadyClaimed;

		console.log(status);
		switch (status.status) {
			case "AwaitingWithdrawalTrigger":
				body = (
					<button onClick={status.trigger}>Claim your prize</button>
				);
				break;
			case "WithdrawalSucceeded":
				body = (
					<div>
						<p>
							Price should be visible in your wallet soon your
							wallet. Here is payout tx:
						</p>
						<a
							href={`https://${hookProps.network}.cardanoscan.io/transaction/${status.txId}`}
							target="_blank"
							rel="noreferrer"
						>
							{status.txId}
						</a>
					</div>
				);
				break;
			case "WithdrawalFailed":
				var retry = status.retry;
				body = (
					<div>
						<p>
							Something went wrong. Please try again or contact
							support.
						</p>
						<button onClick={retry}>Try again</button>
					</div>
				);
				break;
			case "FatalError":
				body = "Fatal error. Please contact support.";
				break;
			case "InitializationFailed":
				switch (status.error.tag) {
					// If role token was not found this wallet is probably not a winner
					case "FindRoleTokenUTxOError":
						body = "Sorry, you are not a winner";
						break;
					// If payout utxo was already spent, this wallet has already claimed its price
					case "PayoutUTxOAlreadySpentError":
						body = "You have already claimed your prize";
						break;
					// Otherwise it is a serious problem - non recoverable:
					default:
						body = "Serious problem - report sent to admin ;-)";
						break;
				}
				break;
			case "Initializing":
				body = "Checking your price claim...";
				break;
			case "ProcessingWithdrawal":
				body = "Processing withdrawal...";
				break;
		}

		return <div>{body}</div>;
	};

	const getModalWindow = () => {
		if (isWinner) {
			return (
				<ModalWindow
					header="Congratulations, lucky winner!"
					subtitle="Your prize is a few clicks away. Thank you so much for participating and for helping us boost our impact in Madagascar!"
					isOpen={isOpen}
					onClose={onClose}
				>
					<Button
						w="2xs"
						bgColor="olivedrab"
						borderRadius="20px"
						_hover={{
							bgColor: "green",
						}}
					>
						{"Claim Prize"}
					</Button>
				</ModalWindow>
			);
		}
		return (
			<ModalWindow
				header="Better luck next time!"
				subtitle="Unfortunately, we couldn't find any winner NFT in your wallet. Thank you so much for participating and for helping us boost our impact in Madagascar!"
				isOpen={isOpen}
				onClose={onClose}
			>
				<Link href="/">
					<Button
						w="2xs"
						bgColor="olivedrab"
						borderRadius="20px"
						_hover={{
							bgColor: "green",
						}}
					>
						{"Discover the CNC Ala"}
					</Button>
				</Link>
			</ModalWindow>
		);
	};

	return (
		<Container alignSelf={"center"}>
			<Stack spacing={{ base: "0" }} pt="16" align="center">
				<EaseInWithSlidingAnimation>
					<Heading size={"lg"}>
						{"CNC Ala Raffle's Claiming Portal"}
					</Heading>
					<Stack py="10">
						<Text
							overflowWrap="break-word"
							w={"2xl"}
							fontSize={"xl"}
							align="center"
						>
							{
								"If you received the winning NFT from our Marlowe smart contract,"
							}
						</Text>
						<Text
							overflowWrap="break-word"
							w={"2xl"}
							fontSize={"xl"}
							align="center"
						>
							{
								"please connect your wallet to claim your prize! 🌳"
							}
						</Text>
					</Stack>
					<Center>
						<CardanoWallet />
					</Center>
				</EaseInWithSlidingAnimation>
				<EaseInWithSlidingAnimation initY={20} delay={0.5}>
					<Image
						src="/assets/images/winner_nfts.png"
						alt={"Winner NFTs"}
						width={800}
						height={600}
					/>
				</EaseInWithSlidingAnimation>
			</Stack>
			{connected ? getModalWindow() : <></>}
			{connected ? (
				<Withdrawal wallet={wallet["_walletInstance"]}></Withdrawal>
			) : (
				<>{"not connected"}</>
			)}
		</Container>
	);
}
