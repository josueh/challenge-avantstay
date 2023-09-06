import { graphqlOperations } from '.'

export const graphqlMocks = [
  {
    request: {
      query: graphqlOperations.GET_ALL_REGIONS,
    },
    result: {
      data: [
        {
          id: '24c6f668-fa74-11e9-aa26-3fdfc0000001',
          name: 'Malibu',
          stateName: 'California',
          stateCode: 'CA',
        },
      ],
    },
  },
]
