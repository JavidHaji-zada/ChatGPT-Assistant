import { forwardRef } from "react";
import clsx from "clsx";

const OuterContainer = forwardRef(function OuterContainer(
	{ className, children, ...props },
	ref
) {
	return (
		<div ref={ref} className={clsx("sm:px-8", className)}
			style={{ backgroundColor: "#2c5e79" }}
			{...props}>
			<h1 className="text-center text-lg font-bold" style={{ color: "#FFFFFF" }}>ChatGPT</h1>
			<div className="m-3 rounded">{children}</div>
		</div>
	);
});

const InnerContainer = forwardRef(function InnerContainer(
	{ className, children, ...props },
	ref
) {
	return (
		<div
			ref={ref}
			className={clsx(
				"flex-col m-3 space-y-5 min-w-[400px] min-h-[400px]",
				className
			)}
			style={{ backgroundColor: "#2c5e79" }}
			{...props}
		>
			{children}
		</div>
	);
});

export const Container = forwardRef(function Container(
	{ children, ...props },
	ref
) {
	return (
		<OuterContainer ref={ref} {...props}>
			<InnerContainer>{children}</InnerContainer>
		</OuterContainer>
	);
});

Container.Outer = OuterContainer;
Container.Inner = InnerContainer;
