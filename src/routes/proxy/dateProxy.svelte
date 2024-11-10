<script lang="ts">
  import type { SampleScheme } from '$lib/schemas';
  import { dateProxy } from 'sveltekit-superforms';
  import type { SuperFormData } from 'sveltekit-superforms/client';

  export let form: SuperFormData<SampleScheme>;

  const proxyWithFormatIso = dateProxy(form, 'dateProxy.format.iso', { format: 'iso' });
  const proxyWithFormatDate = dateProxy(form, 'dateProxy.format.date', { format: 'date' });
  const proxyWithFormatDatetime = dateProxy(form, 'dateProxy.format.datetime', { format: 'datetime' });
  const proxyWithFormatTime = dateProxy(form, 'dateProxy.format.time', { format: 'time' });
  const proxyWithFormatDateUtc = dateProxy(form, 'dateProxy.format.dateUtc', { format: 'date-utc' });
  const proxyWithFormatDatetimeUtc = dateProxy(form, 'dateProxy.format.datetimeUtc', { format: 'datetime-utc' });
  const proxyWithFormatTimeUtc = dateProxy(form, 'dateProxy.format.timeUtc', { format: 'time-utc' });
  const proxyWithFormatDateLocal = dateProxy(form, 'dateProxy.format.dateLocal', { format: 'date-local' });
  const proxyWithFormatDatetimeLocal = dateProxy(form, 'dateProxy.format.datetimeLocal', { format: 'datetime-local' });
  const proxyWithFormatTimeLocal = dateProxy(form, 'dateProxy.format.timeLocal', { format: 'time-local' });
  const proxyWithEmptyNull = dateProxy(form, 'dateProxy.empty.null', { empty: 'null' });
  const proxyWithEmptyUndefined = dateProxy(form, 'dateProxy.empty.undefined', { empty: 'undefined' });
  const proxyWithEmptyDefault = dateProxy(form, 'dateProxy.empty.default', { empty: undefined });
</script>

<h2>dateProxy</h2>
<p>option, $proxy, $form の順に表示しています。</p>
<h3>format オプション</h3>
<p class="describe">日付のフォーマットを指定します。</p>
<div class="content">
  <label for="format-iso"> iso </label>
  <input id="format-iso" type="text" name="format-iso" bind:value={$proxyWithFormatIso} />
  <p class="$form">{$form.dateProxy.format.iso}</p>

  <label for="format-date"> date </label>
  <input id="format-date" type="text" name="format-date" bind:value={$proxyWithFormatDate} />
  <p class="$form">{$form.dateProxy.format.date}</p>

  <label for="format-datetime"> datetime </label>
  <input id="format-datetime" type="text" name="format-datetime" bind:value={$proxyWithFormatDatetime} />
  <p class="$form">{$form.dateProxy.format.datetime}</p>

  <label for="format-time"> time </label>
  <input id="format-time" type="text" name="format-time" bind:value={$proxyWithFormatTime} />
  <p class="$form">{$form.dateProxy.format.time}</p>

  <label for="format-date-utc"> date-utc </label>
  <input id="format-date-utc" type="text" name="format-date-utc" bind:value={$proxyWithFormatDateUtc} />
  <p class="$form">{$form.dateProxy.format.dateUtc}</p>

  <label for="format-datetime-utc"> datetime-utc </label>
  <input id="format-datetime-utc" type="text" name="format-datetime-utc" bind:value={$proxyWithFormatDatetimeUtc} />
  <p class="$form">{$form.dateProxy.format.datetimeUtc}</p>

  <label for="format-time-utc"> time-utc </label>
  <input id="format-time-utc" type="text" name="format-time-utc" bind:value={$proxyWithFormatTimeUtc} />
  <p class="$form">{$form.dateProxy.format.timeUtc}</p>

  <label for="format-date-local"> date-local </label>
  <input id="format-date-local" type="text" name="format-date-local" bind:value={$proxyWithFormatDateLocal} />
  <p class="$form">{$form.dateProxy.format.dateLocal}</p>

  <label for="format-datetime-local"> datetime-local </label>
  <input
    id="format-datetime-local"
    type="text"
    name="format-datetime-local"
    bind:value={$proxyWithFormatDatetimeLocal}
  />
  <p class="$form">{$form.dateProxy.format.datetimeLocal}</p>

  <label for="format-time-local"> time-local </label>
  <input id="format-time-local" type="text" name="format-time-local" bind:value={$proxyWithFormatTimeLocal} />
  <p class="$form">{$form.dateProxy.format.timeLocal}</p>
</div>

<h3>empty オプション</h3>
<div class="content">
  <label for="empty-default"> default </label>
  <input id="empty-default" type="text" name="empty-default" bind:value={$proxyWithEmptyDefault} />
  <p class="$form">{$form.dateProxy.empty.default}</p>

  <label for="empty-null"> null </label>
  <input id="empty-null" type="text" name="empty-null" bind:value={$proxyWithEmptyNull} />
  <p class="$form">{$form.dateProxy.empty.null}</p>

  <label for="empty-undefined"> undefined </label>
  <input id="empty-undefined" type="text" name="empty-undefined" bind:value={$proxyWithEmptyUndefined} />
  <p class="$form">{$form.dateProxy.empty.undefined}</p>
</div>

<style>
  .content {
    display: grid;
    gap: 8px;
    grid-template-columns: 160px 1fr 1fr;
    align-items: center;
  }

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

  .\$form {
    margin: 0;
  }
</style>
