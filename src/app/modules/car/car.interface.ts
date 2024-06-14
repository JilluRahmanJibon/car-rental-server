export type TCar = {
	name: string;
	description: string;
	color: string;
	isElectric: boolean;
	features: string[];
	pricePerHour: number;
	status?: "availabe" | "not-available";
	isDeleted?: boolean;
};
