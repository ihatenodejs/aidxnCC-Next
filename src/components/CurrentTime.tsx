"use client"

import { useEffect, useState } from "react"

export default function CurrentTime() {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const newTime = new Date()
        .toLocaleString("en-US", { timeZone: "America/New_York" })
        .split(",")[1]
        .trimStart()
        .replace(/^0/, "")
      setTime(newTime)
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return <span>Eastern ({time})</span>
} 