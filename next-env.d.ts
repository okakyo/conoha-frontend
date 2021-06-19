
/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.css' {
	const styles: { [className: string]: string };
	export default styles;
}

declare module '*.scss' {
	const styles: { [className: string]: string };
	export default styles;
}