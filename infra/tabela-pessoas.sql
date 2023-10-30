CREATE TABLE pessoas (
    id serial PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(11),
    data_nascimento DATE,
    telefone VARCHAR(11),
    endereco VARCHAR(255),
    altura INT,
    peso INT
);

INSERT INTO pessoas (nome, cpf, data_nascimento, telefone, endereco, altura, peso) VALUES
    ('Diogo Martin Isaac Farias', '65680749181', '2002-2-22', '38988727840', 'Praça Vicente Mota, 976', 192, 97),
    ('Heloise Lara Bárbara da Rocha', '40087701359', '1957-6-13', '86994039916', 'Rua José Mentor, 158', 164, 76),
    ('Benício Ian Barros', '90339671890', '2000-7-26', '53994591549', 'Rua Visconde do Rio Branco, 532', 176, 83);
