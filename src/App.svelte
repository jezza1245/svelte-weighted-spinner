<script lang="ts">
  	import Pie from './Pie.svelte';
	
	let options: Option[] = []
	let name = ""
	let weight = 1
	let spin = false

	const size = 500
	const halfCircumference = Math.PI * size/2;

	function generateOption(option: Option, newTotalWeight: number) : Option {
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

	function applyUpdatedRotations(incompleteOptions: Option[]) {
		options = [...incompleteOptions.map((option, index) => {
			const previousOptions = incompleteOptions.slice(0,index)			
			const sumPreviousRotations = previousOptions.reduce((sum, option) => sum + option.percentage / 100 * 360, 0)
			return {
				...option,
				rotation: sumPreviousRotations
			}
		})]
	}

	function onNewOption() {
		const newTotalWeight = options.reduce((count, option) => count + option.weight, 0) + weight
		let percentage = (weight / newTotalWeight) * 100
		if(percentage > 100) percentage = 100

		const newOption = generateOption({name, weight, percentage: null, rotation: null, pieSize: null}, newTotalWeight)
		const updatedExistingOptions = options.map((option, index) => generateOption(option, newTotalWeight))

		applyUpdatedRotations([...updatedExistingOptions, newOption])
		name = ""
		weight = 1
	}	

	function onWinner(option: Option) {
		alert('Winner:'+option.name)
		spin = false
	}

</script> 

<main>
	<h1>TC-Spinner</h1>
	<table>
		<thead>
			<tr>
				<td>Name</td>
				<td>Weight</td>
			</tr>
		</thead>
		<tbody>
			{#each options as option}
				<tr>
					<td>{option.name}</td>
					<td>{option.weight}</td>
				</tr>
			{/each}
		</tbody>
	</table>
	<form on:submit|preventDefault={onNewOption}>
		<input type="text" bind:value={name}/>
		<input type="number" bind:value={weight}/>
		<input type="submit" value="Add" disabled={options.some((o) => o.name===name) || name === ""} />
	</form>
	<Pie {onWinner} {size} {options} {spin}  />
	{#if options.length}
		<img alt="neil-spin" class="gif tl" src="images/neil-spin.gif" />
		{#if options.length > 1}
			<img alt="excited-spin" class="gif tr" src="images/spin-excited.gif" />
		{/if}
	{/if}
	<button on:click={() => spin = true}>Spin!</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.gif {
		position: absolute;
		height: 200px;
		width: 200px;
	}
	.tr{
		top: 0;
		right: 0;
	}
	.tl{
		top: 0;
		left: 0;
	}
</style>