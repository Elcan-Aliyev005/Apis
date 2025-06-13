"use client"
import type React from "react"
import { useId } from "react"

interface SparklesProps {
  id?: string
  background?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  className?: string
  particleColor?: string
}

export const SparklesCore = (props: SparklesProps) => {
  const {
    id,
    background = "transparent",
    minSize = 0.4,
    maxSize = 1,
    particleDensity = 1200,
    className,
    particleColor = "#FFF",
  } = props
  const generateId = useId()
  return (
    <div className={className}>
      <svg
        className="animate-pulse"
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.8">
          <circle cx="100" cy="100" r="1" fill={particleColor}>
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="150" r="1.5" fill={particleColor}>
            <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="300" cy="80" r="1" fill={particleColor}>
            <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="150" cy="200" r="1.2" fill={particleColor}>
            <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="350" cy="180" r="0.8" fill={particleColor}>
            <animate attributeName="opacity" values="0;1;0" dur="2.2s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  )
}

export const Sparkles = ({ children, ...props }: SparklesProps & { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <SparklesCore {...props} />
      {children}
    </div>
  )
}
