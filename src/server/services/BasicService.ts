import { Service, OnStart } from "@flamework/core";
import { AnotherClass } from "./AnotherService";

@Service()
export class MyService implements OnStart {
	constructor(private otherService: AnotherClass) {}
	onStart() {}
}
