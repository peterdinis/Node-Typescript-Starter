import chalk from "chalk";
import errorHandler from "errorhandler";
import app from "./app";

if (process.env.NODE_ENV === "development") {
	app.use(errorHandler());
}

const PORT = process.env.PORT as unknown as number;

const server = app.listen(PORT, () => {
	console.log(chalk.green.inverse(`Applikácia beží na porte ${PORT}`));
});

export default server;
