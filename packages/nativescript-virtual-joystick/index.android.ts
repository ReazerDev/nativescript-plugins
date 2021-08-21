import { Color, ImageSource, Utils } from '@nativescript/core';
import * as common from './common';

export class VirtualJoystick extends common.VirtualJoystickBase {
	private _androidViewId: number;
	private _android: io.github.controlwear.virtual.joystick.android.JoystickView;

  // @ts-ignore
	get android(): io.github.controlwear.virtual.joystick.android.JoystickView {
		return this.nativeView;
	}

	public createNativeView() {
		this._android = new io.github.controlwear.virtual.joystick.android.JoystickView(this._context);
		return this._android;
	}

	public initNativeView() {
		this._androidViewId = android.view.View.generateViewId();
		(<any>this.nativeView).setId(this._androidViewId);
		(<any>this.nativeView).owner = this;
		initMoveListener();
		const moveListener = new MoveListener(this);
		this.nativeView.setOnMoveListener(moveListener, 40);
		super.initNativeView();
	}

	public disposeNativeView() {
		(<any>this.nativeView).owner = null;
		super.disposeNativeView();
	}

	[common.colorProp.setNative](value: Color) {
		this.nativeView.setButtonColor(value.android);
	}

	[common.imageProp.setNative](value: any) {
		let buttonDrawable = null;
		if (!value) {
			return;
		}
		if (Utils.isFileOrResourcePath(value)) {
			buttonDrawable = ImageSource.fromFileOrResourceSync(value);
			if (buttonDrawable) {
				this.nativeView.setButtonDrawable(new android.graphics.drawable.BitmapDrawable(buttonDrawable.android));
			} else {
				console.log(`The image "${value}" was not found. Check your XML buttonImage property.`);
			}
		}
	}

	[common.backgroundColorProp.setNative](value: Color) {
		this.nativeView.setBackgroundColor(value.android);
	}

	[common.borderColorProp.setNative](value: Color) {
		this.nativeView.setBorderColor(value.android);
	}

	[common.borderWidthProp.setNative](value: number) {
		this.nativeView.setBorderWidth(value);
	}

	[common.buttonAutoRecenterProp.setNative](value: boolean) {
		this.nativeView.setAutoReCenterButton(value);
	}

	[common.buttonStickToBorderProp.setNative](value: boolean) {
		this.nativeView.setButtonStickToBorder(value);
	}

	[common.buttonDirectionProp.setNative](value: number) {
		this.nativeView.setButtonDirection(value);
	}

	[common.buttonSizeRatioProp.setNative](value: number) {
		this.nativeView.setButtonSizeRatio(value);
	}

	[common.backgroundSizeRatioProp.setNative](value: number) {
		this.nativeView.setBackgroundSizeRatio(value);
	}

	[common.fixedCenterProp.setNative](value: boolean) {
		this.nativeView.setFixedCenter(value);
	}

	[common.enabledProp.setNative](value: boolean) {
		this.nativeView.setEnabled(value);
	}
}


interface MoveListener {
	new (owner: common.VirtualJoystickBase): io.github.controlwear.virtual.joystick.android.JoystickView.OnMoveListener;
}


let MoveListener: MoveListener;


function initMoveListener(): void {
	if (MoveListener) return;

  @NativeClass()
	@Interfaces([io.github.controlwear.virtual.joystick.android.JoystickView.OnMoveListener])
	class MoveListenerImpl extends java.lang.Object implements io.github.controlwear.virtual.joystick.android.JoystickView.OnMoveListener {
		constructor(public owner: common.VirtualJoystickBase) {
			super();
      // @ts-ignore
			return global.__native(this);
		}

		public onMove(angle: number, strength: number): void {
			const owner = this.owner;
			if (owner) {
				const power = strength / 100;
				const xAxis = Math.cos(angle * (Math.PI / 180)) * power;
				const yAxis = -(Math.sin(angle * (Math.PI / 180)) * power);
				common.angleProp.nativeValueChange(this.owner, angle);
				common.strengthProp.nativeValueChange(this.owner, strength);
				common.xAxisProp.nativeValueChange(this.owner, xAxis);
				common.yAxisProp.nativeValueChange(this.owner, yAxis);
				(<any>owner).notify({
					eventName: common.VirtualJoystickBase.moveEvent,
					object: owner,
					angle,
					strength,
					xAxis,
					yAxis,
				});
			}
		}
	}

	MoveListener = MoveListenerImpl;
}
