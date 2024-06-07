import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export type NavData = [string, string, string];

export const navdata: Writable<NavData[]> = writable([
    ["Home", "/", "Homepage"],
])

export function navAdd(label: stirng, href: string, title: string): void;
export function navAdd(
    label: string,
    href: string,
    title: string,
    ...tail: NavData[]
) {
    // Ensure type. Also, looks cleaner below.
    const data: NavData = [label, href, title];

    navdata.update(nav => {
        nav.push(data);
        return nav;
    });

    if (tail.length >= 1)
        navAdd(tail);
}

