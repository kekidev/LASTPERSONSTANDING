import { Service, OnStart } from "@flamework/core";
import { Players } from "@rbxts/services";
import { Remotes } from "shared/Remotes";

const NotEnoughPlayer = Remotes.Server.Create("NotEnoughPlayer");
const EnoughPlayer = Remotes.Server.Create("EnoughPlayerToStart");

@Service()
export class MyService implements OnStart {
	onStart() {
		Players.PlayerAdded.Connect(() => {
			if (Players.GetPlayers().size() < 2) NotEnoughPlayer.SendToAllPlayers();
			else EnoughPlayer.SendToAllPlayers();
		});
		Players.PlayerRemoving.Connect(() => {
			if (Players.GetPlayers().size() < 2) NotEnoughPlayer.SendToAllPlayers();
		});
	}
}
