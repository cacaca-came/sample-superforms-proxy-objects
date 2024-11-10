<script lang="ts">
  import type { SampleScheme } from '$lib/schemas';
  import SuperDebug, { fileFieldProxy } from 'sveltekit-superforms';
  import type { SuperForm, SuperFormData } from 'sveltekit-superforms/client';

  export let superform: SuperForm<SampleScheme>;
  export let form: SuperFormData<SampleScheme>;

  const { path, value, errors, constraints } = fileFieldProxy(superform, 'fileFieldProxy', { empty: 'null' });
</script>

<h2>fileFieldProxy</h2>
<div class="content">
  <input id="fileFieldProxy" type="file" name="fileFieldProxy" multiple bind:files={$value} />
</div>
<SuperDebug data={{ path, $value, $errors, $constraints, '$form.fileFieldProxy': $form.fileFieldProxy }} />

<style>
  .content {
    display: grid;
    gap: 8px;
    grid-template-columns: 1fr;
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
