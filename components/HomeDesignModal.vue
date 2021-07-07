<template>
  <div>
    <b-modal
        id="homedesign-modal"
        ref="homedesign-modal"
        centered
        hide-footer
        hide-header
        size="xl"
        @shown="getData()"
    >
        <b-container fluid>
            <b-row>
                <b-col md="12">
                    <h1>{{ currentModelName }} - {{ currentModelSQFT }} SQ. FT</h1>
                </b-col>
                <b-col 
                md="12"
                class="mb-4">
                    <img :src="currentSelectedImg" alt="" class="img-fluid w-100">
                </b-col>

                <b-col 
                v-for="model in currentModelDetails" 
                :key="model.elev">
                    <div class="elevationLabel">{{ model.elev }}</div>
                    <img :src="model.img" 
                    alt="" 
                    class="img-fluid"
                    style="cursor: pointer"
                    @click="setCurrentImg(model.img)"
                    >
                </b-col>
            </b-row>
        </b-container>
    </b-modal>
  </div>
</template>

<script>

export default {
    props: ["currentSelectedModel"], 
    data() {
        return {
            currentModelName: '',
            currentModelSQFT: '',
            currentSelectedImg: '',
            currentModelDetails: []
        }
    },
    components: {

    },
    methods: {
        getData() {
            var currentSelectedModel = this.currentSelectedModel;
            
            if(currentSelectedModel) {
                this.currentModelDetails = {...this.currentSelectedModel};
                this.currentModelName = currentSelectedModel.modelName;
                this.currentModelSQFT = currentSelectedModel.elevA;
                this.currentModelDetails = this.currentSelectedModel.elevations;
                this.setCurrentImg('');
            }
        },
        setCurrentImg(currentImg) {
            if(currentImg == '') {
                this.currentSelectedImg = this.currentModelDetails[0].img;
            } else {
                this.currentSelectedImg = currentImg;
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .elevationLabel {
        background-color: #333;
        color: #fff;
        text-transform: uppercase;
        position: absolute;
        padding: 5px 10px;
        top: 0;
        right: 15px;
    }
</style>