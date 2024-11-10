<script lang="ts">
  import { booleanProxy } from 'sveltekit-superforms';
  import type { SuperFormData } from 'sveltekit-superforms/client';
  import type { SampleScheme } from '$lib/schemas';

  export let form: SuperFormData<SampleScheme>;

  let trueStringValue = 'trueDisplay';
  $: proxy = booleanProxy(form, 'booleanProxy.trueDisplay', { trueStringValue });
</script>

<h2>booleanProxy</h2>
<h3>trueStringValue オプション</h3>
<div class="content">
  trueStringValue option
  <input id="trueStringValue" type="text" name="trueStringValue" bind:value={trueStringValue} />
  $proxy
  <input id="trueDisplay" type="text" name="trueDisplay" bind:value={$proxy} />
  $form
  <input type="checkbox" bind:checked={$form.booleanProxy.trueDisplay} />
</div>

<style>
  .content {
    display: grid;
    gap: 8px;
    grid-template-columns: 160px 1fr;
  }

  input {
    padding: 4px;
    border-radius: 4px;
    border: 1px solid gray;
    line-height: 1;
    box-sizing: border-box;
    height: 100%;
  }
</style>
