<script lang="ts">
  import PieComponent from "./PieComponent.svelte";

    const size = 600;
    export let options : Option[]   

    $: radius = size / 2;
  </script>
  
  <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} >
    <!-- Render parts -->
    {#each options as option}
        <PieComponent {option} {radius} />
    {/each}
  </svg>