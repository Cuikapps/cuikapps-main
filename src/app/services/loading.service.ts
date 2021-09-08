import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  appIsLoading = new BehaviorSubject<boolean>(false);

  constructor() {}

  async load<T>(callback: () => Promise<T>): Promise<T> {
    try {
      this.appIsLoading.next(true);
      const loaded = await callback();
      this.appIsLoading.next(false);

      return loaded;
    } catch (error) {
      this.appIsLoading.next(false);
      console.error(error);
      throw new Error(error);
    }
  }
}
