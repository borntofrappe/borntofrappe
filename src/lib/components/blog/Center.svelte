<script>
	export let maxInlineSize = '30rem';
	export let element = 'div';
</script>

<svelte:element
	this={element}
	class="[ center flow --space:wide ]"
	style:--measure={maxInlineSize}
	style:--leading="0"
>
	<slot />
</svelte:element>
