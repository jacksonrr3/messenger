import setValueByPath from '../utils/set';
import EventBus from './EventBus';

type Indexed = Record<string, any>;

export const StoreEvents = {
  Updated: 'updated',
};

class Store extends EventBus {
  private state: Indexed = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    setValueByPath(this.state, path, value);

    // метод EventBus
    this.emit(StoreEvents.Updated);
  }
}

export const store = new Store();
