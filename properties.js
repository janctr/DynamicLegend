define([], function () {
    const legendSettings = {
        type: 'items',
        label: 'Legend Settings',
        translation: 'Legend Settings',
        ref: 'legendSettings',
        items: {
            titleSettings: {
                type: 'items',
                label: 'Title settings',
                translation: 'Title settings',
                items: {
                    legendTitle: {
                        ref: 'legendSettings.title',
                        type: 'string',
                        label: 'Legend Title',
                        defaultValue: 'Legend',
                        expression: 'optional',
                    },
                },
            },
        },
    };

    const legendItemSection = {
        type: 'array',
        translation: 'Legend Items',
        ref: 'legendItems',
        min: 1,
        allowAdd: true,
        allowRemove: true,
        allowMove: true,
        addTranslation: 'Add Legend Item',
        grouped: true,
        itemTitleRef: 'legendCaption',
        items: {
            showCondition: {
                ref: 'showCondition',
                type: 'integer',
                label: 'Show Condition',
                defaultValue: 1,
                expression: 'optional',
            },
            legendCaption: {
                type: 'string',
                label: 'Legend item caption',
                ref: 'legendCaption',
                layoutRef: 'legendCaption',
                expression: 'optional',
            },
            legendImageUrl: {
                type: 'string',
                label: 'Legend item image: ',
                component: 'media',
                ref: 'legendImageUrl',
                layoutRef: 'legendImageUrl',
            },
        },
    };

    return {
        type: 'items',
        component: 'accordion',
        items: {
            legendSettings,
            legendItemSection,
        },
    };
});
