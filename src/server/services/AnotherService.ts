import { OnInit, OnStart, Service } from "@flamework/core";

@Service()
export class AnotherClass {
	getAge(): number {
		return 5;
	}
}
