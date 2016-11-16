<template>
  <transition
    name="custom-classes-transition" mode="out-in"
    enter-active-class="animated bounceInDown"
    leave-active-class="animated fadeOutUpBig"
  >
    <div style="display: block; background: #ccc; position: absolute; left:0; top:0; height:100%; width:100%;">
      技能<br />
      技能<br />
      技能<br />
      技能<br />
      技能<br />
      技能<br />
      技能<br />
      技能<br />
    </div>
  </transition>
</template>
<style>
  @import "../assets/css/animate.css";
</style>
