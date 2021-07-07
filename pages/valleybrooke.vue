<template>
  <div>
    <HomeDesigns :currentCommunity="currentCommunity"/>
  </div>
</template>

<script>

import HomeDesigns from '@/components/HomeDesigns';

export default {
  data() {
    return {
        currentCommunity: "valleybrooke"
    }
  },
  components: {
    HomeDesigns
  }
}
</script>
