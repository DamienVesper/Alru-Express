declare const $;

$(document).ready(() => {
    const pathname = window.location.pathname.replace(`/`, `-`);
    $(`#nav${pathname}`).addClass(`nav-item active`);
    $(`#nav${pathname} > a`).addClass(`nav-link disabled`);
});
