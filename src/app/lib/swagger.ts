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
          EstadosResponse: {
            type: 'object',
            properties: {
              estados: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/Estado',
                },
              },
            },
          },
          Estado: {
            type: 'object',
            properties: {
              estado: {
                $ref: '#/components/schemas/InfoEstado',
              },
              cidades: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/Cidade',
                },
              },
            },
          },
          InfoEstado: {
            type: 'object',
            properties: {
              codigo: {
                type: 'number',
              },
              nome: {
                type: 'string',
              },
              sigla: {
                type: 'string',
              },
            },
          },
          Cidade: {
            type: 'object',
            properties: {
              codigo: {
                type: 'number',
              },
              nome: {
                type: 'string',
              },
              capital: {
                type: 'string|null',
              },
            },
          },
          ErrorResponse: {
            type: 'object',
            properties: {
              message: {
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
