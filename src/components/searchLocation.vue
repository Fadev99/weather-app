<template>
    <div>
        <a-row>
            <a-input-search
                v-model:value="value"
                placeholder="Please input here ..."
                enter-button
                @search="searchLocation"
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
            this.handle(this.value);
        },
        ...mapActions(['handle']),
    },
};
</script>

<style lang="css" scoped></style>
