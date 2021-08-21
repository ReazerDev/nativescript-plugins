import { View, EventData } from '@nativescript/core';

export declare class VirtualJoystick extends View {
	// Read-only
	public angle: number;
	public strength: number;
	public xAxis: number;
	public yAxis: number;
	// Css
	public jvColor: string;
	public jvImage: string;
	public jvBackgroundColor: string;
	public jvBorderColor: string;
	public jvBorderWidth: number;
	// Other
	public buttonAutoRecenter: boolean;
	public buttonStickToBorder: boolean;
	public buttonDirection: number;
	public buttonSizeRatio: number;
	public backgroundSizeRatio: number;
	public fixedCenter: boolean;
	public enabled: boolean;
	// Events
	public static moveEvent: string;
}


export declare interface VirtualJoystickEventData extends EventData {
	public angle: number;
	public strength: number;
	public xAxis: number;
	public yAxis: number;
}
