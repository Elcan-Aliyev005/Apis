"use client"
import type React from "react"
import { cn } from "@/lib/utils"

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode
  duration?: number
  rx?: string
  ry?: string
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("bg-transparent relative text-xl h-16 w-96 p-[2px] overflow-hidden", otherProps.className)}
      style={{
        borderRadius: rx,
        ...otherProps.style,
      }}
      {...otherProps}
    >
      <div
        className={cn(
          "relative bg-white/[0.8] dark:bg-slate-900/[0.8] border-2 border-blue-500 dark:border-blue-400 backdrop-blur-xl text-black dark:text-white flex items-center justify-center w-full h-full text-sm antialiased",
          rx && `rounded-[${rx}]`,
        )}
      >
        {children}
      </div>
    </div>
  )
}
