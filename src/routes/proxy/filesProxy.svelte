<script lang="ts">
  import type { SampleScheme } from '$lib/schemas';
  import SuperDebug, { filesProxy } from 'sveltekit-superforms';
  import type { SuperForm, SuperFormData } from 'sveltekit-superforms/client';

  export let superform: SuperForm<SampleScheme>;
  export let form: SuperFormData<SampleScheme>;

  const proxy = filesProxy(superform, 'filesProxy');
</script>

<h2>filesProxy</h2>
<div class="content">
  <input id="filesProxy" type="file" name="filesProxy" multiple bind:files={$proxy} />
</div>
<SuperDebug data={{ $proxy, '$form.filesProxy': $form.fileProxy }} />

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
