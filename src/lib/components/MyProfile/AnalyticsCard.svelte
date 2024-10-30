<script>
    export let title;
    export let value;
    export let description;
    export let icon;
</script>

<style>
    .card {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 16px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .title {
        font-size: 1.25em;
        margin-bottom: 8px;
    }
    .value {
        font-size: 2em;
        color: #0070f3;
        margin-bottom: 8px;
    }
    .description {
        font-size: 0.875em;
        color: #666;
    }
</style>

<div class="card">
    <div class="icon">{@html icon}</div>
    <div class="title">{title}</div>
    <div class="value">{value}</div>
    <div class="description">{description}</div>
</div>