import { OnStart, Service } from "@flamework/core";
import { Players, Teams, Workspace } from "@rbxts/services";
import { Remotes } from "shared/Remotes";
import { R6Character } from "shared/Types/SharedTypes";

const NotEnough = Remotes.Server.Create("NotEnoughPlayer");
const Enough = Remotes.Server.Create("EnoughPlayerToStart");
const StartCounter = Remotes.Server.Create("StartCount");
const CounterEnd = Remotes.Server.Create("CountEnd");

@Service()
export class GameService implements OnStart {
	onStart() {
		this.PlayerConnection();

		CounterEnd.Connect((plr) => {
			print("start game");
		});
	}

	PlayerConnection() {
		Players.PlayerAdded.Connect((plr) => {
			plr.Team = Teams.FindFirstChild("Lobby") as Team;
			if (Players.GetPlayers().size() < 2) {
				NotEnough.SendToAllPlayers();
			} else {
				Enough.SendToAllPlayers();
				this.Intermission();
			}
		});

		Players.PlayerRemoving.Connect(() => {
			if (Players.GetPlayers().size() < 2) {
				NotEnough.SendToAllPlayers();
			} else {
				Enough.SendToAllPlayers();
			}
		});
	}

	SendToLobby() {
		for (const player of Players.GetPlayers()) {
			(player.Character as R6Character).HumanoidRootPart.Position = (
				Workspace.FindFirstChild("TPpoint")?.FindFirstChild("Lobby1TP") as BasePart
			).Position;
		}
	}

	Intermission() {
		StartCounter.SendToAllPlayers();
	}
}
