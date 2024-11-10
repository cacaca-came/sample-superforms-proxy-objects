<script lang="ts">
  import {
    superForm,
  } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import BooleanProxy from './proxy/booleanProxy.svelte';
  import DateProxy from './proxy/dateProxy.svelte';
  import IntProxy from './proxy/intProxy.svelte';
  import NumberProxy from './proxy/numberProxy.svelte';
  import StringProxy from './proxy/stringProxy.svelte';
  import ArrayProxy from './proxy/arrayProxy.svelte';
  import FileProxy from './proxy/fileProxy.svelte';
  import FilesProxy from './proxy/filesProxy.svelte';
  import FileFieldProxy from './proxy/fileFieldProxy.svelte';
  import FileFieldsProxy from './proxy/fileFieldsProxy.svelte';
  import FormFieldProxy from './proxy/formFieldProxy.svelte';
  import FieldProxy from './proxy/fieldProxy.svelte';
  import FormFieldProxyForArray from './proxy/formFieldProxyForArray.svelte';

  export let data;

  const superform = superForm(data.form, {
    validators: zod(data.sampleScheme),
    dataType: 'json',
    onSubmit: async () => {
      const { valid, errors: formErrors } = await validateForm();
      if (!valid) {
        $errors = formErrors;
        return;
      }
    }
  });
  const { form, errors, enhance, validateForm } = superform;
</script>

<div class="container">
  <main>
    <form method="post" use:enhance>
      <section id="boolean-proxy">
        <BooleanProxy {form} />
      </section>

      <section id="date-proxy">
        <DateProxy {form} />
      </section>

      <section id="int-proxy">
        <IntProxy {form} />
      </section>

      <section id="number-proxy">
        <NumberProxy {form} />
      </section>

      <section id="string-proxy">
        <StringProxy {form} />
      </section>

      <section id="file-proxy">
        <FileProxy {superform} {form} />
      </section>

      <section id="file-field-proxy">
        <FileFieldProxy {superform} {form} />
      </section>

      <section id="files-proxy">
        <FilesProxy {superform} {form} />
      </section>

      <section id="file-fields-proxy">
        <FileFieldsProxy {superform} {form} />
      </section>

      <section id="array-proxy">
        <ArrayProxy {superform} {form} />
      </section>

      <section id="form-field-proxy">
        <FormFieldProxy {superform} {form} />
      </section>

      <section id="form-field-proxy-for-array">
        <FormFieldProxyForArray {superform} {form} />
      </section>

      <section id="field-proxy">
        <FieldProxy {superform} {form} />
      </section>

      <button type="submit">送信</button>
    </form>
  </main>
  <aside>
    <ul>
      <li><a href="#boolean-proxy">booleanProxy</a></li>
      <li><a href="#date-proxy">dateProxy</a></li>
      <li><a href="#int-proxy">intProxy</a></li>
      <li><a href="#number-proxy">numberProxy</a></li>
      <li><a href="#string-proxy">stringProxy</a></li>
      <li><a href="#file-proxy">fileProxy</a></li>
      <li><a href="#file-field-proxy">fileFieldProxy</a></li>
      <li><a href="#files-proxy">filesProxy</a></li>
      <li><a href="#file-fields-proxy">fileFieldsProxy</a></li>
      <li><a href="#array-proxy">arrayProxy</a></li>
      <li><a href="#form-field-proxy">formFieldProxy</a></li>
      <li><a href="#form-field-proxy-for-array">formFieldProxy [arrayの場合]</a></li>
      <li><a href="#field-proxy">fieldProxy</a></li>
    </ul>
  </aside>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr 300px;
    width: 100%;
    max-width: 1600px;
    margin: auto;

    & aside {
      align-self: start;
      padding: 16px;
      position: sticky;
      top: 16px;
    }
  }

  form {
    display: grid;
    gap: 32px;
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 1.5;
  }

  section {
    background-color: #fafbff;
    border-radius: 8px;
    border: 1px solid gray;
    padding: 32px;

    & h2 {
      font-size: 24px;
      font-weight: 700;
      line-height: 1.5;
      position: sticky;
      top: 0;
      background-color: #fafbff;
      z-index: 100;
      margin-top: 0;
    }
  }

  a {
    color: gray;
    text-decoration: none;
  }

  ul {
    padding-left: 0;

    & li {
      font-size: 24px;
      text-align: right;
      list-style: none;
      padding-left: 0;
      margin-bottom: 12px;
    }
  }
</style>
