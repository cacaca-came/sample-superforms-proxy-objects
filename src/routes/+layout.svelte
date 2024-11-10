<script>
  import '../app.css';
</script>

<div class="app">
  <slot />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 40px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
