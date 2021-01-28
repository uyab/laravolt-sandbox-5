if (jQuery().redactor) {
    $('[data-role="redactor"]').each(function () {
        $(this).redactor({
            buttonsHide: [
                'link',
            ],
            plugins: [
                'fullscreen',
            ],
            toolbarFixedTopOffset: 50,
            minHeight: '300px',
        });
    });
}
