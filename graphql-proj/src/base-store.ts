import { observable, action } from "mobx";

class BaseStore {
    @observable listLinks: any = [];

    @action.bound
    updateLinks(newLink: any) {
        this.listLinks.push(newLink)
    }

    @action
    startedResponse(data: any) {
        this.listLinks = data
    }
}

let baseStore = new BaseStore();

export default baseStore;