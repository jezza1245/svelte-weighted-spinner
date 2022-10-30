/// <reference types="svelte" />
type Option = {
    name: string
    weight: number
    colour: string
    percentage: number // percentage of total weight (relative weight to total)(REAL weight)
    rotation: number // Number of degrees to rotate slice (eg transform:rotate(<rotation>deg))
    textRotation: number // Number of degrees to rotate text (halfway between rotation of this and of next slice)
    pieSize: number 
}