<script lang="ts">
  	import Pie from './Pie.svelte';
	
	let options: Option[] = []
	let name = ""
	let weight = 1

	function generateOption(option: Option, newTotalWeight: number) : Option {
		let percentage = (option.weight / newTotalWeight) * 100
		if(percentage > 100) percentage = 100

		return {
			...option,
			percentage
		}
	}

	function onNewOption() {
		const newTotalWeight = options.reduce((count, option) => count + option.weight, 0) + weight
		let percentage = (weight / newTotalWeight) * 100
		if(percentage > 100) percentage = 100

		const newOption = generateOption({name, weight, percentage: null}, newTotalWeight)
		const updatedExistingOptions = options.map((option) => generateOption(option, newTotalWeight))

		options = [...updatedExistingOptions, newOption]
		console.log("2->",options);
		
		name = ""
		weight = 1
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
	<Pie {options}  />
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
</style>