<template>
  <transition name="toast-pop">
    <div class="toast-wrap"  v-show="visible">
      <div class="toast">
        <span class="toast-text">{{ message }}</span>
      </div>
    </div>
  </transition>
</template>
<style>
    .toast-pop-enter-active, .toast-pop-leave-active {
      transition: opacity .5s
    }
    .toast-pop-enter,.toast-pop-leave-active {
      opacity: 0;
    }

    .toast-wrap{
        width : 100%;
        height:100%;
        top : 0;
        left : 0;
        position: fixed;
        background: rgba(0,0,0,.5);
        z-index: 9000;
    }
    .toast{
        position: absolute;
        bottom : 50px;
        left : 50%;
        transform: translateX(-50%);
        transition: opacity .3s linear;
        text-align: center;
        background: rgba(0,0,0,1);
        padding : 10px;
        border-radius: 5px;
        color:#fff;
        font-size: 14px;
    }

</style>
<script type="text/babel">
    export default{
        props : {
            message : 'hello world'
        },
        data(){
            return{
              visible: false
            };
        },
        computed: {
//          customClass() {
//            var classes = [];
//            switch (this.position) {
//              case 'top':
//                classes.push('is-placetop');
//                break;
//              case 'bottom':
//                classes.push('is-placebottom');
//                break;
//              default:
//                classes.push('is-placemiddle');
//            }
//            classes.push(this.className);
//            return classes.join(' ');
//          }
        }
    }
</script>
