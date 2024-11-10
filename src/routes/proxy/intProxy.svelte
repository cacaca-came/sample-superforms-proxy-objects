<script lang="ts">
  import type { SampleScheme } from '$lib/schemas';
  import { intProxy } from 'sveltekit-superforms';
  import type { SuperFormData } from 'sveltekit-superforms/client';

  export let form: SuperFormData<SampleScheme>;

  const proxyWithInitiallyEmptyIfZeroFalse = intProxy(form, 'intProxy.initiallyEmptyIfZeroFalse', {
    initiallyEmptyIfZero: false
  });
  const proxyWithInitiallyEmptyIfZeroTrue = intProxy(form, 'intProxy.initiallyEmptyIfZeroTrue', {
    initiallyEmptyIfZero: true
  });

  const proxyWithEmptyZero = intProxy(form, 'intProxy.empty.zero', { empty: 'zero' });
  const proxyWithEmptyNull = intProxy(form, 'intProxy.empty.null', { empty: 'null' });
  const proxyWithEmptyUndefined = intProxy(form, 'intProxy.empty.undefined', { empty: 'undefined' });
</script>

<h2>intProxy</h2>
<h3>initiallyEmptyIfZero オプション</h3>
<p class="describe">$form が 0 の場合に $proxy を空にするか否か。</p>
<div class="content">
  <label for="initiallyEmptyIfZero-False"> false </label>
  <input
    id="initiallyEmptyIfZero-False"
    type="number"
    name="initiallyEmptyIfZero-False"
    bind:value={$proxyWithInitiallyEmptyIfZeroFalse}
  />
  <p class="$form">{$form.intProxy.initiallyEmptyIfZeroFalse}</p>

  <label for="intProxyInitiallyEmptyIfZero-True"> true </label>
  <input
    id="intProxyInitiallyEmptyIfZero-True"
    type="number"
    name="intProxyInitiallyEmptyIfZero-True"
    bind:value={$proxyWithInitiallyEmptyIfZeroTrue}
  />
  <p class="$form">{$form.intProxy.initiallyEmptyIfZeroTrue}</p>
</div>

<h3>empty オプション</h3>
<p class="describe">$proxy に空文字が渡された場合に $form をどんな値を設定するか。</p>
<div class="content">
  <label for="intProxyEmptZero"> zero </label>
  <input id="intProxyEmptZero" type="number" name="intProxyEmptZero" bind:value={$proxyWithEmptyZero} />
  <p class="$form">{$form.intProxy.empty.zero}</p>

  <label for="intProxyEmptyNull"> null </label>
  <input id="intProxyEmptyNull" type="number" name="intProxyEmptyNull" bind:value={$proxyWithEmptyNull} />
  <p class="$form">{$form.intProxy.empty.null}</p>

  <label for="intProxyEmptyUndefined"> undefined </label>
  <input
    id="intProxyEmptyUndefined"
    type="number"
    name="intProxyEmptyUndefined"
    bind:value={$proxyWithEmptyUndefined}
  />
  <p class="$form">{$form.intProxy.empty.undefined}</p>
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
