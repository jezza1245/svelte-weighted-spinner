/// <reference types="svelte" />
type Option = {
    name: string
    weight: number

    percentage: number // percentage of total weight (relative weight to total)(REAL weight)
    rotation: number // Number of degrees to rotate slice (eg transform:rotate(<rotation>deg))
    pieSize: number 
}