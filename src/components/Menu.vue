<template>
  
    <ul>
      <li class="nav-item">
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
      </li>
    </ul>
  
</template>

<script></script>

<style>
.ct-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* .ct-menu */
 ul {
  position: fixed;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
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
