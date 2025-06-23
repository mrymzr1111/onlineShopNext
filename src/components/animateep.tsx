// components/AnimatedImage.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// export default function AnimatedImage({ }: any) {
//   return (
//     <motion.div
//       whileTap={{ scale: 0.95, rotate: -1 }}
//       transition={{ type: 'spring', stiffness: 300 }}
//       className="cursor-pointer"
//     >
               
//     <Image
//       src={validImage}
//       alt={title}
//       fill
//       style={{ objectFit: 'cover' }}
//       className="rounded-t-lg group-hover:opacity-80 transition duration-300"
//        sizes="(max-width: 768px) 100vw, 33vw"
//     />
    
//     </motion.div>
//   )
// }



interface AnimatedImageProps {
  src: string
  alt: string
}

export default function AnimatedImage({ src, alt }: AnimatedImageProps) {
  return (
    <motion.div
      whileTap={{ scale: 0.95, rotate: -1 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="cursor-pointer"
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        className="rounded-t-lg group-hover:opacity-80 transition duration-300"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </motion.div>
  )
}
