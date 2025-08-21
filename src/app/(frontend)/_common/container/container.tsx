import React from 'react'
import clsx from 'clsx'
import styles from './container.module.scss'

type ContainerElement = keyof React.JSX.IntrinsicElements

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: ContainerElement
}

const Container: React.FC<ContainerProps> = ({ children, className = '', as = 'div' }) => {
  const Element = as as React.ElementType

  return <Element className={clsx(styles.container, className)}>{children}</Element>
}

export default Container
