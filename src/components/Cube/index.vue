<template>
  <div class="cube colored-corners">
    <div class="cube__side top">{{ index }}</div>
    <div class="cube__side front"></div>
    <div class="cube__side right"></div>
    <div class="cube__side left"></div>
    <div class="cube__side bottom"></div>
    <div class="cube__side back"></div>
  </div>
</template>

<script>
export default {
  name: 'Cube',
  props: {
    index: Number | undefined
  }
}
</script>

<style scoped lang="scss">
.cube {
  position: absolute;

  width: var(--cube-side-length);
  height: var(--cube-side-length);

  transition-duration: var(--cube-transition-duration);
  transform: translate3d(0, 0, calc(.5 * var(--cube-side-length)));

  transform-style: preserve-3d;

  &__side {
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;

    width: var(--cube-side-length);
    height: var(--cube-side-length);

    border: 2px solid #151515;
    background-color: #151515;

    font-size: 56px;
    font-weight: bolder;

    transform-style: preserve-3d;

    &.top {
      //
      color: white;
    }
    &.front {
      transform: rotateX(-90deg) translateY(var(--cube-side-length));
      transform-origin: bottom;
    }
    &.right {
      transform: rotateX(-90deg) rotateY(90deg) translateX(100px) translateY(100px);
      transform-origin: right bottom;
    }
    &.left {
      transform: rotateY(-90deg) rotateZ(90deg) translateX(calc((-1) * var(--cube-side-length)))
      translateY(var(--cube-side-length));
      transform-origin: left bottom;
    }
    &.bottom {
      transform: translateZ(calc((-1) * var(--cube-side-length))) rotateZ(180deg) rotateY(180deg);
    }
    &.back {
      transform: rotateX(-90deg) rotateY(-180deg);
      transform-origin: top;
    }
  }

  &:not(.colored-corners) &__side {
    color: #dbc9b2;
    border: 2px solid #dbc9b2;

    &.top {
      background-image: radial-gradient(circle at 50% 50%, #dbc9b2 10px, transparent 10px);
    }
    &.front {
      background-image: radial-gradient(circle at 32% 32%, #dbc9b2 8px, transparent 8px),
      radial-gradient(circle at 68% 68%, #dbc9b2 8px, transparent 8px);
    }
    &.right {
      background-image: radial-gradient(circle at 24% 24%, #dbc9b2 8px, transparent 8px),
      radial-gradient(circle at 50% 50%, #dbc9b2 8px, transparent 8px),
      radial-gradient(circle at 76% 76%, #dbc9b2 8px, transparent 8px);
    }
    &.left {
      background-image: radial-gradient(circle at 32% 32%, #dbc9b2 8px, transparent 8px),
      radial-gradient(circle at 32% 68%, #dbc9b2 8px, transparent 8px),
      radial-gradient(circle at 68% 32%, #dbc9b2 8px, transparent 8px),
      radial-gradient(circle at 68% 68%, #dbc9b2 8px, transparent 8px);
    }
    &.bottom {
      background-image: radial-gradient(circle at 24% 24%, #dbc9b2 8px, transparent 8px),
      radial-gradient(circle at 24% 76%, #dbc9b2 8px, transparent 8px),
      radial-gradient(circle at 50% 50%, #dbc9b2 8px, transparent 8px),
      radial-gradient(circle at 76% 24%, #dbc9b2 8px, transparent 8px),
      radial-gradient(circle at 76% 76%, #dbc9b2 8px, transparent 8px);
    }
    &.back {
      background-image: radial-gradient(circle at 24% 32%, #dbc9b2 8px, transparent 8px),
      radial-gradient(circle at 50% 32%, #dbc9b2 8px, transparent 8px),
      radial-gradient(circle at 76% 32%, #dbc9b2 8px, transparent 8px),
      radial-gradient(circle at 24% 68%, #dbc9b2 8px, transparent 8px),
      radial-gradient(circle at 50% 68%, #dbc9b2 8px, transparent 8px),
      radial-gradient(circle at 76% 68%, #dbc9b2 8px, transparent 8px);
    }
  }

  &.colored-corners &__side {
    --corner1-color: rgb(255, 0, 0);
    --corner2-color: fuchsia;
    --corner3-color: greenyellow;
    --corner4-color: aqua;
    --corner5-color: orange;
    --corner6-color: rgb(255, 255, 0);
    --corner7-color: rgb(30, 255, 0);
    --corner8-color: rgb(187, 0, 255);
    --corner-radius: 25%;

    &.top {
      background-image: radial-gradient(
      at 0 0,
      var(--corner1-color) var(--corner-radius),
      transparent var(--corner-radius)
      ),
      radial-gradient(at 100% 0, var(--corner2-color) var(--corner-radius), transparent var(--corner-radius)),
      radial-gradient(at 0 100%, var(--corner3-color) var(--corner-radius), transparent var(--corner-radius)),
      radial-gradient(at 100% 100%, var(--corner4-color) var(--corner-radius), transparent var(--corner-radius));
    }
    &.front {
      background-image: radial-gradient(
      at 0 0,
      var(--corner3-color) var(--corner-radius),
      transparent var(--corner-radius)
      ),
      radial-gradient(at 100% 0, var(--corner4-color) var(--corner-radius), transparent var(--corner-radius)),
      radial-gradient(at 0 100%, var(--corner5-color) var(--corner-radius), transparent var(--corner-radius)),
      radial-gradient(at 100% 100%, var(--corner6-color) var(--corner-radius), transparent var(--corner-radius));
    }
    &.right {
      background-image: radial-gradient(
      at 0 0,
      var(--corner4-color) var(--corner-radius),
      transparent var(--corner-radius)
      ),
      radial-gradient(at 100% 0, var(--corner2-color) var(--corner-radius), transparent var(--corner-radius)),
      radial-gradient(at 0 100%, var(--corner6-color) var(--corner-radius), transparent var(--corner-radius)),
      radial-gradient(at 100% 100%, var(--corner7-color) var(--corner-radius), transparent var(--corner-radius));
    }
    &.left {
      background-image: radial-gradient(
      at 0 0,
      var(--corner1-color) var(--corner-radius),
      transparent var(--corner-radius)
      ),
      radial-gradient(at 100% 0, var(--corner3-color) var(--corner-radius), transparent var(--corner-radius)),
      radial-gradient(at 0 100%, var(--corner8-color) var(--corner-radius), transparent var(--corner-radius)),
      radial-gradient(at 100% 100%, var(--corner5-color) var(--corner-radius), transparent var(--corner-radius));
    }
    &.bottom {
      background-image: radial-gradient(
      at 0 0,
      var(--corner5-color) var(--corner-radius),
      transparent var(--corner-radius)
      ),
      radial-gradient(at 100% 0, var(--corner6-color) var(--corner-radius), transparent var(--corner-radius)),
      radial-gradient(at 0 100%, var(--corner8-color) var(--corner-radius), transparent var(--corner-radius)),
      radial-gradient(at 100% 100%, var(--corner7-color) var(--corner-radius), transparent var(--corner-radius));
    }
    &.back {
      background-image: radial-gradient(
      at 0 0,
      var(--corner2-color) var(--corner-radius),
      transparent var(--corner-radius)
      ),
      radial-gradient(at 100% 0, var(--corner1-color) var(--corner-radius), transparent var(--corner-radius)),
      radial-gradient(at 0 100%, var(--corner7-color) var(--corner-radius), transparent var(--corner-radius)),
      radial-gradient(at 100% 100%, var(--corner8-color) var(--corner-radius), transparent var(--corner-radius));
    }
  }
}

</style>
