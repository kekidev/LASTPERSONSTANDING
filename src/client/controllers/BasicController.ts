import { Controller, OnInit, OnRender } from "@flamework/core";

@Controller()
export class MyController implements OnInit {
	onInit() {
		print("MyController initialized.");
	}
}
