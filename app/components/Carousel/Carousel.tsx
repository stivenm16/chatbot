import { useCarousel } from '@/app/hooks'
import { Product } from '../../models'
import { ProductItem } from './ProductItem'

interface CarouselProps {
  products: Product[]
}

export const Carousel = ({ products }: CarouselProps) => {
  const { currentIndex, transition, translateX, handleMouseDown, carouselRef } =
    useCarousel({ products })

  const progressBarWidth = `${((currentIndex + 1) / products.length) * 100}%`
  return (
    <div
      className="relative  w-[16rem] mx-auto"
      ref={carouselRef}
      onMouseDown={handleMouseDown}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500  w-full p-4"
          style={{
            transform: `translateX(${translateX - currentIndex * 100}%)`,
            transition: transition,
          }}
        >
          {products.map((item, index) => (
            <ProductItem product={item} key={index} />
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-50">
          <div
            className={`bg-[#181f3d] h-1.5 rounded-full `}
            style={{ width: progressBarWidth }}
          ></div>
        </div>
      </div>
    </div>
  )
}
