<script>
    import Footer from '$lib/Footer.svelte';

    import '../app.css';
</script>


<div>
    <slot />
    <Footer />
</div>

<style>
    div {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    div :global(footer) {
        margin-top: auto;
    }
</style>