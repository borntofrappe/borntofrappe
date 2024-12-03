<script>
  import "./svg-grid.js";
  import { onMount } from "svelte";
  /** @type { HTMLElement }*/
  let element;

  const text = `                     
              x      
            xxx      
           xxxx      
          xxxx       
          xx         
    xxxxx   xxxxx    
  xxxxxxxxxxxxxxxxx  
 xxxxxxxxxxxxxxxxxx  
 xxxxxxxxxxxxxxxxx   
 xxxxxxxxxxxxxxxxx   
 xxxxxxxxxxxxxxxxx   
 xxxxxxxxxxxxxxxxx   
 xxxxxxxxxxxxxxxxxx  
 xxxxxxxxxxxxxxxxxxx 
 xxxxxxxxxxxxxxxxxxx 
 xxxxxxxxxxxxxxxxxxx 
  xxxxxxxxxxxxxxxxx  
   xxxxxxxxxxxxxxx   
    xxxxxxxxxxxxx    
     xxxx   xxxx     
                     `;

  onMount(() => {
    element.innerHTML = `<svg-grid>
		<pre>${text}</pre>
	</svg-grid>`;
  });
</script>

<figure bind:this={element}>
  <pre>{text}</pre>
</figure>

<style>
  figure {
    margin: 0;
  }

  figure :global(svg-grid) {
    font-size: 1rem;
    line-height: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    align-items: end;
  }

  figure :global(svg-grid > *) {
    margin: 0;
    display: block;
    max-inline-size: 20rem;
  }
</style>
