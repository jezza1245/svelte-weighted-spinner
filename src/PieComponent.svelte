<script lang="ts">
    export let radius
    export let option : Option

    $: halfCircumference = Math.PI * radius;
    $: pieSize = halfCircumference * option.percentage;
    $: dashArray = `0 ${halfCircumference - pieSize} ${pieSize}`;
    
    $: console.log({
        option,
        dashArray
    });
    
</script>

<circle
    r={radius / 2}
    cx={radius}
    cy={radius}
    fill='transparent'
    stroke={`#${Math.floor(Math.random()*16777215).toString(16)}`}
    stroke-width={radius}
    stroke-dasharray={dashArray}
/>