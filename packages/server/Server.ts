import { Configuration, Inject, PlatformApplication, PlatformExpressApplication } from "@tsed/common";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as cors from "cors";
import * as session from "express-session";
/**
 * https://github.com/expressjs/method-override
 * Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it. 
 */
import * as methodOverride from "method-override";
import "@tsed/mongoose"; 
import "@tsed/platform-express";

const rootDir = __dirname;

@Configuration({
  httpPort: process.env.PORT || 8080,
  rootDir,
  mongoose: [
    {
      id: "default", // Recommended: define default connection. All models without dbName will be assigned to this connection
      url:  process.env.MONGOOSE_URI,
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
    `${rootDir}/auth/**/*.ts`,
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
      .use(methodOverride())
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({
        extended: true
      }))
      .use(session({
        secret: process.env.SESSION_SECRET_KEY,
        resave: true,
        saveUninitialized: true,
        // maxAge: 36000,
        cookie: {
          path: "/",
          httpOnly: true,
          secure: false,
          maxAge: null
        }
      }));
			//.use(GlobalAcceptMimesMiddleware) // optional
     	//.use(compress({}))
      //.use(methodOverride())
  }
}