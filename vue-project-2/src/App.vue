
<template>
  <p>New text</p>
</template>

<script>
 export default {
  data() {
        return {
            showInfo: true,
            x: 0,
            y: 0,
        }
    }
 }

     // Methods holds all of the functions that will used later in tags
methods: {
    // Test for showing info
    toggleShowInfo() {
        this.showInfo = !this.showInfo
    }
    // For if the mouse enters a container
    handleEvent() {
        console.log('The handle event function is working')
        // What showing the event does is brovide properties with information. This comes with x and y coordinates (offset) for the cursor over the post. Using this information we can manipulate it.
        console.log(e, e.type)
        if (data) {
            console.log('Here is data: '+ data)
        }
    }
    handleMousemove(e) {

        getElementById(post).mousemove(function(e) {
            postWidth = $(post).width();
            postHeight = $(post).height();
            
            mouseXpercentage = Math.round(e.pageX / postWidth * 100);
            mouseYpercentage = Math.round(e.pageY / postHeight * 100);
            
            getElementById('#radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #3498db, #9b59b6)');
            // This needs to be converted back to vinilla javascript
          });

        this.x = e.offsetX
        this.y = e.offsetY


    }
}

computed: {}
    filteredInfo() {
    return this.info.filter((info) => info.isFav)
}


vuePage.mount('#vue')
</script>

<!-- 

Back to 1:25 video for vue serve

console.log('Vue.js is currently working');

const vuePage = Vue.createApp({
    // Adding template
    template: '<h2>I am the template</h2>'


// data actas as the source of values

data() {
        return {
            showInfo: true,
            x: 0,
            y: 0,
        }
    }

    // Methods holds all of the functions that will used later in tags
methods: {
    // Test for showing info
    toggleShowInfo() {
        this.showInfo = !this.showInfo
    },
    // For if the mouse enters a container
    handleEvent() {
        console.log('The handle event function is working')
        // What showing the event does is brovide properties with information. This comes with x and y coordinates (offset) for the cursor over the post. Using this information we can manipulate it.
        console.log(e, e.type)
        if (data) {
            console.log('Here is data: '+ data)
        }
    },
    handleMousemove(e) {

        getElementById(post).mousemove(function(e) {
            postWidth = $(post).width();
            postHeight = $(post).height();
            
            mouseXpercentage = Math.round(e.pageX / postWidth * 100);
            mouseYpercentage = Math.round(e.pageY / postHeight * 100);
            
            getElementById('#radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #3498db, #9b59b6)');
            // This needs to be converted back to vinilla javascript
          });

        this.x = e.offsetX
        this.y = e.offsetY


    }
}

computed: {}
    filteredInfo() {
    return this.info.filter((info) => info.isFav)
}
});


vuePage.mount('#vue')

// password: 2Qu@5#3R$$

-----------------------------------------
<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
