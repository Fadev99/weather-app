<template>
    <div>
        <a-row>
            <a-input-search
                v-model:value="value"
                placeholder="Please input here ..."
                enter-button
                @search="searchLocation"
                class="c-search__content"
            />
        </a-row>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    name: "searchLocation",
    data() {
        return {
            value: "",
        };
    },
    methods: {
        searchLocation() {
            this.search(this.value);
        },
        ...mapActions(['search']),
    },
};
</script>

<style lang="css" scoped>
.c-search__content {
    min-height: 100vh;
    padding: 25px;

    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.25),
        rgba(0, 0, 0, 0.75)
    );
}
</style>
