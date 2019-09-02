import React from "react";
import { Box, Image, Heading, Paragraph } from "grommet";
import Fade from "react-reveal/Fade";

function CurrentSeason() {
	document.body.background =
		"https://ewedit.files.wordpress.com/2019/03/beauty-and-the-beast.jpg";
	return (<Fade>
		<Box margin="small">
			<Box
				className="info-box"
				align="center"
				justify="center"
				pad="large"
				margin="xsmall"
				alignSelf="center"
				elevation="large"
				width="large"
			>
				<Fade bottom cascade>
					<Heading textAlign="center" margin="medium">
						Beauty and the Beast (2019)
					</Heading>
					<Paragraph>
						Beauty and the Beast is a musical with music by Alan
						Menken, lyrics by Howard Ashman and Tim Rice, and book
						by Linda Woolverton. Adapted from Walt Disney Pictures'
						Academy Award-winning 1991 animated musical film of the
						same name – which in turn had been based on the classic
						French fairy tale by Jeanne-Marie Leprince de Beaumont –
						Beauty and the Beast tells the story of a cold-blooded
						prince who has been magically transformed into an
						unsightly creature as punishment for his selfish ways.
						To revert into his true human form, the Beast must first
						learn to love a bright, beautiful young woman whom he
						has imprisoned in his enchanted castle before it is too
						late.
					</Paragraph>
				</Fade>
			</Box>
		</Box></Fade>
	);
}

export default CurrentSeason;
