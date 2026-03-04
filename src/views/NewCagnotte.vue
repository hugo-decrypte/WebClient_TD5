<!-- Formulaire de création d'une nouvelle cagnotte -->
<template>
  <div class="cagnotte">
    <h1>Créer une nouvelle cagnotte</h1>
    <form>
      <div class="field">
        <label for="name">Nom de la cagnotte</label>
        <input type="text" id="name" name="name" required />
      </div>

      <div class="field">
        <label for="description">Description</label>
        <textarea id="description" name="description" required></textarea>
      </div>

      <div class="field">
        <label for="datefin">Date de fin</label>
        <input type="date" id="datefin" name="datefin" />
      </div>

      <div class="field">
        <label for="amount">Montant cible</label>
        <input type="number" id="amount" name="amount" required />
      </div>

      <button type="submit">Créer</button>
    </form>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.cagnotte {
  max-width: 520px;
  margin: 60px auto;
  padding: 40px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  font-family: sans-serif;
}

h1 {
  margin-bottom: 28px;
  font-size: 1.5rem;
  color: #1a1a2e;
}

.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  margin-bottom: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #444;
}

input,
textarea {
  padding: 10px 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s;
  outline: none;
}

input:focus,
textarea:focus {
  border-color: #6c63ff;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

button {
  width: 100%;
  padding: 12px;
  margin-top: 8px;
  background: #6c63ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover {
  background: #574fd6;
}
</style>
