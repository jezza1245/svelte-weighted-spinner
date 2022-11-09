<script lang="ts">
  	import { onMount } from 'svelte';
	import confetti from 'canvas-confetti';
	import Pie from './Pie.svelte';
	import { interactions } from './store'
  	import { getRandomColourHex } from './Utilities';
	
	const size = 500 // Size of Pie
	const halfCircumference = Math.PI * size/2;
	
	let getNewColour = colourGenerator() // Instantiate colour generator
	let options: Option[] = []
	let name = ""
	let weight = 1
	let winnerIndex : number
	let performConfetti

	// Generate a new colour from the set or provided colours. If none left, generate a new random colour
	function* colourGenerator() : Generator<string>{
		const colours = ['#0091be','#eb6404','#95d600','#fec600','#27292d']
		let index = 0
		while(true){
			if(index < colours.length) yield colours[index++]
			else yield `#${getRandomColourHex()}`
		}
		
	}

	// Add the percentage and pieSize of pie calculated for the option given option weight relative to totalWeight
	function addPercentageAndPieSizeToOption(option: Option, newTotalWeight: number) : Option {
		let percentage = (option.weight / newTotalWeight) * 100
		if(percentage > 100) percentage = 100
		let pieSize = halfCircumference * percentage / 100;
		
		return {
			...option,
			percentage,
			pieSize,
			rotation: 0 // Needs to be updated by applyUpdatedRotations when all slices percentages are known
		}
	}

	// Add rotations to options
	function addRotationToOption(incompleteOptions: Option[]) {

		// For each option
		let withRotations = [...incompleteOptions.map((option, index) => {
			// Get PREVIOUS options and sum their percentages
			const previousOptions = incompleteOptions.slice(0,index)			
			const sumPreviousRotations = previousOptions.reduce((sum, option) => sum + option.percentage / 100 * 360, 0)

			// rotation is equal to the sum of the previous options percentages -> then as a percentage of 360
			return {
				...option,
				rotation: sumPreviousRotations,
			}
		})]
		
		// Work out text rotations for slice labels
		if(withRotations.length > 1){
			// For each option
			options = [...withRotations.map((option, index) => {		
				// Get index of next option (looping round array)
				const nextLoopingIndex = (index + 1)%withRotations.length
				let nextRotation = withRotations[nextLoopingIndex].rotation 
				// if 0 set to 360
				nextRotation = nextRotation === 0 ? 360 : nextRotation
				// text rotation is equal to the average of the current and next slice rotation (puts in center of slice)
				return {
					...option,
					textRotation: (option.rotation + nextRotation) / 2,
				}
			})]	
		} else {
			// only 1 element, no need to calculate
			options = withRotations
		}
	}

	// On new option added
	function onNewOption() {
		// Calculate the total weights of all options
		const newTotalWeight = options.reduce((count, option) => count + option.weight, 0) + weight
		// Get next available colour for the slice
		const colour = getNewColour.next().value 
		// Generate a new option and add percentage and pie size given the total weights of all options
		const newOption = addPercentageAndPieSizeToOption({name, weight, colour, percentage: null, rotation: 0, pieSize: null, textRotation: null}, newTotalWeight)
		// Go through existing options and update those with the new total weight
		const updatedExistingOptions = options.map((option) => addPercentageAndPieSizeToOption(option, newTotalWeight))
		// Add new option to updated existing options and add/update rotations
		addRotationToOption([...updatedExistingOptions, newOption])

		// Reset form fields
		name = ""
		weight = 1
	}	

	// When a winner is calculated, set the winner in state [TODO: do from pie, use store]
	function onWinner(event:CustomEvent<{winner: number}> ) {
		winnerIndex = event.detail.winner
		
		// Create confetti explosion with the winners colour only
		performConfetti({
			particleCount: 200,
			spread: 300,
			colors: [options[winnerIndex].colour]
		})
	}

	// Reset state values
	// function doReset() {
	// 	options = []
	// 	winner = undefined
	// 	getNewColour = colourGenerator()
	// }

	// On initial mount
	onMount(() => {
		// Get confetti canvas
		let myCanvas = document.getElementById('confetti-canvas')
		
		// Create callable confetti explosion method from the canvas
		performConfetti = confetti.create(myCanvas, {
			resize: true,
			useWorker: true
		});
	})

	function updateColour(optionName) {
		let tempOptions = options
		tempOptions.forEach((option) => {
			if(option.name === optionName) {
				option.colour = `#${getRandomColourHex()}`
			}
		})
		options = [...tempOptions]
	}

	$: if(winner) document.title = winner.name + " wins!"
	$: winner = options[winnerIndex]
