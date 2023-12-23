import type { ClientEvents } from "discord.js";

export type Event<T extends keyof ClientEvents> = {
  type: T;
  eventArgs: ClientEvents[T];
};
export type AllEvents = {
  [Key in keyof ClientEvents]: Event<Key>;
}[keyof ClientEvents];
