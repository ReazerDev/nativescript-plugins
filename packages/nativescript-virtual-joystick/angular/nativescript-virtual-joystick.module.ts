import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';

import { DIRECTIVES } from './nativescript-virtual-joystick.directives';

@NgModule({
  declarations: [DIRECTIVES],
  exports: [DIRECTIVES]
})
export class NativeScriptVirtualJoystickModule {}

registerElement('VirtualJoystick', () => require('@reazerdev/nativescript-virtual-joystick').VirtualJoystick);
