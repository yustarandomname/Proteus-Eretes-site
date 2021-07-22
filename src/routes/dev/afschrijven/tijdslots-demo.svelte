<script lang="ts">
	import Input from "$lib/components/forms/Input.svelte"
	import MultiInput from "$lib/components/forms/MultiInput.svelte"

	const SLOTS = 15 // Number of slots

	let data = {
		"2021-07-20": [
			{from: 8, to: 10, by: "EJZ '20"},
			{from: 11.5, to: 13, by: "EJZ '20"},
		]
	}

	let slotHeight;
	let mouseHoverSelected = false

	let selectedSlot = {
		date: "2021-07-20",
		yPos: null,
		from: null,
		to: null,
		by: "Heeren voortraining '20",
		error: null,
	}

	function handleMousemove(event) {
		const mouseY = event.clientY - event.target.getBoundingClientRect().top;
	}

	function handleMouse(event) {
		const mouseY = event.clientY - event.target.getBoundingClientRect().top;
		const totalH = slotHeight * SLOTS;
		const start = Math.floor(mouseY * 4 / slotHeight) / 4 + 8

		selectedSlot.yPos = (Math.ceil(mouseY * 4 / slotHeight) / (SLOTS * 4)) * totalH
		selectedSlot.from = start
		selectedSlot.to = start + 2
	}
</script>

<style>
	.container {
		width: 20em;
		max-width: 90vw;
		margin: 0 auto
	}

	.timeSelect {
		position: relative;
		margin: 1em 0;
		padding: 1em;
		border: 1px solid black;
		border-radius: 0.75em;
	}

	.timeSlots {
		font-size:0.8em;
		line-height: 2em;
		text-align: right;
		color: var(--light);
	}

	/* slots */
	.slot {
		position: absolute;
    width: calc(100% - 6em);
    top: 0;
    border: 1px solid;
    border-radius: 0.5em;
    padding: 0.25em;
		left: 1em
	}

	.slot > .time {font-size: 0.8em}
	.slot > .by {font-size: 0.8em; color: var(--light)}
	.slot > * {user-select: none}

	.slot.selected { background: var(--primary); cursor: ns-resize }
	.slot.selected > * { color: white }

	/* SELECT SLOT */
	.selectSlotWindow {
		height:calc(100% - 2em);
		width:100%;
		position: absolute;
		top:1em;
		left:0;
		cursor: pointer
	}
</style>

<div class="container">
	<h3>Afschrijven</h3>

	<Input type="date" bind:value={selectedSlot.date} />
	
	<div class="timeSelect" >
		<div class="timeSlots">
				{#each new Array(15) as _,index}
					<div bind:clientHeight={slotHeight}>{index + 8}:00</div>
				{/each}
		</div>

		<div class="reservedSlots">
			{#if data[selectedSlot?.date]}
				{#each data[selectedSlot.date] as slot}
					<div class="slot" style="
							top: calc(2em + {(slot.from - 8) * slotHeight}px - 1px);
							height: calc({(slot.to - slot.from) * slotHeight}px - 0.5em - 2px)
							">
						<div class="time">{slot.from} - {slot.to}</div>
						<div class="by">{slot.by}</div>
					</div>
				{/each}
			{/if}

		</div>
		
		<div class="selectSlotWindow" on:click={handleMouse} />
		
		{#if selectedSlot.from}
			<div class="slot selected" style="
				top:calc({selectedSlot.yPos}px + 1em);"
					>
				<div class="time">{selectedSlot.from} - {selectedSlot.to}</div>
				<div class="by">{selectedSlot.by}</div>
			</div>
		{/if}
	</div>

	<div class="console">
		<div>date: {selectedSlot.date}</div>
		<div>from: {selectedSlot.from}</div>
		<div>to: {selectedSlot.to}</div>
		<br>
		<div>slot Height: {slotHeight}</div>	

		<div>entered: {mouseHoverSelected}</div>
	</div>
</div>