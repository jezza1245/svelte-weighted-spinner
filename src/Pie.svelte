<script lang="ts">
  import PieComponent from "./PieComponent.svelte";
  export let options : Option[]   
  export let size : number
  export let spin : boolean
  export let onWinner : (option:Option) => void
  let randomRotation = 0

  function afterWheelSpin() {
    if(spin) {
        const winnerSliceRotation = (randomRotation + 90) % 360 
        let winner
        options.some((option) => {            
            if(option.rotation >= winnerSliceRotation) return true
            winner = option
        })
        console.log({winner});
        onWinner(winner)
    }
  }

  $: if(spin) {
    randomRotation = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
  }

  $: radius = size / 2;
  
</script>

<svg 
    on:transitionend={afterWheelSpin} 
    class={spin ? "spin" : ""} 
    style={spin ? `transform: rotate(${randomRotation}deg)` : ""} 
    width={size}
    height={size} 
    viewBox={`0 0 ${size} ${size}`} 
>
    <!-- Render parts -->
    {#each options as option}
        <PieComponent {option} {radius} />
    {/each}
</svg>

<style>
    svg {
        transition-duration: 5s;
        transition-timing-function: cubic-bezier(.26,.32,0,1);
    }
</style>