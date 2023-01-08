import { expressApp } from './app';
import { TestController } from './api/test/controller';

const PORT = process.env.PORT;
const myApp = expressApp([new TestController()]);

myApp.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
