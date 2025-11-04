<template>
  <div
    class="cubes-container"
    :style="{ '--cube-side-length': cubeSideLength + 'px', '--cube-transition-duration': intervalTime / 2 + 'ms' }"
  >
    <div class="cubes-container__rotate-panel">
      <label class="cubes-container__rotate-label">
        x=
        <input
          v-model="rotate.x"
          type="number"
          class="cubes-container__rotate-input"
          step="5"
          @wheel.prevent="handleInputWheel($event, 'x')"
        />
        °
      </label>
      <label class="cubes-container__rotate-label">
        y=
        <input
          v-model="rotate.y"
          type="number"
          class="cubes-container__rotate-input"
          step="5"
          @wheel.prevent="handleInputWheel($event, 'y')"
        />
        °
      </label>
      <label class="cubes-container__rotate-label">
        z=
        <input
          v-model="rotate.z"
          type="number"
          class="cubes-container__rotate-input"
          step="5"
          @wheel.prevent="handleInputWheel($event, 'z')"
        />
        °
      </label>
      <div class="cubes-container__rotate-panel-hint">*в input значение меняется на колёсико</div>
    </div>
    <div
      class="cubes-container__plane"
      :style="`transform: rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) rotateZ(${rotate.z}deg)`"
    >
      <Cube
        v-for="(currentCoordinate, index) in currentCoordinates"
        :key="index"
        :style="currentCoordinate"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CubesContainer',

  data: () => ({
    cubeSideLength: 100,

    rotate: {
      x: 55,
      y: 0,
      z: 25
    },

    coordinates: [
      [
        [-0.5, -0.5],
        [0.5, -0.5],
        [-0.5, 0.5],
        [0.5, 0.5]
      ],
      [
        [0, -0.5],
        [1, -0.5],
        [-1, 0.5],
        [0, 0.5]
      ],
      [
        [0, -0.5],
        [1, 0.5],
        [-1, -0.5],
        [0, 0.5]
      ],
      [
        [0.5, -0.5],
        [0.5, 0.5],
        [-0.5, -0.5],
        [-0.5, 0.5]
      ],
      [
        [0.5, -0.5, -0.5],
        [0.5, 0.5, 0.5],
        [-0.5, -0.5, 0.5],
        [-0.5, 0.5, -0.5]
      ],
      [
        [-0.5, -0.5, -0.5],
        [0.5, -0.5, 0.5],
        [-0.5, 0.5, 0.5],
        [0.5, 0.5, -0.5]
      ]
    ],

    styles: [],

    coordinatesIndex: 0,
    intervalTime: 1000
  }),

  mounted() {
    if (this.coordinates.length > 1) {
      this.interval = setInterval(() => {
        this.coordinatesIndex = (this.coordinatesIndex + 1) % this.coordinates.length
      }, this.intervalTime)
    }
  },

  computed: {
    currentCoordinates() {
      let styles = []
      for (const coordinate of this.coordinates[this.coordinatesIndex]) {
        styles.push(
          `transform: translate3d(
          ${!coordinate[0] ? 0 : this.cubeSideLength * coordinate[0] + 'px'},
          ${!coordinate[1] ? 0 : this.cubeSideLength * coordinate[1] + 'px'},
          ${!coordinate[2] ? 0 : this.cubeSideLength * coordinate[2] + 'px'})`
        )
      }
      return styles
    }
  },

  methods: {
    handleInputWheel(event, coordinate) {
      const step = +event.target.step || 1
      this.rotate[coordinate] = this.rotate[coordinate] + (event.deltaY < 0 ? step : -1 * step)
    }
  }
}
</script>

<style scoped lang="scss">
.cubes-container {
  overflow: hidden;

  width: 100%;
  height: 100%;

  &__rotate-panel {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 50%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    width: 320px;
    padding: 8px 16px;

    background-color: rgb(222, 222, 222);

    translate: -50%;
  }
  &__rotate-label {
    display: flex;

    font-size: 20px;

    gap: 4px;
  }
  &__rotate-input {
    width: 50px;

    font-size: 16px;
  }
  &__rotate-panel-hint {
    width: 100%;
    margin-top: 8px;
  }

  &__plane {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    transform-origin: center;

    border: 2px solid rgb(255, 0, 255);
    background: linear-gradient(
    -45deg,
    transparent calc(50% - 1px),
    rgb(255, 0, 255) calc(50% - 1px) calc(50% + 1px),
    transparent calc(50% + 1px)
    ),
    linear-gradient(
    45deg,
    transparent calc(50% - 1px),
    rgb(255, 0, 255) calc(50% - 1px) calc(50% + 1px),
    transparent calc(50% + 1px)
    ),
    linear-gradient(
    90deg,
    transparent calc(50% - 1px),
    rgb(255, 0, 255) calc(50% - 1px) calc(50% + 1px),
    transparent calc(50% + 1px)
    ),
    linear-gradient(
    180deg,
    transparent calc(50% - 1px),
    rgb(255, 0, 255) calc(50% - 1px) calc(50% + 1px),
    transparent calc(50% + 1px)
    );

    perspective: 10000px;
    transform-style: preserve-3d;
  }
}

</style>
