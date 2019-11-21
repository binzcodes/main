<template>
  <div class="VueToBinzLogo">
    <div class="Triangle Triangle--two" />
    <div class="Triangle Triangle--two--lighten" />
    <div class="Triangle Triangle--one" />
    <div class="Triangle Triangle--one--lighten" />
    <div class="Triangle Triangle--three" />
    <div class="Triangle Triangle--three--lighten" />
    <div class="Triangle Triangle--four" />
  </div>
</template>

<style>
.VueToBinzLogo {
  display: inline-block;
  transform: rotateX(180deg);
  position: relative;
  overflow: hidden;
  height: 180px;
  width: 245px;
}

.Triangle {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}

.Triangle--one {
  animation: transitionOne 0.5s linear forwards 3.5s;
  border-left: 105px solid transparent;
  border-right: 105px solid transparent;
  border-bottom: 180px solid #41b883;
}

.Triangle--one--lighten {
  animation: transitionOneHighlight 0.5s linear forwards 3.5s;
  border-left: 105px solid transparent;
  border-bottom: 180px solid #41b883;
}

.Triangle--two {
  top: 30px;
  left: 35px;
  animation: gorightThree 0.5s linear forwards 3.5s;
  border-left: 87.5px solid transparent;
  border-right: 87.5px solid transparent;
  border-bottom: 150px solid #3b8070;
}

.Triangle--two--lighten {
  top: 30px;
  left: 35px;
  animation: gorightThreeHighlight 0.5s linear forwards 3.5s;
  border-left: 87.5px solid transparent;
  border-bottom: 150px solid #3b8070;
}

.Triangle--three {
  top: 60px;
  left: 35px;
  animation: gorightTwo 0.5s linear forwards 3.5s;
  border-left: 70px solid transparent;
  border-right: 70px solid transparent;
  border-bottom: 120px solid #35495e;
}

.Triangle--three--lighten {
  top: 60px;
  left: 35px;
  animation: gorightTwoHighlight 0.5s linear forwards 3.5s;
  border-left: 70px solid transparent;
  border-bottom: 120px solid #35495e;
}

.Triangle--four {
  top: 120px;
  left: 70px;
  animation: flicker 0.5s linear forwards 2.8s;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-bottom: 60px solid #fff;
}

@keyframes flicker {
  0%,
  19.999%,
  22%,
  62.999%,
  64%,
  64.999%,
  70%,
  100% {
    opacity: 1;
  }
  20%,
  21.999%,
  63%,
  63.999%,
  65%,
  69.999% {
    opacity: 0.4;
  }
  100% {
    opacity: 0;
  }
}

@keyframes godown {
  100% {
    /*top: 180px;*/
    /*border-bottom-width: 0px;*/
    border-bottom-color: transparent;
  }
}

@keyframes transitionOne {
  100% {
    border-bottom-color: #83e0a4;
  }
}

@keyframes transitionOneHighlight {
  100% {
    border-bottom-color: #98eab5;
  }
}

@keyframes gorightTwo {
  100% {
    left: 70px;
    border-bottom-color: #184757;
  }
}

@keyframes gorightTwoHighlight {
  100% {
    left: 70px;
    border-bottom-color: #23596b;
  }
}

@keyframes gorightThree {
  100% {
    left: 70px;
    border-bottom-color: #43a1c5;
  }
}

@keyframes gorightThreeHighlight {
  100% {
    left: 70px;
    border-bottom-color: #7dc6e1;
  }
}
</style>
