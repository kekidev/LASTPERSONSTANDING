import Roact from "@rbxts/roact";

interface IProps {
	Second: number;
}

export function Counter(props: IProps) {
	return (
		<screengui ResetOnSpawn={false}>
			<textlabel
				Text={`starting after ${props.Second}`}
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
