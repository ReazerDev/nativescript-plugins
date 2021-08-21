import { EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptVirtualJoystick } from '@demo/shared';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptVirtualJoystick {
}
