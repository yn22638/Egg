<template>
  <div class="Messageboard">
    <Homeheader></Homeheader>
    <HomeNav></HomeNav>
  </div>
</template>
<script>
import Homeheader from "@/components/Homeheader";
import HomeNav from "@/components/HomeNav";
export default {
  data() {
    return {};
  },
  components: { Homeheader , HomeNav}
};
</script>

<style>
*{
    padding: 0;
    margin: 0;
}
.Messageboard{
    float: left;
    width: 100%;
    height: 115%;
    position: absolute;
}
</style>


