<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import PieComponent from "./PieComponent.svelte";
  import { interactions } from "./store";

  export let options : Option[]   
  export let size : number

  const dispatch = createEventDispatcher() // To dispatch a winner event

  // Min and max wheel isSpinning rotation in degrees
  const min = 4000
  const max = 9000
  
  let randomRotation = 0 // Random rotation for wheel isSpinning
  let isSpinning = false

  // Select winner and return to parent via callback
  function afterWheelSpin() {
      if(isSpinning) {
        const winnerSliceRotation = (randomRotation + 90) % 360 // Determine winner with maffs 
        let winner
        options.some((option) => {            
            if(option.rotation >= winnerSliceRotation) return true
            winner = option
        })
        dispatch('winner', {winner}) // Update winner in global state
        interactions.set(true)
    }
  }

  // Start the spinning
  function doSpin() {
    interactions.set(false) // Prevent interactions
    isSpinning = false // Reset rotation to 0
    setInterval(() => {
        // After short delay start new spin
        isSpinning = true
    }, 100)
  }

  // When isSpinning -> calculate random rotation of the wheel
  $: if(isSpinning) randomRotation = Math.floor(Math.random() * (max - min + 1)) + min;
  
  // Update radius if size of pie changes
  $: radius = size / 2;
  
</script>

<div class="center">

    <div class="chevron">
        {#if options.length}
            ˯
        {/if}
    </div> 
    
    <svg 
        on:transitionend={afterWheelSpin} 
        style={isSpinning ? `transform: rotate(${randomRotation}deg); transition-duration: ${randomRotation+1500}ms;` : ""} 
        width={size}
        height={size} 
        viewBox={`0 0 ${size} ${size}`} 
    >

        <!-- Render options as Pie Slices -->
        {#each options as option}
            <PieComponent {option} {radius} />
        {/each}
    
        <!-- Spin overlay and text - click to isSpinning the wheel -->
        {#if options.length && $interactions}
            <text alignment-baseline='central' text-anchor="middle" x={radius} y={radius} fill='var(--black)' dy=".1em">Click to Spin!</text>
            <circle
            r={radius}
            cx={radius}
            cy={radius}
            fill="#DDD" 
            fill-opacity="0.3"
            z='2'
            class="clickable"
            on:click={doSpin}
            on:keydown={doSpin}
            />
        {/if}

        <!-- Overlay while no options selected-->
        {#if !options.length && $interactions}
            <text alignment-baseline='central' text-anchor="middle" x={radius} y={radius} fill='var(--black)' dy=".1em">Enter some options!</text>
            <circle
            r={radius}
            cx={radius}
            cy={radius}
            fill="#DDD" 
            fill-opacity="0.3"
            z='2'
            />
        {/if}
    </svg>
</div>

<style>
    svg {
        transition-timing-function: cubic-bezier(.26,.32,0,1);
    }
    .clickable:hover {
        cursor: pointer;
    }
    .center {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .chevron {
        font-size: xx-large;
        font-weight: bold;
        height: 40px;
        z-index: 3;
    }
    text {
        font-weight: 600;
    }
</style>