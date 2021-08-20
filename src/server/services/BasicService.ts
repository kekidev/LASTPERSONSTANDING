import { Service, OnStart, OnInit } from "@flamework/core";
import { CollectionService } from "@rbxts/services";
import { AnotherClass } from "./AnotherService";

@Service()
export class MyService implements OnStart, OnInit {
	constructor(private otherService: AnotherClass) {}
	onStart() {
		for (const obj of CollectionService.GetTagged("hello")) {
			this.damage(obj as BasePart);
		}
	}

	onInit() {
		print("init");
	}

	damage(part: BasePart) {
		part.Touched.Connect((hit) => {
			const char = hit.FindFirstAncestorWhichIsA("Model");
			if (char && char.Name !== "Workspace") {
				print(`hello ${char.Name}`);
				(char.FindFirstChild("Humanoid") as Humanoid).TakeDamage(5);
			}
		});
	}
}
