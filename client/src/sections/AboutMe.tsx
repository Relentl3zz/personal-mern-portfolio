import React from "react";
import strengthsMock from "../mocks/strengthsMock";
import strength from "../images/strength.svg";
import SubTitle from "../components/SubTitle";
import Fade from "react-reveal/Fade";
import VisibilitySensor from "react-visibility-sensor";
import HeadTitle from "../components/HeadTitle";
import user from "../images/user.svg";
import profilepicture from "../images/profilepicture_cropped.jpg";

export default function AboutMe() {
	return (
		<div id="about-me">
			<HeadTitle svg={user} title="Über mich" />
			{/* <SubTitle svg={strength} title="Meine Stärken" /> */}
			<div className="flex">
				<img
					className="object-cover rounded-lg border-2 border-minimalist-gray  p-1 "
					style={{ width: "20rem" }}
					src={profilepicture}
					alt=""
				/>
				<div className="flex flex-col ml-12">
					<div className="flex justify-between">
						{strengthsMock.map((strength, index) => (
							<div
								className="my-2 md:m-0 bg-white p-4 w-64 rounded-lg border border-minimalist-gray"
								key={index}>
								<VisibilitySensor>
									<Fade cascade delay={150} duration={2100}>
										<div className="flex flex-col items-center ">
											<h2>{strength.headline}</h2>
											<img className="w-24 m-4" src={strength.svg} alt={strength.headline} />
											<p className="text-center">{strength.caption}</p>
										</div>
									</Fade>
								</VisibilitySensor>
							</div>
						))}
					</div>
					<div className="flex flex-col mt-4 justify-between lg:flex-row">
						<div className="flex items-center justify-start">
							<div className="flex flex-col p-4 space-y-2 justify-between bg-white rounded-lg border border-minimalist-teal ">
								<h4 className="text-minimalist-lime">Wer bin ich?</h4>
								<h2>Ich bin Benjamin Derksen, ein ambitionierter JavaScript Entwickler</h2>
								<p>
									JavaScript ist meine Leidenschaft, egal ob dynamisches rendern von UI-Komponenten
									mit React.js oder Backend Controller mit Express.js. In meiner Freizeit programmiere
									ich entweder an einem aktuellen Projekt oder nehme Kurse für meinen Udemy Channel
									auf.
								</p>
								<div>
									<hr className="border border-minimalist-yellow" />
								</div>
								<div className="flex justify-between">
									<div className="flex flex-col space-y-4">
										<p>Name: Benjamin Derksen</p>
										<p>Alter: 22</p>
									</div>
									<div className="flex flex-col space-y-4">
										<p>Email: b.derksen@mail.de</p>
										<p>Ort: Waiblingen</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
