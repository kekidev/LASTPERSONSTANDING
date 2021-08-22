import { Controller, OnInit, OnStart } from "@flamework/core";
import Roact from "@rbxts/roact";
import { Players } from "@rbxts/services";
import { Remotes } from "shared/Remotes";
import { Counter } from "ui/Counter";

const playerGui = Players.LocalPlayer.FindFirstChild("PlayerGui") as PlayerGui;

const StartCounter = Remotes.Client.Get("StartCount");
const CounterEnd = Remotes.Client.Get("CountEnd");

@Controller()
export class CountercController implements OnInit {
	onInit() {
		let handle: Roact.Tree;

		StartCounter.Connect(() => {
			handle = Roact.mount(Counter({ Second: 0 }), playerGui, "Test");

			for (let i = 60; i > 0; i--) {
				wait(1);
				handle = Roact.update(handle, Counter({ Second: i }));
			}

			CounterEnd.SendToServer();
			Roact.unmount(handle);
		});
	}
}
