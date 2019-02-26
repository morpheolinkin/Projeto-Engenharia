<template>
  <div>
    <div class="carousel">
          <b-carousel
      id="carousel1"
      style="text-shadow: 1px 1px 2px #333;"
      controls
      indicators
      background="#ababab"
      :interval="4000"
      img-width="1024"
      img-height="480"
      v-model="slide"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      
      <b-carousel-slide
        caption="Zap-Compras"
        text="Compras com facilidades e comforto na palma de sua mão."
        img-src="imgens/WhatsApp Image 2019-02-24 at 23.01.18.jpeg"
      />

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="imgens/principal.jpg">
      </b-carousel-slide>

   <b-carousel-slide img-src="imgens/WhatsApp Image 2019-02-24 at 22.53.05.jpeg">
      </b-carousel-slide>
     
     <b-carousel-slide img-src="imgens/WhatsApp Image 2019-02-24 at 22.54.26.jpeg">
       </b-carousel-slide>
     
     <b-carousel-slide img-src="imgens/WhatsApp Image 2019-02-24 at 22.57.41.jpeg">
        <h1>ZAP_COMPRAS</h1>
        
      </b-carousel-slide>
     </b-carousel>

    <p class="mt-4">
    
    </p>

    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
<style scoped>
.carousel{
 
  width: 100%;
  position: relative;
  padding: 2% 0% 0% 0%;
}
</style>