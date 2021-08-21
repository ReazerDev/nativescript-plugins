import { Property, CssProperty, InheritedCssProperty, View, Style, Color } from '@nativescript/core';
import * as definitions from './index';


export class VirtualJoystickBase extends View implements definitions.VirtualJoystick {
	// Read-only
	public angle: number;
	public strength: number;
	public xAxis: number;
	public yAxis: number;
	// Other
	public buttonAutoRecenter: boolean;
	public buttonStickToBorder: boolean;
	public buttonDirection: number;
	public buttonSizeRatio: number;
	public backgroundSizeRatio: number;
	public fixedCenter: boolean;
	public enabled: boolean;
	// Events
	public static moveEvent = 'move';

	// Css getters and setters
	get jvColor(): string {
		return this.style.jvColor.hex;
	}
	set jvColor(value: string) {
		this.style.jvColor = new Color(value);
	}

	get jvImage(): string {
		return this.style.jvImage;
	}
	set jvImage(value: string) {
		this.style.jvImage = value;
	}

	get jvBackgroundColor(): string {
		return this.style.jvBackgroundColor.hex;
	}
	set jvBackgroundColor(value: string) {
		this.style.jvBackgroundColor = new Color(value);
	}

	get jvBorderColor(): string {
		return this.style.jvBorderColor.hex;
	}
	set jvBorderColor(value: string) {
		this.style.jvBorderColor = new Color(value);
	}

	get jvBorderWidth(): number {
		return this.style.jvBorderWidth;
	}
	set jvBorderWidth(value: number) {
		this.style.jvBorderWidth = value;
	}
}


declare module "@nativescript/core/ui/styling/style" {
	interface Style {
		jvColor: Color;
		jvImage: string;
		jvBackgroundColor: Color;
		jvBorderColor: Color;
		jvBorderWidth: number;
	}
}


export const angleProp = new Property<VirtualJoystickBase, number>({
	name: 'angle',
	defaultValue: -1,
	valueConverter: v => +v,
});
angleProp.register(VirtualJoystickBase);


export const strengthProp = new Property<VirtualJoystickBase, number>({
	name: 'strength',
	defaultValue: 0,
	valueConverter: v => +v,
});
strengthProp.register(VirtualJoystickBase);


export const xAxisProp = new Property<VirtualJoystickBase, number>({
	name: 'xAxis',
	defaultValue: 0,
	valueConverter: v => +v,
});
xAxisProp.register(VirtualJoystickBase);


export const yAxisProp = new Property<VirtualJoystickBase, number>({
	name: 'yAxis',
	defaultValue: 0,
	valueConverter: v => +v,
});
yAxisProp.register(VirtualJoystickBase);


export const colorProp = new InheritedCssProperty<Style, Color>({
	name: 'jvColor',
	cssName: 'jv-color',
	defaultValue: new Color('black'),
	equalityComparer: Color.equals,
	valueConverter: v => new Color(v),
});
colorProp.register(Style);


export const imageProp = new CssProperty<Style, string>({
	name: 'jvImage',
	cssName: 'jv-image',
	affectsLayout: true,
});
imageProp.register(Style);


export const backgroundColorProp = new InheritedCssProperty<Style, Color>({
	name: 'jvBackgroundColor',
	cssName: 'jv-background-color',
	defaultValue: new Color('transparent'),
	equalityComparer: Color.equals,
	valueConverter: v => new Color(v),
});
backgroundColorProp.register(Style);


export const borderColorProp = new CssProperty<Style, Color>({
	name: 'jvBorderColor',
	cssName: 'jv-border-color',
	defaultValue: new Color('transparent'),
	equalityComparer: Color.equals,
	valueConverter: v => new Color(v),
});
borderColorProp.register(Style);


export const borderWidthProp = new CssProperty<Style, number>({
	name: 'jvBorderWidth',
	cssName: 'jv-kborder-width',
	defaultValue: 3,
	valueConverter: v => +v,
});
borderWidthProp.register(Style);


export const buttonAutoRecenterProp = new Property<VirtualJoystickBase, boolean>({
	name: 'buttonAutoRecenter',
	defaultValue: true,
	valueConverter: v => v === 'true',
});
buttonAutoRecenterProp.register(VirtualJoystickBase);


export const buttonStickToBorderProp = new Property<VirtualJoystickBase, boolean>({
	name: 'buttonStickToBorder',
	defaultValue: false,
	valueConverter: v => v === 'true',
});
buttonStickToBorderProp.register(VirtualJoystickBase);


export const buttonDirectionProp = new Property<VirtualJoystickBase, number>({
	name: 'buttonDirection',
	defaultValue: 0,
	valueConverter: v => +v,
});
buttonDirectionProp.register(VirtualJoystickBase);


export const buttonSizeRatioProp = new Property<VirtualJoystickBase, number>({
	name: 'buttonSizeRatio',
	defaultValue: 0.25,
	valueConverter: v => +v,
});
buttonSizeRatioProp.register(VirtualJoystickBase);


export const backgroundSizeRatioProp = new Property<VirtualJoystickBase, number>({
	name: 'backgroundSizeRatio',
	defaultValue: 0.75,
	valueConverter: v => +v,
});
backgroundSizeRatioProp.register(VirtualJoystickBase);


export const fixedCenterProp = new Property<VirtualJoystickBase, boolean>({
	name: 'fixedCenter',
	defaultValue: true,
	valueConverter: v => v === 'true',
});
fixedCenterProp.register(VirtualJoystickBase);


export const enabledProp = new Property<VirtualJoystickBase, boolean>({
	name: 'enabled',
	defaultValue: true,
	valueConverter: v => v === 'true',
});
enabledProp.register(VirtualJoystickBase);
