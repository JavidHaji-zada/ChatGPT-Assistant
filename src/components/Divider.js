export function Divider() {
	return (
		<div className="relative">
			<div className="absolute inset-0 flex items-center" aria-hidden="true">
				<div className="w-full border-t border-gray-300"></div>
			</div>
			<div className="relative flex justify-start">
				<span className="pr-3 text-md font-medium text-gray-700" style={{ color: "#FFFFFF", backgroundColor: "#2c5e79" }}>
					GPT Response
				</span>
			</div>
		</div>
	);
}
