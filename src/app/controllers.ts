import { Repository } from '../repository/repository';
import { TestController } from '../api/test/controller';

const repository = new Repository();

const controllerClasses = [TestController(repository)];

export const controllers = controllerClasses.map((controller) => new controller());
