<template >
  
    <div class="notFound"> 
    <h1><b>Error, this page COULDN'T BE FOUNDED</b></h1>
    </div>

    <div class="rtLink"> 
    <router-link @click="show" :to="{name:'Jobs'}">Врати се на основната страница </router-link>
  </div>

</template>

<script>
export default {
methods:{
  show(){
    this.$emit('brisi',true);
  }
},
mounted(){
  this.$emit('brisi',false)
}

}
</script>

<style>

.notFound{
  position:absolute;
  top:30%;
  left:50%;
  transform:translate(-50%,-50%);
  color:red;
  background-color:darkslateblue;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
.rtLink{
  position:absolute;
  top:40%;
  left:50%;
  transform:translate(-50%,-50%);
  }
</style>