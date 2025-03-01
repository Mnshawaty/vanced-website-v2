import React, { useContext } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
// import Image from "../elements/Image";
// import Modal from "../elements/Modal";
import getRandomQuotes from "../../utils/getRandomQuotes";
import Image from "../elements/Image";
import DownloadImg from "./../../assets/images/download.svg";
import { ManagerContext, ShowBraveContext } from "../../App";

import { SiBrave, SiAdguard } from "react-icons/si";
import { ADGUARD, BRAVE } from "../../constants/links";

const propTypes = {
	...SectionProps.types,
};

const defaultProps = {
	...SectionProps.defaults,
};

const Hero = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	...props
}) => {
	// const [videoModalActive, setVideomodalactive] = useState(false);

	// const openModal = e => {
	// 	e.preventDefault();
	// 	setVideomodalactive(true);
	// };

	// const closeModal = e => {
	// 	e.preventDefault();
	// 	setVideomodalactive(false);
	// };

	const outerClasses = classNames(
		"hero section center-content",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className,
	);

	const innerClasses = classNames(
		"hero-inner section-inner",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider",
	);

	const vancedManager = useContext(ManagerContext);
	const showBrave = useContext(ShowBraveContext);

	return (
		<section {...props} className={outerClasses}>
			<div className="container-sm">
				<div className={innerClasses}>
					<div className="hero-content">
						<h1
							className="mt-0 mb-16 reveal-from-bottom"
							data-reveal-delay="200"
						>
							<span className="vanced--gradient">Vanced</span>
						</h1>
						<div className="container-xs">
							<p
								className="m-0 mb-32 reveal-from-bottom"
								data-reveal-delay="400"
							>
								{getRandomQuotes()}
							</p>
							<div className="reveal-from-bottom mb-8" data-reveal-delay="600">
								<ButtonGroup>
									<Button
										tag="a"
										color="primary"
										wideMobile
									>
										Vanced no Longer Available
									</Button>
									{showBrave && (
										<Button
											tag="a"
											color="dark"
											wideMobile
											href={BRAVE}
											target="_blank"
										>
											Support us <SiBrave size="2em" color="white" />
										</Button>
									)}
									<Button
										tag="a"
										color="dark"
										wideMobile
										href={ADGUARD}
										target="_blank"
									>
										Support us <SiAdguard size="2em" color="white" />
									</Button>
								</ButtonGroup>
							</div>

						</div>
					</div>
					{/* <div
						className="hero-figure reveal-from-bottom illustration-element-01"
						data-reveal-value="20px"
						data-reveal-delay="800"
					>
						<a
							data-video="https://player.vimeo.com/video/174002812"
							href="#0"
							aria-controls="video-modal"
							onClick={openModal}
						>
							<Image
								className="has-shadow"
								src={require("./../../assets/images/video-placeholder.jpg")}
								alt="Hero"
								width={896}
								height={504}
							/>
						</a>
					</div>
					<Modal
						id="video-modal"
						show={videoModalActive}
						handleClose={closeModal}
						video="https://player.vimeo.com/video/174002812"
						videoTag="iframe"
					/> */}
				</div>
			</div>
		</section>
	);
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
