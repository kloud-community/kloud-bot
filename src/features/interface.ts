import type { AllEvents } from "~/events/type";
import type { Client } from "discord.js";

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

/**
 * Bot起動時に初期化される機能が実装するべきインターフェイスをです。
 *
 * Slash Commandの登録など、Bot起動時に行いたい処理を記入してください。
 */
export interface Initializer {
  /**
   * Bot起動時に実行される処理です。
   * このメソッドは、{@link Client}が準備完了した際に呼び出されます。
   *
   * @param client Discord.jsのBotクラアントです。 {@link Client}を参照してください。
   */
  onReady(client: Client): Promise<void>;
}
