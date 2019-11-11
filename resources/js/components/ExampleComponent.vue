<template>
    <div class="container">
        <div class="card justify-content-center">
            <div class="card-body" id="app1">
                {{message}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: "test"
            };
        },
        mounted() {
            console.log('Component mounted')
        }
    }
</script>

    