<script lang="ts">
  import type { SampleScheme } from '$lib/schemas';
  import SuperDebug, { fileProxy } from 'sveltekit-superforms';
  import type { SuperForm, SuperFormData } from 'sveltekit-superforms/client';

  export let superform: SuperForm<SampleScheme>;
  export let form: SuperFormData<SampleScheme>;

  const proxy = fileProxy(superform, 'fileProxy', { empty: 'null' });
</script>

<h2>fileProxy</h2>
<div class="content">
  <input id="fileProxy" type="file" name="fileProxy" multiple bind:files={$proxy} />
</div>
<SuperDebug data={{ $fileproxy: $proxy, '$form.fileProxy': $form.fileProxy }} />

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
