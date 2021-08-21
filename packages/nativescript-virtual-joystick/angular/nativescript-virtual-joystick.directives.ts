import { Directive } from '@angular/core'; // TODO: check require .Directive without hacks

@Directive({
  selector: 'VirtualJoystick'
})
export class VirtualJoyStickDirective {}

export const DIRECTIVES = [VirtualJoyStickDirective];
