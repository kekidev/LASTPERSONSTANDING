import { Service, OnInit } from "@flamework/core";

@Service()
export class MyService implements OnInit {
	onInit() {
		print("My service initialized.");
	}
}
