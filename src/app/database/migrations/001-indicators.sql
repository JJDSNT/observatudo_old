-- Up
CREATE TABLE Estado (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sigla VARCHAR(2) NOT NULL,
    nome VARCHAR(255) NOT NULL,
    codigo_ibge VARCHAR(10) NOT NULL
);

CREATE TABLE Cidade (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(255) NOT NULL,
    codigo_ibge VARCHAR(10) NOT NULL,
    estadoId INTEGER NOT NULL,
    FOREIGN KEY (estadoId) REFERENCES Estado(id)
);

CREATE TABLE Indicador (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(255) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    localidadeId VARCHAR(10) NOT NULL,
    FOREIGN KEY (localidadeId) REFERENCES Estado(codigo_ibge)
);


INSERT INTO Estado (sigla, nome, codigo_ibge) VALUES ('SP', 'São Paulo', '35');
INSERT INTO Estado (sigla, nome, codigo_ibge) VALUES ('RJ', 'Rio de Janeiro', '33');
INSERT INTO Estado (sigla, nome, codigo_ibge) VALUES ('MG', 'Minas Gerais', '31');


INSERT INTO Cidade (nome, codigo_ibge, estadoId) VALUES ('São Paulo', '3550308', 1);
INSERT INTO Cidade (nome, codigo_ibge, estadoId) VALUES ('Campinas', '3509502', 1);
INSERT INTO Cidade (nome, codigo_ibge, estadoId) VALUES ('Santos', '3548500', 1);
INSERT INTO Cidade (nome, codigo_ibge, estadoId) VALUES ('Rio de Janeiro', '3304557', 2);
INSERT INTO Cidade (nome, codigo_ibge, estadoId) VALUES ('Niterói', '3303302', 2);
INSERT INTO Cidade (nome, codigo_ibge, estadoId) VALUES ('Duque de Caxias', '3301702', 2);
INSERT INTO Cidade (nome, codigo_ibge, estadoId) VALUES ('Belo Horizonte', '3106200', 3);
INSERT INTO Cidade (nome, codigo_ibge, estadoId) VALUES ('Contagem', '3118602', 3);
INSERT INTO Cidade (nome, codigo_ibge, estadoId) VALUES ('Uberlândia', '3170206', 3);


INSERT INTO Indicador (nome, valor, localidadeId) VALUES ('Taxa de Mortalidade Infantil', 15.2, '35');
INSERT INTO Indicador (nome, valor, localidadeId) VALUES ('Taxa de Mortalidade Infantil', 11.8, '33');
INSERT INTO Indicador (nome, valor, localidadeId) VALUES ('Taxa de Mortalidade Infantil', 12.6, '31');
INSERT INTO Indicador (nome, valor, localidadeId) VALUES ('Taxa de Mortalidade Infantil', 9.5, '31');

-- Down
DROP TABLE Indicador;
DROP TABLE Cidade;
DROP TABLE Estado;
