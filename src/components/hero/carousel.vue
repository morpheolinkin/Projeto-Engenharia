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
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="http://www.supermercadopoupar.com.br/images/principal.jpg"
      />

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/200/?image=54">
        <h1>Hello world!</h1>
        <h2>ZAP_COMPRAS</h2>
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
b-carousel{
  height: 5% !important;
  width: 100%;
}
</style>
