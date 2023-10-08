console.log('Vue.js is currently working');

const vuePage = Vue.createApp({
    // Adding template
    template: '<h2>I am the template</h2>'

    // here can be data()

    // here can be methods

    data(){
        return{
            showInfo: true,
            x:0, 
            y:0,
        }
    }
[]
methods: {
    toggleShowInfo() {
        this.showInfo = !this.showInfo
    },
    handleEvent() {
        console.log('The handle event function is working')
        console.log(e, data)
        // What showing the event does is brovide properties with information. This comes with x and y coordinates (offset) for the cursor over the post. Using this information we can manipulate it.
        console.log(e, e.type)
        if (data) {
            console.log(data)
        }
    },
    handleMousemove(e) {
        this.x = e.offsetX
        this.y = e.offsetY

        const anchor = document.getElementById('anchor')
        const rekt = anchor.getBoundingClientRect();
        const anchorX = rekt.left + rekt.width / 2;
        const anchorY = rekt.top + rekt.height / 2;

        // rekt represents the frame of post 
        // in combination of having rekt and coordinates this acts as a graph 


    }
}

computed: {}
    filteredInfo() {
        return this.info.filter((info) => info.isFav)
    }
});


vuePage.mount('#vue')

// might want to consider the double handlebar implementation. adds on click event: video 2 16:07
// Also if statement in HTML 23:00

// Use this video to instll Vue : https://www.youtube.com/watch?v=tsDGFUiNZog&ab_channel=Devtamin

// make sure to credit : https://www.youtube.com/watch?v=CYPZBK8zUik&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=3&ab_channel=NetNinja

/*
<button v-on:click="dissapear" id="bluebaloon" :style="{ 'background-color': dissapearColor }">

...
data: {
  return {
    dissapearColor: 'blue'
  }
}
...
methods:{
  dissapear () {
    this.dissapearColor = "red";
  }
}

*/

// This is a huge step in the write diretion for knowing hwo to make a cursor effect. Credit to : https://www.youtube.com/watch?v=TGe3pS5LqEw&ab_channel=BeyondFireship
