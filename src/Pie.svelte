<script lang="ts">
  import PieComponent from "./PieComponent.svelte";
  import { spin } from "./store";

  export let options : Option[]   
  export let size : number
  export let onWinner : (option:Option) => void

  // Min and max wheel spin rotation in degrees
  const min = 2000
  const max = 7000
  
  let randomRotation = 0 // Random rotation for wheel spin

  // Select winner and return to parent via callback [TODO: use global store]
  function afterWheelSpin() {
      if($spin) {
        const winnerSliceRotation = (randomRotation + 90) % 360 
        let winner
        options.some((option) => {            
            if(option.rotation >= winnerSliceRotation) return true
            winner = option
        })
        spin.set(false)
        onWinner(winner)
    }
  }

  function doSpin() {
    spin.set(true)
  }

  // When spin -> calculate random rotation of the wheel
  $: if($spin) randomRotation = Math.floor(Math.random() * (max - min + 1)) + min;
  
  // Update radius if size of pie changes
  $: radius = size / 2;
  
</script>

<div class="center">
    <div class="chevron">˯</div> 
    
    <svg 
        on:transitionend={afterWheelSpin} 
        style={spin ? `transform: rotate(${randomRotation}deg); transition-duration: ${randomRotation+500}ms;` : ""} 
        width={size}
        height={size} 
        viewBox={`0 0 ${size} ${size}`} 
    >

    
        <!-- Render options as Pie Slices -->
        {#each options as option}
            <PieComponent {option} {radius} />
        {/each}
    

        <!-- Spin overlay and text - click to spin the wheel -->
        {#if options.length && !$spin}
            <text alignment-baseline='central' text-anchor="middle" x={radius} y={radius} fill='var(--black)' dy=".1em">Click to Spin!</text>
            <circle
            r={radius}
            cx={radius}
            cy={radius}
            fill="#DDD" 
            fill-opacity="0.3"
            z='999'
            on:click={doSpin}
            on:keydown={doSpin}
            />
        {/if}

    </svg>
</div>

<style>
    svg {
        transition-timing-function: cubic-bezier(.26,.32,0,1);
    }
    .center {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .chevron {
        font-size: xx-large;
    }
    text {
        font-weight: 600;
    }
</style>