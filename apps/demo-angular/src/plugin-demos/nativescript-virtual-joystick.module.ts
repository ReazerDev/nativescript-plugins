import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptVirtualJoystickComponent } from './nativescript-virtual-joystick.component';
import { NativeScriptVirtualJoystickModule as VirtualJoystickModule } from '@reazerdev/nativescript-virtual-joystick/angular';

@NgModule({
	imports: [
	  NativeScriptCommonModule,
    NativeScriptRouterModule.forChild([{ path: '', component: NativescriptVirtualJoystickComponent }]),
    VirtualJoystickModule
  ],
	declarations: [NativescriptVirtualJoystickComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptVirtualJoystickModule {}
