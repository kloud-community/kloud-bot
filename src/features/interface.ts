import type { AllEvents, Event } from "~/events/type";

/**
 * ひとつひとつの機能のインターフェースです。
 *
 * 機能を追加する方法は Contribution guide を参考にしてください。
 */
export interface Feature {
  /**
   * discord.js からイベントを受信した際のイベントハンドラです。
   *
   * @param event 受信したイベントハンドラ。{@link Event}、または {@link AllEvents} を参照して下さい。
   */
  onEvent(event: AllEvents): Promise<void>;
}
