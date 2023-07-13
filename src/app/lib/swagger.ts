import { createSwaggerSpec } from 'next-swagger-doc';

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: 'src/app/api', // define api folder under app folder
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'ObservaTudo',
        version: '1.0',
      },
      components: {
        securitySchemes: {
          BearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
        schemas: {
          Eixo: {
            type: 'object',
            properties: {
              id: {
                type: 'number',
              },
              nome: {
                type: 'string',
              },
              icon: {
                type: 'string',
              },
              cor: {
                type: 'string',
              },
            },
          },
        },
      },
      security: [],
    },
  });
  return spec;
};
