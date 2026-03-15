"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export function SonnerDemo() {
  return (
    <div className="flex flex-wrap items-start gap-3">
      <Button
        variant="secondary"
        size="sm"
        onClick={() => toast("Event has been created.")}
      >
        Default Toast
      </Button>
      <Button
        variant="secondary"
        size="sm"
        onClick={() => toast.success("Operation completed successfully.")}
      >
        Success
      </Button>
      <Button
        variant="secondary"
        size="sm"
        onClick={() => toast.error("Something went wrong.")}
      >
        Error
      </Button>
      <Button
        variant="secondary"
        size="sm"
        onClick={() => toast.info("Deployment started.")}
      >
        Info
      </Button>
    </div>
  )
}
