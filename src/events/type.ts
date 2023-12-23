import type { ClientEvents } from "discord.js";

/**
 * discord.js から受信したイベントです。
 *
 * discord.js からは {@link Client}() 関数でイベントを受信しますが、この関数の第一引数が {@link Event.type}、
 * 第二引数に渡されるイベントハンドラの各引数が {@link Event.eventArgs} になります。
 *
 * どのようにイベントが渡されるかの具体的なイメージは、以下の example を参考にして下さい。
 *
 * @example
 * import { YourFeature } from "~/features/your-feature";
 *
 * const client: Client = // some initialization
 * const yourFeature: Feature = new YourFeature();
 *
 * yourFeature.on(
 *   "messageCreate",
 *   (...events) => yourFeature.onEvent({ type: "messageCreate", eventArgs: events })
 * );
 */
export type Event<T extends keyof ClientEvents> = {
  type: T;
  eventArgs: ClientEvents[T];
};

/**
 * すべての {@link Event} の union です。
 *
 * イベントの判別には、{@link AllEvents.type} (= {@link Event.type}) フィールドを使用して下さい。各 {@link Event} の詳しい説明は
 * discord.js のドキュメントか {@link ClientEvents} を参照してください。
 */
export type AllEvents = {
  [Key in keyof ClientEvents]: Event<Key>;
}[keyof ClientEvents];
