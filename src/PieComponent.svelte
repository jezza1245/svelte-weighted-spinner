<script lang="ts">
    export let radius
    export let option : Option
    $: halfCircumference = Math.PI * radius;

    $: dashArray = `0 ${halfCircumference - option.pieSize} ${option.pieSize}`;

    // $: console.log({
    //     option,
    //     dashArray
    // });
    
</script>

<circle
    r={radius / 2}
    cx={radius}
    cy={radius}
    fill='transparent'
    stroke={`#${Math.floor(Math.random()*16777215).toString(16)}`}
    stroke-width={radius}
    stroke-dasharray={dashArray}
    style={`transform:rotate(-${option.rotation}deg)`}
/>
    
<style>
    circle {
        transform-box: fill-box;
        transform-origin: center;
    }
</style>