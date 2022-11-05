import React from "react";
import { HStack, IconButton, Link, useColorModeValue } from "@chakra-ui/react";
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";

const socials = [
	{
		label: "Discord",
		icon: <FaDiscord fontSize="1.25rem" />,
		href: "https://discord.gg/S7AvwgKVcW",
	},
	{
		label: "Twitter",
		icon: <FaTwitter fontSize="1.25rem" />,
		href: "https://twitter.com/CardanoCnbg",
	},
	{
		label: "FaTelegramPlane",
		icon: <FaTelegramPlane fontSize="1.25rem" />,
		href: "https://t.me/+eR_00UAp9PY5N2Iy",
	},
];

export const SocialMedia = () => {
	const bgColor = useColorModeValue("gray.050", "gray.900");
	return (
		<HStack alignSelf={"center"}>
			{socials.map((social) => (
				<Link key={social.label} href={social.href} isExternal>
					<IconButton
						as="a"
						aria-label={social.label}
						icon={social.icon}
						color={"gray.50"}
						background={bgColor}
						borderRadius="20px"
					/>
				</Link>
			))}
		</HStack>
	);
};
