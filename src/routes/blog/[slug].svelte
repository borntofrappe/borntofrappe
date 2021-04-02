<script context="module">
  export async function load({page}) {
    const {slug} = page.params;

    return {
      props: {
        slug
      }
    }
  }
</script>

<script>
  export let slug;
</script>

<main>
	<h1>{slug}</h1>
	<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, praesentium temporibus placeat eius ullam voluptatibus recusandae. Magnam doloremque reiciendis quam.</p>
</main>
