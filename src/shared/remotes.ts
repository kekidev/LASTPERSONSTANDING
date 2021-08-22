import Net from "@rbxts/net";

const Remotes = Net.Definitions.Create({
	NotEnoughPlayer: Net.Definitions.Event<[]>(),
	EnoughPlayerToStart: Net.Definitions.Event<[]>(),
	StartCount: Net.Definitions.Event<[]>(),
	CountEnd: Net.Definitions.Event<[]>(),
});

export { Remotes };
