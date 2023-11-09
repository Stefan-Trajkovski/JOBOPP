<template>
    <h1>Jobs</h1>

    <div v-for="job in jobs" :key="job.id" class="job">
        <router-link :to="{ name: 'JobDetails', params: { /*id: job.id,*/ title: job.title } }">
            <h2>{{ job.title }}</h2>
        </router-link>
    </div>
</template>

<script>
import router from '@/router'
export default {
    data() {
        return {
            jobs: [
                { title: 'UX designer', id: 1, details: 'lorem' },
                { title: 'WEB Developer', id: 2, details: 'lorem' },
                { title: 'Vue Developer', id: 3, details: 'lorem' }
            ]
        }
    },
    methods: {

    }

}
</script>

<style>
.job h2 {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
}

.job h2:hover {
    background: #ddd;
}

.job a {
    text-decoration: none;
}</style>