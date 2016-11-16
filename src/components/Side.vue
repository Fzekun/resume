<template>
    <header id="side">
        <div class="inner">
          <img src="../assets/img/1.jpg" alt="">
        </div>
        <div class="menu">
            <ul>
                <li>
                  <router-link to="/about">关于我</router-link>
                </li>
                <li>
                  <router-link to="/skill">技能</router-link>
                </li>
                <li>
                  <router-link to="project">项目经验</router-link>
                </li>
                <li>
                  <router-link to="contactme">联系我</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>
<script>
  export default{
    data(){
      return{

      };
    },
    components : {  },
    methods : {

    }
  }
</script>
<style>
    @import "../assets/css/common.css";
    #side{
        width:30%;
        position: absolute;
        left:0;
        top:0;
        height:100%;
        background:url("../assets/img/overlay.png"),url("../assets/img/side_bj.jpg");
        background-position: top left,top left;
        background-size : auto, auto 100%;
        text-align: center;
        display: -webkit-box;
        display: -moz-box;
        display: -webkit-flex;
        display: flex;
        flex-direction : column;
        align-items : center;

    }
    .inner{
        margin:4rem 0 0 0;
    }
    .inner img{

        width:100px;
        border-radius: 50%;
        -webkit-transition: -webkit-transform .8s;
        transition: transform .8s;
    }
    .inner img:hover{

      transform: rotate(-360deg);
    }
    .menu{
        margin: 2rem 0 0 0;
    }
    .menu li{
        font-size : 1rem;
        line-height:2rem;

    }
    .menu li a{
      color : rgba(255, 255, 255, 0.5);
      transition: all .5s;
      display: block;
      cursor : pointer;
    }
    .menu a:hover{
      transform: scale(1.35);
      color:rgba(255,255,255,1);
    }
    .router-link-active{
      color : #fff !important;
      text-decoration: underline;
    }
</style>
