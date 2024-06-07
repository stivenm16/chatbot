import { Product } from '@/app/models'

export const ProductItem = ({ product }: { product: Product }) => {
  return (
    <div className="min-w-[250px] h-32 flex items-center p-4 rounded-lg shadow-lg mr-5">
      <img
        src={product.imageUrl}
        alt={product.displayTitle}
        className="w-full h-20 object-cover"
      />
      <div className="  overflow-hidden">
        <div className="p-4">
          <span className="text-[8px]">{product.displayTitle}</span>
          <p className="text-gray-800 font-bold">
            ${product.price.split('USD')}
          </p>
          <a href={product.url} target="_blank" rel="noopener noreferrer">
            <span className="underline text-[8px]">View Page</span>
          </a>
        </div>
      </div>
    </div>
  )
}
