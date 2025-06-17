import brandLogo from "../assets/brand.png";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div className="relative">
			<div className="flex items-center justify-between px-20 text-xl font-bold fixed w-full bg-white">
				<div className="flex items-center">
					<img src={brandLogo} alt="Easy Printing Logo" className="w-30 h-30" />
					<h1 className="font-inter text-3xl font-bold text-[#052234]">
						Easy Printing
					</h1>
				</div>
				<nav className="hidden lg:flex ">
					<Link className="mr-10">Upload Design</Link>
					<Link>Custom Design</Link>
				</nav>
				<div>
					<button className="bg-tertiary text-sm font-bold text-white p-2 rounded-lg border-none outline-none cursor-pointer">
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
}
