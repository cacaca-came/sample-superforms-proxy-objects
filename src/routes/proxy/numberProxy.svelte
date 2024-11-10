<script lang="ts">
  import type { SampleScheme } from '$lib/schemas';
  import { numberProxy } from 'sveltekit-superforms';
  import type { SuperFormData } from 'sveltekit-superforms/client';

  export let form: SuperFormData<SampleScheme>;

  const proxyWithInitiallyEmptyIfZeroFalse = numberProxy(form, 'numberProxy.initiallyEmptyIfZeroFalse', {
    initiallyEmptyIfZero: false
  });
  const proxyWithInitiallyEmptyIfZeroTrue = numberProxy(form, 'numberProxy.initiallyEmptyIfZeroTrue', {
    initiallyEmptyIfZero: true
  });

  let delimiterOption: ',' | '.' | undefined = ',';
  $: proxyWithDelimiter = numberProxy(form, 'numberProxy.delimiter', { delimiter: delimiterOption });

  const proxyWithEmptyZero = numberProxy(form, 'numberProxy.empty.zero', { empty: 'zero' });
  const proxyWithEmptyNull = numberProxy(form, 'numberProxy.empty.null', { empty: 'null' });
  const proxyWithEmptyUndefined = numberProxy(form, 'numberProxy.empty.undefined', { empty: 'undefined' });
</script>

<h2>numberProxy</h2>
<h3>initiallyEmptyIfZero オプション</h3>
<p class="describe">$form が 0 の場合に $proxy を空にするか否か。</p>
<div class="content">
  <label for="initiallyEmptyIfZero-False"> false </label>
  <input
    id="initiallyEmptyIfZero-False"
    type="text"
    inputmode="numeric"
    name="initiallyEmptyIfZero-False"
    bind:value={$proxyWithInitiallyEmptyIfZeroFalse}
  />
  <p class="$form">{$form.numberProxy.initiallyEmptyIfZeroFalse}</p>

  <label for="numberProxyInitiallyEmptyIfZero-True"> true </label>
  <input
    id="numberProxyInitiallyEmptyIfZero-True"
    type="text"
    inputmode="numeric"
    name="numberProxyInitiallyEmptyIfZero-True"
    bind:value={$proxyWithInitiallyEmptyIfZeroTrue}
  />
  <p class="$form">{$form.numberProxy.initiallyEmptyIfZeroTrue}</p>
</div>

<h3>empty オプション</h3>
<p class="describe">$proxy に空文字が渡された場合に $form をどんな値を設定するか。</p>
<div class="content">
  <label for="numberProxyEmptZero"> zero </label>
  <input
    id="numberProxyEmptZero"
    type="text"
    inputmode="numeric"
    name="numberProxyEmptZero"
    bind:value={$proxyWithEmptyZero}
  />
  <p class="$form">{$form.numberProxy.empty.zero}</p>

  <label for="numberProxyEmptyNull"> null </label>
  <input
    id="numberProxyEmptyNull"
    type="text"
    inputmode="numeric"
    name="numberProxyEmptyNull"
    bind:value={$proxyWithEmptyNull}
  />
  <p class="$form">{$form.numberProxy.empty.null}</p>

  <label for="numberProxyEmptyUndefined"> undefined </label>
  <input
    id="numberProxyEmptyUndefined"
    type="text"
    inputmode="numeric"
    name="numberProxyEmptyUndefined"
    bind:value={$proxyWithEmptyUndefined}
  />
  <p class="$form">{$form.numberProxy.empty.undefined}</p>
</div>

<h3>delimiter オプション</h3>
<p class="describe">数値の区切り文字。$proxyの少数の区切り文字として何を使うか。</p>
<p>
  「.」を指定した場合に「,」を入力しても以降は切り捨てられますが、「,」を指定した場合に「,」を入力すると以降は少数として扱われます。小数点をカンマで区切る国の場合、設定すると良いでしょう。
</p>
<div class="content">
  <select id="numberProxyDelimiter" name="numberProxyDelimiter" bind:value={delimiterOption}>
    <option value="," selected>,</option>
    <option value=".">.</option>
  </select>
  <input
    id="numberProxyDelimiter"
    type="text"
    inputmode="numeric"
    name="numberProxyDelimiter"
    bind:value={$proxyWithDelimiter}
  />
  <p class="$form">{$form.numberProxy.delimiter}</p>
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

  input,
  select {
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
