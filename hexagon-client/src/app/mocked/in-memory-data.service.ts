import {Injectable} from '@angular/core';
import {getStatusText, InMemoryDbService, RequestInfo, RequestInfoUtilities, ResponseOptions, STATUS} from 'angular-in-memory-web-api';
import {AskForPoemsMock} from './data/ask-for-poems-mock';
import {InitialDbMock} from './data/initial-db';


const mockedDataServices = {
  askForPoem: new AskForPoemsMock()
};

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  private db: any;
  constructor() { }

  createDb(reqInfo?: RequestInfo) {
    const db = new InitialDbMock().getData(reqInfo);
    this.db = {db};
    return this.db;
  }

  get(reqInfo: RequestInfo) {
    console.log('Request Collection : ' + reqInfo.collectionName);
    return this.handleRequest(reqInfo, mockedDataServices);
  }

  parseRequestUrl(url: string, utils: RequestInfoUtilities) {
    console.log('URL -->' + url);
    if (url.endsWith('.json')) {
      return utils.parseRequestUrl(url);
    }

    const splitted = url.split('/');
    console.log('splitted -->' + splitted[splitted.length - 1]);
    const isLastArgumentIsId = Number.isInteger(parseInt(splitted[splitted.length - 1], 10));
    console.log('isLastArgumentIsId -->' + isLastArgumentIsId);
    const collectionIndex = isLastArgumentIsId ? splitted.length - 3 : splitted.length - 2;
    console.log('collectionIndex -->' + collectionIndex);
    const actionIndex = isLastArgumentIsId ? splitted.length - 2 : splitted.length - 1;
    console.log('actionIndex -->' + actionIndex);
    const collectionName = splitted[collectionIndex] +   splitted[actionIndex];
    // const newUrl = splitted.join(‘/’);
    const parsed = utils.parseRequestUrl(url);
    /*parsed.apiBase = ApiService.BASE_PATH;*/
    parsed.collectionName = collectionName;
    console.log('collectionName -->' + parsed.collectionName);
    parsed.id = isLastArgumentIsId ? splitted[splitted.length - 1] as   any : '';
    console.log('id -->' + parsed.id);
    parsed.resourceUrl = parsed.resourceUrl + parsed.collectionName;
    console.log('resourceUrl -->' + parsed.resourceUrl);
    console.log('parsed -->' + parsed);
    /*return 'http://localhost:8080/api/askForPoem?lang=en';*/
    return 'askForPoem';
  }
  private handleRequest(reqInfo: RequestInfo, dataRepo: any) {
    return reqInfo.utils.createResponse$(() => {
      const dataEncapsulation =  reqInfo.utils.getConfig().dataEncapsulation;
      const data =   dataRepo[reqInfo.collectionName].getData(reqInfo, this.db);
      const options: ResponseOptions = data ?
        {
          body: dataEncapsulation ? {data} : data,
          status: STATUS.OK
        } :
        {
          body: {error: `'Not found`},
          status: STATUS.NOT_FOUND
        };

      return this.finishOptions(options, reqInfo);
    });
  }

  private finishOptions(options: ResponseOptions, {headers, url}: RequestInfo) {
    options.statusText = getStatusText(options.status);
    options.headers = headers;
    options.url = url;
    return options;
  }
}
