import { Service } from "@tsed/common";
import { MongooseService } from "@tsed/mongoose";

@Service()
export class DatabaseService {

  constructor(mongooseService: MongooseService) {
    mongooseService.get('default');
  }
}