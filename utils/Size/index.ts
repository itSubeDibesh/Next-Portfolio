export const bytesToSize = (bytes: number): string => {
	const difference = 1024;
	const sizes = ["Bytes", "kb", "mb", "gb", "tb", "pb"];
	if (bytes === 0) return "n/a";
	const i = parseInt(
		Math.floor(Math.log(bytes) / Math.log(difference)).toString(),
		10
	);
	if (i === 0) return `${bytes} ${sizes[i]}`;
	return `${(bytes / difference ** i).toFixed(1)} ${sizes[i]}`;
};
