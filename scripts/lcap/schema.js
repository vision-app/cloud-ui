module.exports = {
    title: '验证文档功能',
    type: 'array',
    items: {
        type: 'object',
        required: ['name', 'title'],
        properties: {
            name: {
                description: '组件英文名',
                type: 'string',
            },
            title: {
                description: '组件中文名',
                type: 'string',
            },
            attrs: {
                type: 'array',
                items: {
                    type: 'object',
                    dependentRequired: {
                        options: ['default'],
                    },
                    properties: {
                        name: {
                            type: 'string',
                            description: '属性英文名',
                        },
                        title: {
                            type: 'string',
                            description: '属性中文名',
                        },
                        type: {
                            type: 'string',
                            description: '属性类型',
                        },
                        description: {
                            type: 'string',
                            description: '属性描述',
                        },
                    }
                }
            },
            slots: {
                oneOf: [
                    {
                        type: 'array',
                        items: {
                            type: 'object',
                            required: ['name', 'description'],
                            properties: {
                                name: {
                                    type: 'string',
                                    description: '属性英文名',
                                },
                                description: {
                                    type: 'string',
                                    description: '属性描述',
                                },
                                support: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        required: ['name', 'title', 'snippet'],
                                        properties: {
                                            name: {
                                                type: 'string',
                                            },
                                            title: {
                                                type: 'string',
                                            },
                                            snippet: {
                                                type: 'string',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    }, {
                        type: 'boolean',
                    },
                ],
            },
            events: {
                type: 'array',
                items: {
                    oneOf: [
                        {
                            type: 'object',
                            required: ['name', 'title', 'description'],
                            properties: {
                                name: {
                                    type: 'string',
                                    description: '属性英文名',
                                },
                                title: {
                                    type: 'string',
                                    description: '属性中文名',
                                },
                                description: {
                                    type: 'string',
                                    description: '属性描述',
                                },
                                params: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        required: ['name', 'type', 'description'],
                                        properties: {
                                            name: {
                                                type: 'string',
                                                description: '属性英文名',
                                            },
                                            type: {
                                                type: 'string',
                                                description: '类型',
                                            },
                                            description: {
                                                type: 'string',
                                                description: '属性描述',
                                            },
                                            schema: {
                                                type: 'object',
                                                properties: {
                                                    $ref: {
                                                        type: 'string',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        {
                            type: 'object',
                            required: ['name', 'kind', 'description'],
                            properties: {
                                name: {
                                    type: 'string',
                                    description: '属性英文名',
                                },
                                kind: {
                                    type: 'string',
                                    description: '属性中文名',
                                },
                                description: {
                                    type: 'string',
                                    description: '属性描述',
                                },
                                params: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        required: ['name', 'type', 'description'],
                                        properties: {
                                            name: {
                                                type: 'string',
                                                description: '属性英文名',
                                            },
                                            type: {
                                                type: 'string',
                                                description: '类型',
                                            },
                                            description: {
                                                type: 'string',
                                                description: '属性描述',
                                            },
                                            schema: {
                                                type: 'object',
                                                properties: {
                                                    $ref: {
                                                        type: 'string',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    ],
                },
            },
        },
    },
    minItems: 1,
};
