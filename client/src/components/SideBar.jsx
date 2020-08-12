import React, { useState, useEffect } from "react";
import profilepicture from "../images/profilepicture.jpg";

import { Link } from "react-scroll";

import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import { useMediaQuery } from "react-responsive";

import Hamburger from "hamburger-react";

export default function SideBar() {
	const [isBottom, setIsBottom] = useState(false);

	useScrollPosition(({ prevPos, currPos }) => {
		if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
			setIsBottom(true);
		} else {
			setIsBottom(false);
		}
	});

	const sideBarLinks = [
		{ title: "Home", id: "home" },
		{ title: "Über mich", id: "about" },
		{ title: "Fähigkeiten", id: "skills" },
		{ title: "Udemy Kurse", id: "udemy" },
		{ title: "Coding Challenges", id: "coding-challenges" },
		{ title: "Projekte", id: "projects" },
		{ title: "Lebenslauf", id: "cv" },
		{ title: "Kontakt", id: "contact" },
	];

	const isLarge = useMediaQuery({ query: "(min-device-width: 1024px)" });

	const [isOpen, setOpen] = useState(false);

	const NavHamburger = () => {
		return (
			<div className="sticky top-0 z-50">
				<div className="self-end">
					<Hamburger toggled={isOpen} toggle={setOpen} />
				</div>

				<div className="">{isOpen ? <Content /> : null}</div>
			</div>
		);
	};

	const Content = () => {
		return (
			<div className="flex justify-center items-center h-screen lg:fixed lg:top:0 lg:left-0 z-40 w-full lg:w-48 p-4 bg-gray-800  lg:border-r-4 border-minimalist-teal">
				<div className="flex flex-col">
					<div className="flex items-center lg:-mt-32 justify-center">
						<img
							className="object-cover rounded-full border-4 border-minimalist-gray w-32 h-32"
							src={profilepicture}
							alt=""
						/>
					</div>
					<h5 className="text-center mt-4 text-minimalist-lime">Benjamin Derksen</h5>
					<div className="mt-8 space-y-8 text-center text-white">
						{sideBarLinks.map((link, index, array) =>
							isBottom ? (
								index === array.length - 1 ? (
									<div className="transition duration-150 rounded-lg cursor-pointer hover:bg-gray-700">
										<Link activeClass="" to={link.id} spy={true} smooth={true} offset={-25}>
											<p className="opacity-100 text-minimalist-lime transition duration-150 ">
												{link.title}
											</p>
										</Link>
									</div>
								) : (
									<div className="transition duration-150 rounded-lg cursor-pointer hover:bg-gray-700">
										<Link activeClass="" to={link.id} spy={true} smooth={true} offset={-25}>
											<p>{link.title}</p>
										</Link>
									</div>
								)
							) : (
								<div className="transition duration-150 rounded-lg cursor-pointer hover:bg-gray-700">
									<Link
										activeClass="opacity-100 text-minimalist-lime transition duration-150 "
										to={link.id}
										spy={true}
										smooth={true}
										offset={-25}>
										<p>{link.title}</p>
									</Link>
								</div>
							)
						)}
					</div>
				</div>
			</div>
		);
	};

	return isLarge ? (
		<Content />
	) : (
		<div>
			<NavHamburger></NavHamburger>
		</div>
	);
}
