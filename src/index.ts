import { expressApp } from './app/app';
import { PORT } from './common/constants';

const myApp = expressApp();

myApp.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
