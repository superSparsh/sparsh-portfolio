import { motion, useReducedMotion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
}) {
  const reduceMotion = useReducedMotion()
  const Component = motion[as] || motion.div

  if (reduceMotion) {
    const StaticTag = as
    return <StaticTag className={className}>{children}</StaticTag>
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Component>
  )
}
