import React from "react";
import { Box, Image, Heading, Paragraph, Anchor } from "grommet";
import Fade from "react-reveal/Fade";

function Join() {
	document.body.background =
		"http://nextact.mit.edu/assets/images/mermaid2.jpg";
	return (
		<Fade>
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
						<Heading textAlign="center">Join Next Act!</Heading>
						<Paragraph>
							Next Act welcomes participation from all members of
							the MIT community. This includes undergraduates,
							graduate students, alumni, faculty, employees, and
							family members. No experience required - just
							enthusiasm!
						</Paragraph>
						<Heading level="3" textAlign="center">
							Want to join the cast?
						</Heading>
						<Paragraph>
							We accept everyone who auditions!{" "}
							<b>
								Check back here next year for info on how to
								audition for our 2020 show!
							</b>
						</Paragraph>
						<Heading level="3" textAlign="center">
							Interested in being in playing in the pit, or
							helping out with art, set, lights, or costumes?
						</Heading>
						<Paragraph>
							Fill out{" "}
							<b>
								<Anchor
									href="https://goo.gl/forms/YKabjOvyDECZYTqf1"
									label="the 2018 interest form"
								/>
							</b>
							! Email our production staff at{" "}
							<Anchor
								href="mailto:nact-prod@mit.edu"
								label="nact-prod@mit.edu"
							/>{" "}
							if you have any questions.
						</Paragraph>
						<Paragraph>
							If you have a passion that you would like to bring
							to the show that is not listed here, please contact
							our producer,{" "}
							<Anchor
								href="mailto:lapolaya@mit.edu"
								label="Luisa Apolaya Torres"
							/>
							. We can work anybody with serious talent or
							enthusiasm in the show!
						</Paragraph>
					</Fade>
				</Box>
			</Box>
		</Fade>
	);
}

export default Join;
