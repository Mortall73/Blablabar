import { $log } from "@tsed/common";
import { PlatformExpress } from "@tsed/platform-express";

import './env';
import { Server } from "./server";

async function createServer() {
	try {
		$log.info("Start initialization server...");

		const server = await PlatformExpress.bootstrap(Server, {});

		await server.listen();

		$log.info("Server initialized");
	} catch (error) {
		$log.error("Create server error:", error) 
	}
}

createServer();