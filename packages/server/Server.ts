import { Configuration, Inject, PlatformApplication, PlatformExpressApplication } from "@tsed/common";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as cors from "cors";
import "@tsed/mongoose"; 
import "@tsed/platform-express";

const rootDir = __dirname;

@Configuration({
  httpPort: 8080,
  rootDir,
  mongoose: [
    {
      id: "default", // Recommended: define default connection. All models without dbName will be assigned to this connection
      url:  process.env.MONGOOSE_URI ||  "mongodb://127.0.0.1:27017/blog",
      connectionOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    }
  ],
  mount: {
    "/rest": [
      `${rootDir}/controllers/**/*.ts`,
    ]
  },
  "componentsScan": [
    `${rootDir}/services/**/*.ts`,
  ],
  acceptMimes: ["application/json"],
})
export class Server {
	@Inject()
  app: PlatformApplication;

	/**
   * This method configure the express middleware required by your application to works.
   * @returns {Server}
   */
	public $beforeRoutesInit(): void | Promise<any> {
    this.app
      .use(cors())
			.use(cookieParser())
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({
        extended: true
			}));
			//.use(GlobalAcceptMimesMiddleware) // optional
     	//.use(compress({}))
      //.use(methodOverride())
  }
}