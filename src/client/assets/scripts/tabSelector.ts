declare const $;

$(document).ready(() => $(`#nav${window.location.pathname.replace(`/`, `-`)} > a`).addClass(`disabled active`));
