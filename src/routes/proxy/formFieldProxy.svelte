<script lang="ts">
  import type { SampleScheme } from '$lib/schemas';
  import SuperDebug, { formFieldProxy } from 'sveltekit-superforms';
  import type { SuperForm, SuperFormData } from 'sveltekit-superforms/client';

  export let superform: SuperForm<SampleScheme>;
  export let form: SuperFormData<SampleScheme>;

  const { path, value, errors, constraints } = formFieldProxy(superform, 'formFieldProxy.string');
</script>

<h2>formFieldProxy</h2>
<div class="content">
  <label for="formFieldProxy"> formFieldProxy.string </label>
  <input id="formFieldProxy" type="text" name="formFieldProxy" bind:value={$value} />
</div>

<SuperDebug
  data={{
    path,
    $value,
    $errors,
    $constraints,
    '$form.formFieldProxy.string': $form.formFieldProxy.string
  }}
/>

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
