<template>
<article :class="$style.root">
    <slot></slot>
</article>
</template>

<script>
export default { name: 'u-article' };
</script>

<style module>
.root {}

.root > h1 {
    font-size: var(--article-h1-font-size);
    line-height: 30px;
    margin-bottom: 60px;
}

.root > h2 {
    font-size: var(--article-h2-font-size);
    margin: 40px 0 20px;
    line-height: 40px;
    color: var(--article-h2-color);
    border-bottom: 2px solid var(--article-h2-border-color);
}

.root > h2 + h3 {
    margin-top: 20px;
}

.root > h3 {
    font-size: var(--article-h3-font-size);
    margin: 40px 0 20px;
    padding-left: 0;
}

.root > h4 {
    font-size: var(--article-h4-font-size);
    margin: 25px 0 10px;
}

.root > h4::after {
    content: '';
    float: left;
    margin: 10px 0;
    margin-left: -14px;
    top: 50%;
    display: block;
    height: 6px;
    width: 6px;
    background: var(--brand-primary);
    border-radius: 100%;
}

.root > h5 {
    font-size: var(--article-h5-font-size);
    margin: 0.3em 0;
}

.root > h6 {
    font-size: var(--article-h6-font-size);
}

.root > h1 > :global(.heading-anchor),
.root > h2 > :global(.heading-anchor),
.root > h3 > :global(.heading-anchor),
.root > h4 > :global(.heading-anchor),
.root > h5 > :global(.heading-anchor),
.root > h6 > :global(.heading-anchor) {
    display: none;
    float: left;
    margin-left: -1.4em;
    width: 1.4em;
    bottom: 0;
    text-align: center;
}

.root > h1:hover > :global(.heading-anchor),
.root > h2:hover > :global(.heading-anchor),
.root > h3:hover > :global(.heading-anchor),
.root > h4:hover > :global(.heading-anchor),
.root > h5:hover > :global(.heading-anchor),
.root > h6:hover > :global(.heading-anchor) {
    display: block;
}

.root > h4:hover::after {
    display: none;
}

.root > h1:target::before,
.root > h2:target::before,
.root > h3:target::before,
.root > h4:target::before,
.root > h5:target::before,
.root > h6:target::before {
    content: '';
    display: block;
    margin-top: calc(-1 * var(--navbar-height) - 30px);
    height: calc(var(--navbar-height) + 30px);
    visibility: hidden;
}

.root img {
    max-width: 100%;
}

.root > table {
    margin: 0 auto;
    width: 100%;
}

.root > table:hover {
    box-shadow: 0 2px 10px rgba(90, 95, 100, 0.12);
}

.root > table th {
    text-align: left;
    color: #a7afbb;
}

.root > table th, .root > table td {
    padding: 4px 8px;
    font-size: var(--article-table-font-size);
    border: 1px solid var(--border-color-base);
}

.root > table img {
    max-width: none;
}

.root > [class^="u-toc"] {
    position: fixed;
    top: 120px;
    right: 40px;
}

.root > [class^="u-toc"] > [class^="u-toc_body"] {
    overflow: auto;
    max-height: calc(100vh - 120px - 40px - 10px);
}
</style>
