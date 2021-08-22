import Net from "@rbxts/net";

const Remotes = Net.Definitions.Create({
	NotEnoughPlayer: Net.Definitions.ServerToClientEvent<[]>(),
	EnoughPlayerToStart: Net.Definitions.ServerToClientEvent<[]>(),
});

export { Remotes };
