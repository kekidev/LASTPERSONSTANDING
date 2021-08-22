import Roact from "@rbxts/roact";

export function NotEnoughPlayer() {
	return (
		<screengui ResetOnSpawn={false}>
			<textlabel
				Text="you need one more player to start"
				TextScaled={true}
				TextColor3={new Color3(0, 0, 0)}
				Position={new UDim2(0.249, 0, 0.35, 0)}
				Size={new UDim2(0.5, 0, 0.3, 0)}
				Font="LuckiestGuy"
				TextSize={14}
				BackgroundTransparency={1}
			/>
		</screengui>
	);
}
