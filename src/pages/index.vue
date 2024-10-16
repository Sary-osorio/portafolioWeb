<template>
  <!-- <v-container> -->
  <section id="sectionPresentation">
    <v-container>
    <v-row>
      <v-col cols="12" lg="6"  class="d-flex flex-column align-start justify-center p-5">
        <v-img
          src="../assets/person.jpg"
          cover
          class="rounded-xl bg-imagen ms-10 mb-2"
          max-height="513"
          max-width="400"
        ></v-img>
        <div class="bg-secondary bg-imagen margin-image-secondary"></div>
      </v-col>
      <v-col cols="12" lg="6" class="">
        <h1>I’M LOREMIPSU MISSIM</h1>
        <p class="subtitle">TEXT OF THE PRINTING</p>
        <p class="text" style="margin: 40px 0px">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
        <!-- <v-btn class="btn-more-about d-flex justify-space-between">
            <div>Mas</div>
            <div class="btn-icon-more">
            <span class="mdi mdi-arrow-right"></span>
          </div>
          </v-btn> -->
        <v-btn variant="outlined" color="secondary" class="rounded-xl pe-2">
          <template v-slot:append>
            <span style="color: #fff !important">Más acerca de mí</span>

            <v-icon color="white" class="ms-3">
              <span class="mdi mdi-arrow-right btn-icon-more"></span>
            </v-icon>
          </template>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
  </section>
  <section id="sectionAboutMe">

    <v-container>
      <p class="text-h4 font-weight-medium mb-15 text-start text-secondary">
      ACERCA DE MÍ
    </p>
    <v-row>
      <v-col cols="12" md="5" lg="6" class="d-flex flex-column align-start">
        <div class="ct-info">
          <v-row class="d-flex flex-row flex-md-column">
            <v-col class="d-flex  flex-column ga-5">
          <p class="text-h6">Hola <span class="mdi mdi-hand-wave" style="color: var(--secondary); "></span></p>

          <p> Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem ipsum is simply dummy text of the printing and
          typesetting industry typesetting industry typesetting industry typesetting industry.Lorem ipsum is simply dummy text of the printing and typesetting
          industry</p>
          <p class="font-weight-medium text-h6">Habilidades técnicas</p>
          <hr class=""/>
          <div class="text-center">
            <v-chip
            class="ma-2"
            color="secondary2"
            label
            size="large"
          >
            <v-icon icon="mdi mdi-language-php" start></v-icon>
            PHP
          </v-chip>
            <v-chip
            class="ma-2"
            color="secondary2"
            label
            size="large"
          >
            <v-icon icon="mdi mdi-laravel" start></v-icon>
            LARAVEL
          </v-chip>
          <v-chip
            class="ma-2"
            color="secondary2"
            label
            size="large"
          >
            <v-icon icon="mdi mdi-react" start></v-icon>
            ReactJS
          </v-chip>
            <v-chip
            class="ma-2"
            color="secondary2"
            label
            size="large"
          >
            <v-icon icon="mdi mdi-vuejs" start></v-icon>
            VUEJS
          </v-chip>
            
            <v-chip
            class="ma-2"
            color="secondary2"
            label
            size="large"
          >
            <v-icon icon="mdi mdi-wordpress" start></v-icon>
            WORDPRESS
          </v-chip>
            <v-chip
            class="ma-2"
            color="secondary2"
            label
            size="large"
          >
            <v-icon icon="mdi mdi-school" start>
            </v-icon>
          MOODLE
          </v-chip>
            <v-chip
            class="ma-2"
            color="secondary2"
            label
            size="large"
          >
            <v-icon icon="mdi mdi-database-outline" start></v-icon>
            MySQL
          </v-chip>
            <v-chip
            class="ma-2"
            color="secondary2"
            label
            size="large"
          >
            <v-icon icon="mdi mdi-database-outline" start></v-icon>
            PostgreSQL
          </v-chip>
          </div>
        </v-col>
        </v-row>
        </div>
      </v-col>
      <v-col cols="12" md="7" lg="6" class="d-flex flex-column align-center">
        <div class="d-flex align-center w-100 flex-column d-border-left ms-80">
          <div class="d-flex align-center w-100 d-ms-n1">
            <div class="circle">
              <span class="mdi mdi-school"></span>
            </div>
            <h2 class="ms-4 text-secondary">EDUCACIÓN</h2>
          </div>
          <div class="w-100 px-13 py-4">
            <p class="font-weight-medium">
              INGENIERIA DE SISTEMAS INFORMÁTICOS
            </p>
            <p>Universidad de El Salvador</p>
            <p>2018-2024</p>
          </div>
        </div>
        <div class="d-flex align-center w-100 flex-column d-border-left ms-80">
          <div class="d-flex align-center w-100 d-ms-n1">
            <div class="circle">
              <span class="mdi mdi-briefcase"></span>
            </div>
            <h2 class="ms-4 text-secondary">EXPERIENCIA LABORAL</h2>
          </div>
          <div class="w-100 px-13 py-4">
            <p class="font-weight-medium">
              INGENIERIA DE SISTEMAS INFORMÁTICOS
            </p>
            <p>Universidad de El Salvador</p>
            <p>2018-2024</p>
            <br />
            <p class="font-weight-medium">
              INGENIERIA DE SISTEMAS INFORMÁTICOS
            </p>
            <p>Universidad de El Salvador</p>
            <p>2018-2024</p>
            <br />
            <p class="font-weight-medium">
              INGENIERIA DE SISTEMAS INFORMÁTICOS
            </p>
            <p>Universidad de El Salvador</p>
            <p>2018-2024</p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
  </section>
  <section id="sectionProjects">

    <v-container>
      <p class="text-h4 font-weight-medium mb-15 text-start text-secondary">
      PROYECTOS
    </p>
    <v-row
     align="center"
    >
      <v-col align-self="center">
        <v-card
            elevation="16"
            color="primary"
            class="my-2 rounded-xl p-2"
            max-width="300"
          >
                <!-- <v-avatar class="ma-3" rounded="0" size="125"> -->
                  <v-img
                  height="150px"
                  cover
                    src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                  ></v-img>
                <!-- </v-avatar> -->
                <v-card-title class="text-h5 text-secondary">
                  Unlimited music now
                </v-card-title>

                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, ratione debitis quis est labore voluptatibus!
                </v-card-text>
                <v-card-actions>
                  <div class="d-flex  w-100 flex-column">
                  <div class="d-flex ga-2 w-100 justify-center">
                    <div style="width:60px; background:#E34F28; border-radius:5px; text-align:center;">HTML</div>
                    <div style="width:60px; background:#1477B8; border-radius:5px; text-align:center;">CSS</div>
                    <div style="width:60px; background:#F7E025; border-radius:5px; text-align:center;">JS</div>
                  </div>
                  <div class="d-flex ga-2 w-100 justify-center mt-4">
                    <div>
                      <a href="javascript:void(0)">
                        <span class="mdi mdi-github" style="color:#fff; font-size:25px;"></span>
                      </a>
                    </div>
                    <div>
                      <a href="javascript:void(0)">
                        <span class="mdi mdi-link" style="color:#fff; font-size:30px;"></span>
                      </a>
                    </div>

                  </div>
                  </div>
                </v-card-actions>

          </v-card>
      </v-col>
      <v-col align-self="center">
        <v-card
            elevation="16"
            color="primary"
            class="my-2 rounded-xl p-2"
            max-width="300"
          >
                <!-- <v-avatar class="ma-3" rounded="0" size="125"> -->
                  <v-img
                  height="150px"
                  cover
                    src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                  ></v-img>
                <!-- </v-avatar> -->
                <v-card-title class="text-h5 text-secondary">
                  Unlimited music now
                </v-card-title>

                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, ratione debitis quis est labore voluptatibus!
                </v-card-text>

                <v-card-actions>
                  <div class="d-flex  w-100 flex-column">
                  <div class="d-flex ga-2 w-100 justify-center">
                    <div style="width:60px; background:#E34F28; border-radius:5px; text-align:center;">HTML</div>
                    <div style="width:60px; background:#1477B8; border-radius:5px; text-align:center;">CSS</div>
                    <div style="width:60px; background:#F7E025; border-radius:5px; text-align:center;">JS</div>
                  </div>
                  <div class="d-flex ga-2 w-100 justify-center mt-4">
                    <div>
                      <a href="javascript:void(0)">
                        <span class="mdi mdi-github" style="color:#fff; font-size:25px;"></span>
                      </a>
                    </div>
                    <div>
                      <a href="javascript:void(0)">
                        <span class="mdi mdi-link" style="color:#fff; font-size:30px;"></span>
                      </a>
                    </div>

                  </div>
                  </div>
                </v-card-actions>
          </v-card>
      </v-col>
      <v-col align-self="center">
        <v-card
            elevation="16"
            color="primary"
            class="my-2 rounded-xl p-2"
            max-width="300"
          >
                <!-- <v-avatar class="ma-3" rounded="0" size="125"> -->
                  <v-img
                  height="150px"
                  cover
                    src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                  ></v-img>
                <!-- </v-avatar> -->
                <v-card-title class="text-h5 text-secondary">
                  Unlimited music now
                </v-card-title>

                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, ratione debitis quis est labore voluptatibus!
                </v-card-text>
                <v-card-actions>
                  <div class="d-flex  w-100 flex-column">
                  <div class="d-flex ga-2 w-100 justify-center">
                    <div style="width:60px; background:#E34F28; border-radius:5px; text-align:center;">HTML</div>
                    <div style="width:60px; background:#1477B8; border-radius:5px; text-align:center;">CSS</div>
                    <div style="width:60px; background:#F7E025; border-radius:5px; text-align:center;">JS</div>
                  </div>
                  <div class="d-flex ga-2 w-100 justify-center mt-4">
                    <div>
                      <a href="javascript:void(0)">
                        <span class="mdi mdi-github" style="color:#fff; font-size:25px;"></span>
                      </a>
                    </div>
                    <div>
                      <a href="javascript:void(0)">
                        <span class="mdi mdi-link" style="color:#fff; font-size:30px;"></span>
                      </a>
                    </div>

                  </div>
                  </div>
                </v-card-actions>
          </v-card>
      </v-col>
      <v-col align-self="center">
        <v-card
            elevation="16"
            color="primary"
            class="my-2 rounded-xl p-2"
            max-width="300"
          >
                <!-- <v-avatar class="ma-3" rounded="0" size="125"> -->
                  <v-img
                  height="150px"
                    cover
                    src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                  ></v-img>
                <!-- </v-avatar> -->
                <v-card-title class="text-h5 text-secondary">
                  Unlimited music now
                </v-card-title>

                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, ratione debitis quis est labore voluptatibus!
                </v-card-text>
                <v-card-actions>
                  <div class="d-flex  w-100 flex-column">
                  <div class="d-flex ga-2 w-100 justify-center">
                    <div style="width:60px; background:#E34F28; border-radius:5px; text-align:center;">HTML</div>
                    <div style="width:60px; background:#1477B8; border-radius:5px; text-align:center;">CSS</div>
                    <div style="width:60px; background:#F7E025; border-radius:5px; text-align:center;">JS</div>
                  </div>
                  <div class="d-flex ga-2 w-100 justify-center mt-4">
                    <div>
                      <a href="javascript:void(0)">
                        <span class="mdi mdi-github" style="color:#fff; font-size:25px;"></span>
                      </a>
                    </div>
                    <div>
                      <a href="javascript:void(0)">
                        <span class="mdi mdi-link" style="color:#fff; font-size:30px;"></span>
                      </a>
                    </div>

                  </div>
                  </div>
                </v-card-actions>
          </v-card>
      </v-col>
    </v-row>
  </v-container>


    <!-- <v-row>
      <v-col cols="12" md="5" lg="6" class="d-flex flex-column align-center">
        <div class="ct-info">
          <p>Lenguajes y frameworks</p>
          <hr />
          <v-radio-group>
            <v-radio label="Radio One" value="one"></v-radio>
            <v-radio label="Radio Two" value="two"></v-radio>
            <v-radio label="Radio Three" value="three"></v-radio>
            <v-radio label="Radio One" value="one"></v-radio>
            <v-radio label="Radio Two" value="two"></v-radio>
            <v-radio label="Radio Three" value="three"></v-radio>

          </v-radio-group>
          <p class="mt-2">Bases de datos</p>
          <hr />
          <v-radio-group>
            <v-radio label="Radio One" value="one"></v-radio>
            <v-radio label="Radio Two" value="two"></v-radio>
            <v-radio label="Radio Three" value="three"></v-radio>
          </v-radio-group>
        </div>
      </v-col>
      <v-col cols="12" md="7" lg="6" class="d-flex flex-column align-center px-10 px-lg-0">
        <div class="d-flex align-center w-100 flex-column d-border-left ps-2 ps-lg-0">
          <v-card
            link
            variant="text"
            class="my-2 rounded-xl p-2"
            max-width="500"
          >
              <div class="d-flex flex-no-wrap justify-space-between flex-column flex-sm-row">
              <div>
                <v-avatar class="ma-3" rounded="0" size="125">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                  ></v-img>
                </v-avatar>
              </div>
              <div>
                <v-card-title class="text-h5 text-secondary">
                  Unlimited music now
                </v-card-title>

                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, ratione debitis quis est labore voluptatibus! Eaque
                  cupiditate minima, at placeat totam, magni doloremque veniam
                  neque porro libero rerum unde voluptatem
                </v-card-text>
              </div>
            </div>
          </v-card>
          <v-card
            link
            variant="text"
            class="my-2 rounded-xl p-2"
            max-width="530"
          >
            <div class="d-flex flex-no-wrap justify-space-between flex-column flex-sm-row">
              <div>
                <v-avatar class="ma-3" rounded="0" size="125">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                  ></v-img>
                </v-avatar>
              </div>
              <div>
                <v-card-title class="text-h5 text-secondary">
                  Unlimited music now
                </v-card-title>

                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, ratione debitis quis est labore voluptatibus! Eaque
                  cupiditate minima, at placeat totam, magni doloremque veniam
                  neque porro libero rerum unde voluptatem
                </v-card-text>
              </div>
            </div>
          </v-card>
          <v-card
            link
            variant="text"
            class="my-2 rounded-xl p-2"
            max-width="530"
          >
            <div class="d-flex flex-no-wrap justify-space-between flex-column flex-sm-row">
              <div>
                <v-avatar class="ma-3" rounded="0" size="125">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                  ></v-img>
                </v-avatar>
              </div>
              <div>
                <v-card-title class="text-h5 text-secondary">
                  Unlimited music now
                </v-card-title>

                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, ratione debitis quis est labore voluptatibus! Eaque
                  cupiditate minima, at placeat totam, magni doloremque veniam
                  neque porro libero rerum unde voluptatem
                </v-card-text>
              </div>
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row> -->
  </section>
  <section id="sectionContact">
    <v-container>
      <p class="text-h4 font-weight-medium mb-15 text-start text-secondary">
      CURSOS Y CERTIFICACIONES
    </p>
    <v-row>
      <v-col cols="12" md="4" class="d-flex align-center justify-center p-2">
        <v-img
          radius="2"

          aspect-ratio="4/3"
          cover
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          class="rounded"
        ></v-img>
      </v-col>
      <v-col cols="12" md="4" class="d-flex align-center justify-center p-2">
        <v-img
          radius="2"

          aspect-ratio="4/3"
          cover
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          class="rounded"

        ></v-img>
      </v-col>
      <v-col cols="12" md="4" class="d-flex align-center justify-center p-2">
        <v-img
          radius="2"

          aspect-ratio="4/3"

          cover
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          class="rounded"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
  </section>
  <!-- </v-container> -->
