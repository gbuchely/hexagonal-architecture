import {IGetMockedData} from '../iGetMockedData.interface';
import GetMockedData from '../../../assets/mocked/GetMockedData.json';

export class InitialDbMock implements IGetMockedData {
  getData(payload: any, db?: any): any {
    const initialDb = GetMockedData;
    return initialDb;
  }
}
