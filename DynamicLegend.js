define([
    'qlik',
    'text!./template.html',
    './properties',
    'css!./index.css',
], function (qlik, template, properties) {
    function removeExtensionHeader(layout) {
        const {
            qInfo: { qId },
        } = layout;

        const extensionHeader = $(`#${qId}_title`);

        extensionHeader.remove();
    }

    function getExtensionObj(layout) {
        const {
            qInfo: { qId },
        } = layout;

        const extension = $(`#${qId}_content .legend-item-container`);

        return extension;
    }

    function render(layout) {
        const legendTitle = layout.legendSettings?.title || 'Legend';
        const legendItems = layout.legendItems;

        const extension = getExtensionObj(layout);

        if (!extension) return;

        extension.empty();

        const titleElement = $(
            `<div class="legend-title"><h3>${legendTitle}</h3></div>`
        );

        extension.append(titleElement);

        for (const legendItem of legendItems) {
            if (!legendItem.showCondition) continue;

            const container = $('<div class="legend-item"></div>');
            const legendImage = $(
                `<span class="legend-item-img">
                    <img src="${legendItem.legendImageUrl}" />
                </span>`
            );
            const legendCaption = $(
                `<p class="legend-item-caption">${legendItem.legendCaption}</p>`
            );

            container.append(legendImage);
            container.append(legendCaption);

            extension.append(container);
        }

        // getExtensionObj(layout).parent().style('')
    }

    return {
        template: template,
        support: {
            snapshot: true,
            export: true,
            exportData: false,
        },
        definition: properties,
        paint: function ($element, layout) {
            render(layout);

            return qlik.Promise.resolve();
        },
        controller: [
            '$scope',
            function ($scope) {
                const layout = $scope.layout;
                //add your rendering code here

                console.log(layout);
                removeExtensionHeader(layout);
                render(layout);
            },
        ],
    };
});
