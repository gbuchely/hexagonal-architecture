import {IGetMockedData} from '../iGetMockedData.interface';
import GetMockedData from '../../../assets/mocked/GetMockedData.json';

export class AskForPoemsMock implements IGetMockedData {
  getData(payload: any, db?: any): any {
    const service = 'askForPoem';
    const poemsDb = GetMockedData[service];
    return poemsDb.en;
  }
}
