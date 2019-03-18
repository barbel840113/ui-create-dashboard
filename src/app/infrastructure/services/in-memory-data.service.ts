import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const forms = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
    ];

    const formsType = [
       {id : 1000, type: 'datetimepicker', typecode :100000}
    ];

    const auth = {isLogged : true};
    return {forms, auth};
  }
}