<script>
    export let extension;
</script>

<div class="card bg-base-100 shadow-xl text-center min-h-full">
    <div class="card-body items-left text-left">
        <a href="{extension.url}" target="_blank">
            <h1 class="card-title text-2xl">
                {extension.name} <i class="fa-solid fa-link"></i>
            </h1>
        </a>
        {extension.description}
        <hr class="my-2">
        <h4 class="card-title">Commands</h4>
        <ul>
            {#if extension.commands.length < 1}
                <li>None</li>
            {:else}
                {#each extension.commands as command}
                    <li>{command}</li>
                {/each}
            {/if}
        </ul>
    </div>
</div>