<template>
    <nav class="navbar navbar-expand-lg shadow ">
        <a class="navbar-brand" href="#">Data</a>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="nav nav-pills nav-fill fixed">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Sales</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/item" class="nav-link"
                        >Item</router-link
                    >
                </li>
                <li class="nav-item">
                    <router-link to="/customer" class="nav-link"
                        >Customer</router-link
                    >
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {};
</script>
<style scoped>
a.active {
    background: #bbb;
}
</style>