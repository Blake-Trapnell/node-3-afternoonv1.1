UPDATE product
SET description = $1, price = $2, img_url = $3, name = $4
WHERE product_id = $5;
select * FROM product;