<!-- import extensions.json -->
<script>
    import Extension from '../../components/Extension.svelte'
    import extensions from '$lib/data/extensions.json';

    const date = new Date().getFullYear();
</script>

<div class="min-h-screen items-center justify-center bg-base-200 mx-44">
    <div class="text-center items-center bg-base-200 card shadow-3xl p-10">
        <div class="flex mb-3">
            <a href="/">
                <button class="btn btn-wide bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-700 hover:to-blue-800 ... m-2">
                    Home
                </button>
            </a>
        </div>
        <p>
            Please bare with me as a I begin to migrate extension information.
        </p>
        <p class="mb-4">
            Feel free to check out the <a href="https://wiki.ne-wt.dev/">wiki page</a> for more information.
        </p>
        <div class="grid grid-cols-3 gap-5 items-center text-center">
            {#each extensions as extension }
                <Extension {extension} />
            {/each}
        </div>
        <p class="p-4">Copyright © {date} - Tara Greenwood</p>
    </div>
</div>