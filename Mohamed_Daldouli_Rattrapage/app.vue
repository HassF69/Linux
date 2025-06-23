<template>
  <div id="app">
    <main class="main-content">
      <NuxtPage />
    </main>
  </div>
</template>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  line-height: 1.6;
  color: #2c3e50;
  background-color: #f8f9fa;
}

body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  min-height: calc(100vh - 200px); }

a
{

  text-decoration: none;
}

button {
  font-family: inherit;
  cursor: pointer;
}
input, select, textarea {
  font-family: inherit;
}



.fade-in {
  animation: fadeIn 0.5s ease-out;
}






.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}


</style>
