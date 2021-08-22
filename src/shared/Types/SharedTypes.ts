export type R6Character = Model & {
	["Left Leg"]: Part & {
		LeftFootAttachment: Attachment;
	};
	Humanoid: Humanoid;
	["Right Arm"]: Part & {
		Weld: Weld;
		RightGripAttachment: Attachment;
		RightShoulderAttachment: Attachment;
	};
	Head: Part & {
		HatAttachment: Attachment;
		HairAttachment: Attachment;
		FaceFrontAttachment: Attachment;
		face: Decal;
		Mesh: SpecialMesh;
		FaceCenterAttachment: Attachment;
	};
	["Right Leg"]: Part & {
		RightFootAttachment: Attachment;
	};
	Torso: Part & {
		RightCollarAttachment: Attachment;
		WaistCenterAttachment: Attachment;
		BodyBackAttachment: Attachment;
		Neck: Motor6D;
		LeftCollarAttachment: Attachment;
		["Left Shoulder"]: Motor6D;
		["Left Hip"]: Motor6D;
		["Right Hip"]: Motor6D;
		["Right Shoulder"]: Motor6D;
		BodyFrontAttachment: Attachment;
		WaistBackAttachment: Attachment;
		WaistFrontAttachment: Attachment;
		NeckAttachment: Attachment;
	};
	HumanoidRootPart: Part & {
		RootJoint: Motor6D;
		RootAttachment: Attachment;
	};
	["Left Arm"]: Part & {
		LeftGripAttachment: Attachment;
		Weld: Weld;
		LeftShoulderAttachment: Attachment;
	};
};
