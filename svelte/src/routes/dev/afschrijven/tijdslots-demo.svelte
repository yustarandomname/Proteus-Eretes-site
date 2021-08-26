<script lang="ts">
	import Input from "$lib/components/forms/Input.svelte"
	import MultiInput from "$lib/components/forms/MultiInput.svelte"

	const SLOTS = 15 // Number of slots

	let data = {
		"2021-07-20": [
			{from: 8, to: 10, by: "EJZ '20"},
			{from: 11.5, to: 13, by: "EJZ '20"},
		],
		"2021-07-21": [
			{from: 10, to: 13, by: "EJZ '20"},
			{from: 16, to: 18.25, by: "EJZ '20"},
		]
	}

	let slotHeight;

	let selectedSlot = {
		date: "2021-07-20",
		from: null,
		to: null,
		by: "Heeren voortraining '20",
		error: null,
	}

	$: yPos = selectedSlot.from && (selectedSlot.from.split(":")[0] - 8) * slotHeight + selectedSlot.from.split(":")[1] / 60 * slotHeight
	$: yHeight = selectedSlot.to && selectedSlot.from && (selectedSlot.to.split(":")[0] - 8) * slotHeight + selectedSlot.to.split(":")[1] / 60 * slotHeight - yPos
	

	function handleMouse(event) {
		const mouseY = event.clientY - event.target.getBoundingClientRect().top;
		const start = Math.floor(mouseY / slotHeight) + 8
		const minutes = Math.floor(((mouseY % slotHeight) * 4) / slotHeight) * 15

		const startDoubleDigit = start.toString().padStart(2, "0")
		const endDoubleDigit = (start + 2).toString().padStart(2, "0")
		const minutesDoubleDigit = minutes.toString().padStart(2, "0")
		
		selectedSlot.from = startDoubleDigit + ":" + minutesDoubleDigit
		selectedSlot.to = endDoubleDigit + ":" + minutesDoubleDigit
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
		position: relative;
		font-size:0.8em;
		line-height: 2em;
		text-align: right;
		color: var(--light);
	}

	.timeSlots > div::before {
		content: "";
		position: absolute;
		top: calc(50% - 1px);
		left: 0;
		background:var(--light);
		opacity: 0.25;
		height:1px;
		width: calc(100% - 5.5em);
	}

	/* slots */
	.slot {
		background: white;
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

	.slot.selected { background: var(--primary); border-color:var(--primary); cursor: ns-resize; }
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

	<MultiInput>
		<Input type="time" bind:value={selectedSlot.from} />
		<Input type="time" bind:value={selectedSlot.to} />
	</MultiInput>
	
	<div class="timeSelect" >
		<div class="timeSlots">
				{#each new Array(SLOTS) as _,index}
					<div bind:clientHeight={slotHeight}>{index + 8}:00</div>
				{/each}
		</div>

		<div class="reservedSlots">
			{#if data[selectedSlot?.date]}
				{#each data[selectedSlot.date] as slot}
					<div class="slot" style="
							top: calc(2em + {(slot.from - 8) * slotHeight}px - 4px);
							height: calc({(slot.to - slot.from) * slotHeight}px - 0.5em - 3px)
							">
						<div class="time">{slot.from} - {slot.to}</div>
						<div class="by">{slot.by}</div>
					</div>
				{/each}
			{/if}

		</div>
		
		<div class="selectSlotWindow" on:click={handleMouse} />
		
		{#if yPos}
			<div class="slot selected" style="
				top:calc({yPos}px + 2em - 4px);
				height: calc({yHeight}px - 0.5em - 3px)"
					>
				<div class="time">{selectedSlot.from} - {selectedSlot.to}</div>
				<div class="by">{selectedSlot.by}</div>
			</div>
		{/if}
	</div>

	<div class="console">
		<div>from: {selectedSlot.from}</div>
		<div>to: {selectedSlot.to}</div>
	</div>
</div>