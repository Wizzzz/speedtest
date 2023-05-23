import chalk from 'chalk';

export const sleep = (ms: number) => new Promise(resolve => setInterval(resolve, ms));

export function logMessage(msg: any) {
	console.log(chalk.green(`[${new Date().toLocaleTimeString()}] ${msg}`));
}

export function logError(msg: any) {
	console.log(chalk.red(`[${new Date().toLocaleTimeString()}] ${msg}`));
}

export function logInfo(msg: any) {
	const debug = process.env.DEBUG === 'true';
	if (debug) {
		console.log(chalk.yellow(`[${new Date().toLocaleTimeString()}] ${msg}`));
	}
}
