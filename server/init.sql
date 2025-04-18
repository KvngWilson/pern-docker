CREATE TABLE public.products (
    product_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
);

INSERT INTO
    public.products (name, price, description)
VALUES (
        'Product 1',
        9.99,
        'Product 1 description'
    );

INSERT INTO
    public.products (name, price, description)
VALUES (
        'Product 2',
        19.99,
        'Product 2 description'
    );

INSERT INTO
    public.products (name, price, description)
VALUES (
        'Product 3',
        29.99,
        'Product 3 description'
    );

INSERT INTO
    public.products (name, price, description)
VALUES (
        'Product 4',
        39.99,
        'Product 4 description'
    );