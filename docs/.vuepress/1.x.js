module.exports = [
    {
        title: 'Getting Started',
        collapsable: true,
        children: prefix('getting-started', [
            '',
            'license',
            'installation',
            'contributing',
            'support',
        ]),
    },
    {
        title: 'Architecture Concepts',
        collapsable: true,
        children: prefix('architecture', [
            '',
            'objects',
            'concerns',
        ]),
    },
    {
        title: 'Exports',
        collapsable: true,
        children: prefix('exports', [
            '',
            'collection',
            'store',
            'export-formats',
            'exportables',
            'from-query',
            'queued',
            'multiple-sheets',
            'mapping',
            'concerns',
            'extending',
            'testing',
        ]),
    },
    {
        title: 'Imports',
        collapsable: true,
        children: prefix('imports', [
            '',
            'basics',
            'collection',
            'model',
            'importables',
            'import-formats',
            'multiple-sheets',
            'heading-row',
            'batch-inserts',
            'queued',
            'validation',
            'custom-csv-settings',
            'concerns',
            'extending',
            'testing',
        ]),
    },
];

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}
