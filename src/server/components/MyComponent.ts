import { BaseComponent, Component } from "@flamework/components";
import { OnStart } from "@flamework/core";
import { CollectionService } from "@rbxts/services";

@Component({
	tag: "hello",
})
export class MyComponent extends BaseComponent implements OnStart {
	onStart() {
		print(`im attached to ${this.instance.GetFullName()}!`);
		for (const obj of CollectionService.GetTagged("hello")) {
			this.damage(obj as BasePart);
		}
	}

	damage(part: BasePart) {
		let debouce = false;
		part.Touched.Connect((hit) => {
			if (!debouce) {
				debouce = true;
				const char = hit.FindFirstAncestorWhichIsA("Model");
				if (char && char.Name !== "Workspace") {
					print(`hello ${char.Name}`);
					(char.FindFirstChild("Humanoid") as Humanoid).TakeDamage(5);
				}
				wait(1);
				debouce = false;
			}
		});
	}
}
