import { Suspense } from 'react'; 
import { Await, useLoaderData } from 'react-router-dom'; 
import { IProduct } from '../../interfaces/product.interface'; 

import styles from './Product.module.css'; 

export function Product() { 
	const data = useLoaderData() as { data: IProduct }; 

	return ( 
		<Suspense fallback='Загружаю...'> 
			<Await resolve={data.data}> 
				{({ data }: { data: IProduct }) => ( 
					<div className={styles.product}> 
						<div className={styles['image-container']}> 
							<img src={data.image} alt='Product' className={styles.image} /> 
						</div> 
						<div className={styles.info}> 
							<h2 className={styles.title}>{data.name}</h2> 
							<p className={styles.description}>{data.ingredients.join(', ')}</p> 
							<div className={styles['price-container']}> 
								<span className={styles.price}>{data.price} ₽</span> 
							</div> 
							<div className={styles.rating}> 
								<span className={styles['rating-value']}>{data.rating}</span> 
								<img src='/star-icon.svg' alt='Rating' className={styles['rating-icon']} /> 
							</div> 
						</div> 
					</div> 
				)} 
			</Await> 
		</Suspense> 
	); 
}