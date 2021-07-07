<template>
    <div>
        <HomeDesignModal :currentSelectedModel="currentSelectedModel" />
        <b-container class="mt-5">
            <b-row>
                <b-col 
                md="4"
                v-for="model in models" 
                :key="model.id"
                @click="checkCurrentModelClicked(model)">
                    <div 
                    v-b-modal.homedesign-modal 
                    class="modelContainer">
                        <b-img 
                            :src="model.thumbnail"
                            class="img-fluid"
                        />
                        <div class="model-info">
                            <h4>
                                {{ model.modelName }}
                            </h4>
                            <h6>
                                <span>{{ model.elevA }}</span>
                                <span> / {{ model.elevB }}</span>
                                <span v-if="model.elevC"> / {{ model.elevC }}</span>
                                <span v-if="model.elevD"> / {{ model.elevD }}</span>
                                <span> SQ. FT</span>
                            </h6>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import modelsData from '@/json/models.json';
import HomeDesignModal from '@/components/HomeDesignModal';

export default {
    props: ["currentCommunity"],
    data() {
        return {
            models: [],
            currentSelectedModel: null
        }
    },
    components: {
        HomeDesignModal
    },
    mounted() {
        this.models = modelsData;
        this.checkCurrentCommunity();
    },
    methods: {
        checkCurrentCommunity() {
            if (modelsData) {
                for(let i = 0; i < modelsData.length; i++) {
                    if (modelsData[i].community == this.currentCommunity) {
                        this.models = modelsData[i].models;
                    }
                }
            }
        },
        checkCurrentModelClicked(currentModel) {
            this.currentSelectedModel = currentModel;
        }
    }
}
</script>

<style scoped lang="scss">
.modelContainer {
    text-align: center;

    .model-info {
        background-color: #a9a9a9;
        padding: 0.5rem;
    }
}
</style>
