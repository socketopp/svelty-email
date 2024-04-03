import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type AnalyticsProps = typeof __propDef.props;
export type AnalyticsEvents = typeof __propDef.events;
export type AnalyticsSlots = typeof __propDef.slots;
export default class Analytics extends SvelteComponent<AnalyticsProps, AnalyticsEvents, AnalyticsSlots> {
}
export {};