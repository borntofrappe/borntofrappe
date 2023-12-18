<script>
	import Center from '$lib/components/blog/Center.svelte';

	import Duck from './Duck.svelte';
	import Quack from './Quack.svelte';
</script>

<Center maxInlineSize="30rem">
	<Quack />
</Center>

<Center element="figure" maxInlineSize="20rem">
	<Duck />
</Center>
