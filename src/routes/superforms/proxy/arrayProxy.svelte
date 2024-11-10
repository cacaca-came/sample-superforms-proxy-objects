<script lang="ts">
  import type { SampleScheme } from '$lib/schemas';
  import SuperDebug, { arrayProxy } from 'sveltekit-superforms';
  import type { SuperForm, SuperFormData } from 'sveltekit-superforms/client';

  export let superform: SuperForm<SampleScheme>;
  export let form: SuperFormData<SampleScheme>;

  const { path, values, errors, valueErrors } = arrayProxy(superform, 'arrayProxy');
</script>

<h2>arrayProxy</h2>
<fieldset>
  <label for="arrayProxy-1">
    <input id="arrayProxy-1" type="checkbox" name="checkbox" value="1" bind:group={$form.arrayProxy} />
    Value1
  </label>
  <label for="arrayProxy-2">
    <input id="arrayProxy-2" type="checkbox" name="checkbox" value="2" bind:group={$form.arrayProxy} />
    Value2
  </label>
  <label for="arrayProxy-3">
    <input id="arrayProxy-3" type="checkbox" name="checkbox" value="99" bind:group={$form.arrayProxy} />
    Value99
  </label>
</fieldset>
<SuperDebug
  data={{
    path,
    $values,
    $errors,
    $valueErrors
  }}
/>

<style>
  label {
    min-width: 160px;
    text-align: right;
  }

  input {
    padding: 4px;
    border-radius: 4px;
    border: 1px solid gray;
    line-height: 1;
    box-sizing: border-box;
    height: 100%;
  }

  fieldset {
    margin-bottom: 16px;
  }
</style>
