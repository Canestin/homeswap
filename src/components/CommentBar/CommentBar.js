import React from "react";

function CommentBar({ note }) {
	return (
		<div
			style={{
				display: "inline-flex",
				alignItems: "center",
				gap: 10,
			}}
		>
			<div
				style={{
					width: 100,
					height: 5,
					borderRadius: 10,
					backgroundColor: "#acabab",
				}}
			>
				<div
					style={{
						width: `${note * 20}%`,
						height: 5,
						borderRadius: 10,
						backgroundColor: "#ff385c",
					}}
				></div>
			</div>
			<span style={{ fontSize: 12 }}>{note}</span>
		</div>
	);
}

export default CommentBar;
