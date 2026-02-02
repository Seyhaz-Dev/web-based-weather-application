    <script setup>
            defineProps({
            title: String,
            age: Number,
            })
            </script>

            <template>
            <h1>{{ title }}</h1>
            <p>Age: {{ age }}</p>
    </template>
