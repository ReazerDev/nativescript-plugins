import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptVirtualJoystick } from '@demo/shared';

@Component({
	selector: 'demo-nativescript-virtual-joystick',
	templateUrl: 'nativescript-virtual-joystick.component.html',
})
export class NativescriptVirtualJoystickComponent {
	demoShared: DemoSharedNativescriptVirtualJoystick;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptVirtualJoystick();
	}
}
