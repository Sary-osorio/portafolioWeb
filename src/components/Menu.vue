<template>

    <ul class="menu-desktop">
      <li
      v-for="(item, index) in menuItems"
      :key="index"
      :class="['nav-item', { active: activeIndex === index }]"
      @click="setActive(index)"
      >

      <a :href="item.href">
        <span :class="item.icon"></span>
      </a>

      <span class="nav-item-title">{{ item.title }}</span>

    </li>
      <!-- <li class="nav-item active">
        <a href="#sectionPresentation"><span class="mdi mdi-home"></span></a>
      </li>
      <li class="nav-item">
        <a href="#sectionAboutMe"><span class="mdi mdi-account"></span> </a
        ><span class="nav-item-title">Acerca de mí</span>
      </li>
      <li class="nav-item">
        <a href="#sectionProjects"><span class="mdi mdi-briefcase"></span></a>
        <span class="nav-item-title">Mis proyectos</span>
      </li>
      <li class="nav-item">
        <a href="#sectionContact"
          ><span class="mdi mdi-message-reply-text"></span></a
        ><span class="nav-item-title">Contacto</span>
      </li> -->
    </ul>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const menuItems = ref([
  { title: 'Home', href: '#sectionPresentation', icon: 'mdi mdi-home' },
  { title: 'Acerca de mí', href: '#sectionAboutMe', icon: 'mdi mdi-account' },
  { title: 'Mis proyectos', href: '#sectionProjects', icon: 'mdi mdi-briefcase' },
  { title: 'Cursos', href: '#sectionContact', icon: 'mdi mdi-message-reply-text' }
]);

const activeIndex = ref(0);

const setActive = (index: number) => {
  activeIndex.value = index;
  const element = document.querySelector(menuItems.value[index].href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    history.pushState(null, '', menuItems.value[index].href);
  }
};

    onMounted(()=>{
      setActive(0);
    })



</script>

<style>
.ct-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* .ct-menu */
.menu-desktop {
  position: fixed;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  display: block;
  overflow: auto;
}

.nav-item {
  display: flex;
  align-items: center;
  justify-content: right;
  flex-direction: row-reverse;
  min-width: max-content;
  margin: 10px 0px;
  position: relative;
}

.nav-item a {
  background-color: #263647;
  border-radius: 50px;
  width: 35px;
  height: 35px;
  padding: 0px;
  /* margin-left: 10px; */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.active a{
  background-color: #986b19;
}

.nav-item a span  {
  color: #ffffff;
  opacity: 0.7;
  font-size: 20px;
}

.nav-item-title {
  font-size: 18px;

  visibility: hidden;
    background-color: #8b5f0e;
    margin-right: -12px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    opacity: 0;
    transform: translateX(10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    padding: 2px 15px;

}

.nav-item:hover .nav-item-title {
  visibility: visible;
  opacity: 1;
  transform: translateX(0);
}

/* .nav-item:hover {
  background-color: #8b5f0e;
  border-radius: 50px;

  transition: opacity 0.3s ease, transform 0.3s ease;
} */
.nav-item:hover a {
  background-color: #986b19;
}




</style>
