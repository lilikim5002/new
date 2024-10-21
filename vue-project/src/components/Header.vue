<template>
  <div class="head">
    <header>
      <img src="\logo.png" alt="" />

      <ul>
        <li><a href="">Каталог</a></li>
        <li><a href="">О нас</a></li>
        <li><router-link to="/Registration">Регистрация</router-link> ></li>
        <router-link to="/Login">Войти</router-link>
      </ul>
    </header>
  </div>
</template>

<style>
header {
  display: flex;
  justify-content: space-between;
  padding-left: 8px;
}

header img {
  height: 100px;
  width: 100px;
}

header ul {
  display: flex;
  align-items: center;
  gap: 20px;
}

header li {
  gap: 3px;
  margin-right: 50px;
  color: aliceblue;
  font-style: bold;
}

header li:hover {
  color: rgb(255, 242, 128);
}
</style>