</template>

<script lang="ts" setup>
   import {computed } from 'vue'

   const iconmoodle = computed(()=>{
    return 
   })

</script>

<style>
:root {
  --secondary: #d68800;
}

section {
  color: #ffffff;
  /* background-color: #000000; */
  margin: 3rem 0px 5rem;
}

#sectionPresentation h1 {
  font-size: 50px;
  color: var(--secondary);
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
}
.subtitle {
  font-size: 40px;
  font-weight: bold;
  text-align: center;
}

.text {
  font-size: 36px;
  font-weight: normal;
}

.bg-imagen {
  width: 400px;
  min-height: 513px;
  border-radius: 24px;

}

.bg-secondary.bg-imagen.margin-image-secondary {
  /* margin-left: -50px; */
  margin-top: -30rem;
}

/* button.v-btn.v-btn--elevated.v-theme--themefirst.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.btn-more-about {
    background-color: transparent;
    border: 1px solid var(--secondary);
    min-width: 180px;
    border-radius: 50px;
    color: #fff;
} */

.btn-icon-more {
  background-color: var(--secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 9px;
}

.ct-info {
  background-color: rgb(255, 255, 255, 0.15);
  box-shadow: 4px 4px 4px 0px rgba(255, 255, 255, 0.38);
  padding: 30px;
  border-radius: 20px;
  min-height: 550px;
  max-width:440px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.d-border-left {
  border-left: 1px solid rgb(255, 255, 255, 0.15);
}
.ms-80{
  margin-left:80px;
}

.circle {
  width: 75px;
  height: 75px;
  border-radius: 50px;
  background-color: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: center;
}
.circle span {
  font-size: 30px;
}

.d-ms-n1 {
  margin-left: -80px;
}



@media (max-width: 500px) {
  .bg-imagen {
        background: green;
        max-width: 250px !important;
    }

    #sectionPresentation h1 {
        font-size: 40px;
    }

    .subtitle {
      font-size: 30px;
    }

.text {
  font-size: 26px;

}
}
@media (max-width: 960px) {
  .ct-info {
        min-width: auto;
        width: 100%;
        height: auto;
        min-height: auto;
        margin-bottom: 40px;

    }
}

@media (max-width: 1150px) {
  .ct-info {
  min-width: 300px;

}
}



</style>
