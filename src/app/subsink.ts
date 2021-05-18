import {SubscriptionLike} from 'rxjs';

/**
 * Subscription sink that holds Observable subscriptions
 * until you call unsubscribe on it in ngOnDestroy.
 */
export class SubSink {

  protected _subs: SubscriptionLike[] = [];

  /**
   * Subscription sink that holds Observable subscriptions
   * until you call unsubscribe on it in ngOnDestroy.
   *
   * @example
   * In Angular:
   * ```
   *   private subs = new SubSink();
   *   ...
   *   this.subs.sink = observable$.subscribe(
   *   this.subs.add(observable$.subscribe(...));
   *   ...
   *   ngOnDestroy() {
   *     this.subs.unsubscribe();
   *   }
   * ```
   */
  constructor() {}

  /**
   * Add subscriptions to the tracked subscriptions
   * @example
   *  this.subs.add(observable$.subscribe(...));
   */
  add(...subscriptions: SubscriptionLike[]): void {
    this._subs = this._subs.concat(subscriptions);
  }

  /**
   * Assign subscription to this sink to add it to the tracked subscriptions
   * @example
   *  this.subs.sink = observable$.subscribe(...);
   */
  set sink(subscription: SubscriptionLike): void {
    this._subs.push(subscription);
  }

  /**
   * Unsubscribe to all subscriptions in ngOnDestroy()
   * @example
   *   ngOnDestroy() {
   *     this.subs.unsubscribe();
   *   }
   */
  unsubscribe(): void {
    this._subs.forEach(sub => sub && sub.unsubscribe());
    this._subs = [];
  }
}
