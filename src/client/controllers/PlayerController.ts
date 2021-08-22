import { Controller, OnInit } from "@flamework/core";
import Roact from "@rbxts/roact";
import { Players } from "@rbxts/services";
import { Remotes } from "shared/Remotes";
import { NotEnoughPlayer } from "ui/NotEnoughPlayer";

const NotEnough = Remotes.Client.Get("NotEnoughPlayer");
const Enough = Remotes.Client.Get("EnoughPlayerToStart");

const playerGui = Players.LocalPlayer.FindFirstChild("PlayerGui") as PlayerGui;

@Controller()
export class MyController implements OnInit {
	onInit() {
		let handle: Roact.Tree;
		NotEnough.Connect(() => {
			handle = Roact.mount(NotEnoughPlayer(), playerGui, "NotEnoughPlayer");
		});
		Enough.Connect(() => {
			Roact.unmount(handle);
		});
	}
}
