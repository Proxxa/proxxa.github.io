<script lang="ts">
    import "../app.css";
    import { navdata } from "$lib/navdests"; 
</script>

<nav class="top-0 left-0 w-full w-full grid grid-cols-2 grid-rows-1 grid-flow-col p-1 bg-slate-50">
    <span class="grid grid-cols-1 grid-rows-1 items-center ps-1">
        <p class="text-xl font-bold">
            Yori's Site
        </p>
    </span>
    
    <span class="grid cols-1 rows-1 grid-flow-col gap-1 place-content-end">
        {#each $navdata as [label, href, title]}
            <a {href} {title} class="px-1.5 py-1 bg-sky-500 text-white rounded">
                {label}            
            </a>
        {/each}
    </span>
</nav>

<div class="grid cols-1 rows-1 p-3 place-items-stretch">
    <div class="grid cols-1 rows-1 place-content-center p-1 rounded bg-slate-300">
        <slot />
    </div>
</div>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.slate.200);
    }
</style>
