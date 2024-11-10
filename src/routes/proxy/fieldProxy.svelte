<script lang="ts">
  import type { SampleScheme } from '$lib/schemas';
  import SuperDebug, { fieldProxy } from 'sveltekit-superforms';
  import type { SuperForm, SuperFormData } from 'sveltekit-superforms/client';

  export let superform: SuperForm<SampleScheme>;
  export let form: SuperFormData<SampleScheme>;

  const proxy = fieldProxy(superform, 'fieldProxy');
</script>

<h2>fieldProxy</h2>
<div class="content">
  <label for="fieldProxy"> default </label>
  <input id="fieldProxy" type="text" name="fieldProxy" bind:value={$proxy} />
</div>

<SuperDebug data={{ $proxy, '$form.fieldProxy': $form.fieldProxy }} />

<style>
  .content {
    display: grid;
    gap: 8px;
    grid-template-columns: 160px 1fr 1fr;
    align-items: center;
    margin-bottom: 16px;
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