</script> 

<canvas id="confetti-canvas"></canvas>
<a rel="noreferrer" target="_blank" href="https://github.com/jezza1245/svelte-weighted-spinner">Link to source code on GitHub</a>
<form id="addOptionForm" on:submit|preventDefault={onNewOption} />
<main>
	<h1>TC-Spinner</h1>
	<div class="col">

		<table>
			<thead>
				<tr>
					<td>Name</td>
					<td>Weight</td>
					<td></td>
				</tr>
			</thead>
			<tbody>
				{#each options as option}
					<tr>
						<td title={option.name}>{option.name}</td>
						<td>{option.weight}</td>
						<td>
							<div style={`cursor: pointer; height: 20px; width:${option.percentage}px; background-color: ${option.colour}`} 
								on:keydown on:click={() => {$interactions && updateColour(option.name)}}>
							</div>
						</td>
					</tr>
				{/each}
				
				<tr>
					<td>
						<input form="addOptionForm" type="text" bind:value={name} maxlength="25"/>
					</td>
					<td>
						<input form="addOptionForm" type="number" bind:value={weight} min=1 max = 10/>
					</td>
					<td>
						<!-- Disable if no options selected OR no name entered OR wheel is spinning -->
						<input form="addOptionForm" type="submit" value="Add" disabled={options.some((o) => o.name===name) || name === "" || !$interactions} />
					</td>
				</tr>
				
				<!-- Reset button to clear state -->
				<!-- {#if options.length}
					<tr><td colspan="3"><button on:click={doReset} style="float: right;">Reset</button></td></tr>
				{/if} -->
			</tbody>
		</table>
	</div>
	
	
	<!-- Display winner as text-->
	<h2>
		{#if winner}
		Winner: 
		<span style={`color:${winner.colour}`} class="winner-text">
			{winner.name}
		</span>
		!!!
		{/if}
	</h2>

	<Pie on:winner={onWinner} {size} {options} />
</main>

<style>
	:global(:root){
		--blue: #0091be;
		--orange: #eb6404;
		--green: #95d600;
		--yellow: #fec600;
		--grey: #27292d;
		--black: #1f2023;
    }

	#confetti-canvas{
		position:absolute;
		height:100vh;
		width:100vw;
		top:0;
		left:0;
		z-index:4;
		pointer-events:none;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	table {
		position: absolute;
		width: 350px;
		right: 0.5em;
		top: 4em;
	}

	h1 {
		position: absolute;
		top: 0;
		color: var(--blue);
		text-transform: uppercase;
		font-size: 3rem;
		font-weight: 400;
	}
	h2 {
		height: 40px;
		margin: 0;
	}

	a {
		color: var(--orange);
		font-weight: bold;
		position: absolute;
		right:15px;
		top:15px;
	}

	table {
		z-index: 3;
		table-layout: fixed;
	}
	thead{
		font-weight: 800;
	}
	td:nth-child(1) {
		overflow: hidden;
		text-overflow: ellipsis;
		width: 50%;
	}
	td:nth-child(2) {
		width: 15%;
	}
	td:nth-child(3) {
		width: 35%;
	}
	input {
		width: 100%;
	}

	.winner-text {
		font-weight: 600;
	}

	.col {
		display: flex;
		flex-direction: column;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>