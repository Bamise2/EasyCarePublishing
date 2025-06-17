import brandLogo from "../assets/brand.png";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full bg-white shadow-sm">
			<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
				{/* Logo + Brand */}
				<div className="flex items-center gap-3">
					<img src={brandLogo} alt="Easy Printing Logo" className="w-30 h-30" />
					<h1 className="text-2xl font-bold text-[#052234]">Easy Printing</h1>
				</div>

				{/* Navigation Links (Desktop only) */}
				<nav className="hidden lg:flex gap-8 text-lg font-medium text-[#052234]">
					<Link to="/upload">Upload Design</Link>
					<Link to="/custom">Custom Design</Link>
				</nav>

				{/* CTA Button */}
				<div>
					<button className="bg-tertiary hover:bg-tertiary/90 text-white text-sm md:text-base font-semibold px-4 py-2 rounded-lg transition">
						Get Started
					</button>
				</div>
			</div>
		</header>
	);
}
