import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { YourappAppComponent } from '../app/yourapp.component';

beforeEachProviders(() => [YourappAppComponent]);

describe('App: Yourapp', () => {
  it('should create the app',
      inject([YourappAppComponent], (app: YourappAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'yourapp works!\'',
      inject([YourappAppComponent], (app: YourappAppComponent) => {
    expect(app.title).toEqual('yourapp works!');
  }));
});
