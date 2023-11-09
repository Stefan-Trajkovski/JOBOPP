<template>
  <!-- <h1>{{$route.params.id }}</h1> -->
  <div class="jobTitle">
  <h1>{{ $route.params.title }}</h1>
   </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.jobTitle h1 {
    background: #ff6600 ;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    color: #444;
    position:absolute;
    top:35%;
    left:50%;
    transform:translate(-50%,-50%);
}
</style>
