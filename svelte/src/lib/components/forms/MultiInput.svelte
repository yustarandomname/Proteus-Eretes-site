<style>
	.inputWrapper {
		display: flex;
		width: 100%;
		gap: 1em;
	}

	:global(.inputWrapper > *) {
		flex-grow: 1;
	}
</style>

<div class="inputWrapper">
	<slot />
</div>