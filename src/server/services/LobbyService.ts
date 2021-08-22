import { Service, OnStart } from "@flamework/core";

@Service()
export class LobbyService implements OnStart {
	onStart() {}
	_start() {
		print("starting game");
	}
}
