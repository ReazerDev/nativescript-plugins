declare namespace io {
	export namespace github {
		export namespace controlwear {
			export namespace virtual {
				export namespace joystick {
					export namespace android {
						export class BuildConfig {
							public static class: java.lang.Class<io.github.controlwear.virtual.joystick.android.BuildConfig>;
							public static DEBUG: boolean;
							public static APPLICATION_ID: string;
							public static BUILD_TYPE: string;
							public static FLAVOR: string;
							public static VERSION_CODE: number;
							public static VERSION_NAME: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace github {
		export namespace controlwear {
			export namespace virtual {
				export namespace joystick {
					export namespace android {
						export class JoystickView {
							public static class: java.lang.Class<io.github.controlwear.virtual.joystick.android.JoystickView>;
							public static BUTTON_DIRECTION_BOTH: number;
							public setFixedCenter(param0: boolean): void;
							public setOnMoveListener(param0: io.github.controlwear.virtual.joystick.android.JoystickView.OnMoveListener): void;
							public setButtonDirection(param0: number): void;
							public setBorderColor(param0: number): void;
							public getBorderAlpha(): number;
							public setButtonSizeRatio(param0: number): void;
							public getmBackgroundSizeRatio(): number;
							public getButtonDirection(): number;
							public setButtonColor(param0: number): void;
							public getButtonSizeRatio(): number;
							public onMeasure(param0: number, param1: number): void;
							public isAutoReCenterButton(): boolean;
							public setBackgroundColor(param0: number): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public setBorderAlpha(param0: number): void;
							public setEnabled(param0: boolean): void;
							public setBorderWidth(param0: number): void;
							public setOnMultiLongPressListener(param0: io.github.controlwear.virtual.joystick.android.JoystickView.OnMultipleLongPressListener): void;
							public getNormalizedY(): number;
							public setOnMoveListener(param0: io.github.controlwear.virtual.joystick.android.JoystickView.OnMoveListener, param1: number): void;
							public setBackgroundSizeRatio(param0: number): void;
							public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
							public onDraw(param0: globalAndroid.graphics.Canvas): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public resetButtonPosition(): void;
							public setButtonDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
							public setAutoReCenterButton(param0: boolean): void;
							public getNormalizedX(): number;
							public setButtonStickToBorder(param0: boolean): void;
							public isEnabled(): boolean;
							public isButtonStickToBorder(): boolean;
							public constructor(param0: globalAndroid.content.Context);
							public run(): void;
						}
						export namespace JoystickView {
							export class OnMoveListener {
								public static class: java.lang.Class<io.github.controlwear.virtual.joystick.android.JoystickView.OnMoveListener>;
								/**
								 * Constructs a new instance of the io.github.controlwear.virtual.joystick.android.JoystickView$OnMoveListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onMove(param0: number, param1: number): void;
								});
								public constructor();
								public onMove(param0: number, param1: number): void;
							}
							export class OnMultipleLongPressListener {
								public static class: java.lang.Class<io.github.controlwear.virtual.joystick.android.JoystickView.OnMultipleLongPressListener>;
								/**
								 * Constructs a new instance of the io.github.controlwear.virtual.joystick.android.JoystickView$OnMultipleLongPressListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onMultipleLongPress(): void;
								});
								public constructor();
								public onMultipleLongPress(): void;
							}
						}
					}
				}
			}
		}
	}
}
