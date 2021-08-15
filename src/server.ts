import errorHandler from "errorhandler";
import app from "./app";
import chalk from "chalk";

if (process.env.NODE_ENV === "development") {
    app.use(errorHandler());
}

const server = app.listen(4000, () => {
    console.log(chalk.green.inverse("Applikácia beží na porte 4000"))
});

export default server;