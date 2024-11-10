<script lang="ts">
  import type { SampleScheme } from '$lib/schemas';
  import SuperDebug, { formFieldProxy, arrayProxy } from 'sveltekit-superforms';
  import type { SuperForm, SuperFormData } from 'sveltekit-superforms/client';

  export let superform: SuperForm<SampleScheme>;
  export let form: SuperFormData<SampleScheme>;

  // 空文字やundefinedを許容するのであればこんな書き方もできる。必須項目になら使えるかも。
  const { path, values, errors, valueErrors } = arrayProxy(superform, 'formFieldProxy.array');
  const {
    path: path0,
    value: value0,
    errors: errors0,
    constraints: constraints0
  } = formFieldProxy(superform, 'formFieldProxy.array[0]');
  const {
    path: path1,
    value: value1,
    errors: errors1,
    constraints: constraints1
  } = formFieldProxy(superform, 'formFieldProxy.array[1]');
  const {
    path: path2,
    value: value2,
    errors: errors2,
    constraints: constraints2
  } = formFieldProxy(superform, 'formFieldProxy.array[2]');
</script>

<h2>formFieldProxy arrayの場合</h2>
<p>
  arrayの場合には、formFieldProxyは使えないのでarrayProxyを使いましょう。<br />
  ただし、１対１で対応させたい場合にはindexを指定してProxyにできます。（空文字はそのまま入ります。）<br />
  また、このフィールドの指定の仕方は他のproxyでも利用可能です
</p>
<fieldset>
  <label for="formFieldProxy-0">
    <input id="formFieldProxy-0" type="text" name="formFieldProxy-1" bind:value={$value0} />
  </label>
  <label for="formFieldProxy-1">
    <input id="formFieldProxy-1" type="text" name="formFieldProxy-2" bind:value={$value1} />
  </label>
  <label for="formFieldProxy-2">
    <input id="formFieldProxy-2" type="text" name="formFieldProxy-3" bind:value={$value2} />
  </label>
</fieldset>

<SuperDebug
  data={{
    arrayProxy: {
      path,
      $values,
      $errors,
      $valueErrors
    },
    'formFieldProxy array[0]': {
      path0,
      $value0,
      $errors0,
      $constraints0
    },
    'formFieldProxy array[1]': {
      path1,
      $value1,
      $errors1,
      $constraints1
    },
    'formFieldProxy array[2]': {
      path2,
      $value2,
      $errors2,
      $constraints2
    },
    '$form.formFieldProxy.array': $form.formFieldProxy.array
  }}
/>

<style>
  input {
    padding: 4px;
    border-radius: 4px;
    border: 1px solid gray;
    line-height: 1;
    box-sizing: border-box;
    height: 100%;
  }

  fieldset {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
  }
</style>
