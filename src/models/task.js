export const task = {
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        title: {
            type: 'string'
        },
        description: {
            type: 'string'
        },
        attachment: {
            type: 'string'
        },
        est_time: {
            type: 'string'
        },
        labels: {
            type: 'array'
        },
        boardID: {
            type: 'string'
        },
        status: {
            type: 'string',
            enum: ['pending', 'processing', 'done']
        }
    }
}