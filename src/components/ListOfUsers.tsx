import {
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
} from "@tremor/react";

const users: {
	id: string;
	name: string;
	email: string;
	github: string;
}[] = [
	{
		id: "1",
		name: "Pablo Nunez",
		email: "pnunfe@gmail.com",
		github: "PavDev3",
	},
	{
		id: "2",
		name: "Lena Whitehouse",
		email: "lenawhite@redux.com",
		github: "lenawhite",
	},
	{
		id: "3",
		name: "Phil Less",
		email: "philLess@redux.com",
		github: "philLess",
	},
	{
		id: "4",
		name: "John Camper",
		email: "johncamper@redux.com",
		github: "johncamper",
	},
	{
		id: "5",
		name: "Max Balmoore",
		email: "maxbalmoore@redux.com",
		github: "maxbalmoore",
	},
	{
		id: "6",
		name: "Peter Moore",
		email: "petermoore@redux.com",
		github: "petermoore",
	},
	{
		id: "7",
		name: "Joe Sachs",
		email: "joeSachs@redux.com",
		github: "joeSachs",
	},
];

export function ListOfUsers() {
	return (
		<Card>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell>ID</TableHeaderCell>
						<TableHeaderCell>Nombre</TableHeaderCell>
						<TableHeaderCell>Email</TableHeaderCell>
						<TableHeaderCell>GitHub</TableHeaderCell>
						<TableHeaderCell>Acciones</TableHeaderCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map((item) => (
						<TableRow key={item.name}>
							<TableCell>{item.id}</TableCell>
							<TableCell style={{ display: "flex", alignItems: "center" }}>
								<img
									style={{
										width: "30px",
										height: "30px",
										borderRadius: "50%",
										marginRight: "10px",
									}}
									src={`https://unavatar.io/github/${item.github}`}
									alt="Avatar"
								/>
								{item.name}
							</TableCell>
							<TableCell>{item.email}</TableCell>
							<TableCell>{item.github}</TableCell>
							<TableCell>Acciones</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
