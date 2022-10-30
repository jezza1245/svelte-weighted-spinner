<script lang="ts">
    export let radius
    export let option : Option

    $: halfCircumference = Math.PI * radius;
    $: dashArray = `0 ${halfCircumference - option.pieSize} ${option.pieSize}`; // Used to draw the correct pie slice segment of the circle
</script>

<!-- Pie slice -->
<circle
    r={radius / 2}
    cx={radius}
    cy={radius}
    fill='transparent'
    stroke={option.colour}
    stroke-width={radius}
    stroke-dasharray={dashArray}
    style={`transform:rotate(-${option.rotation}deg)`}
>
</circle>

<!-- Label text within slice -->
<text alignment-baseline='central' text-anchor="middle" transform={`rotate(-${option.textRotation})`} x={radius+radius/2} y={radius} fill='white' stroke-width="2px" dy=".1em">{option.name}</text>
    
<style>
    circle {
        transform-box: fill-box;
        transform-origin: center;
    }
    text {
        transform-origin:50% 50%
    }
</style>