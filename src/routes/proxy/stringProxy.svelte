<script lang="ts">
  import type { SampleScheme } from '$lib/schemas';
  import { stringProxy } from 'sveltekit-superforms';
  import type { SuperFormData } from 'sveltekit-superforms/client';

  export let form: SuperFormData<SampleScheme>;

  const proxyWithEmptyDefault = stringProxy(form, 'stringProxy.empty.default', { empty: undefined });
  const proxyWithEmptyUndefined = stringProxy(form, 'stringProxy.empty.undefined', { empty: 'undefined' });
  const proxyWithEmptyNull = stringProxy(form, 'stringProxy.empty.null', { empty: 'null' });
</script>

<h2>stringProxy</h2>
<h3>empty オプション</h3>
<p class="describe">$proxy に空文字が渡された場合に $form をどんな値を設定するか。</p>
<div class="content">
  <label for="stringProxy"> default </label>
  <input id="stringProxy" type="text" name="stringProxy" bind:value={$proxyWithEmptyDefault} />
  <p class="$form">{$form.stringProxy.empty.default}</p>

  <label for="stringProxyEmptyUndefined"> undefined </label>
  <input
    id="stringProxyEmptyUndefined"
    type="text"
    name="stringProxyEmptyUndefined"
    bind:value={$proxyWithEmptyUndefined}
  />
  <p class="$form">{$form.stringProxy.empty.undefined}</p>

  <label for="stringProxyEmptyNull"> null </label>
  <input id="stringProxyEmptyNull" type="text" name="stringProxyEmptyNull" bind:value={$proxyWithEmptyNull} />
  <p class="$form">{$form.stringProxy.empty.null}</p>
</div>

<style>
  .content {
    display: grid;
    gap: 8px;
    grid-template-columns: 120px 1fr 1fr;
  }

  label {
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

  .\$form {
    margin: 0;
  }
</style>
