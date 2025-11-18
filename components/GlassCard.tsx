import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'strong' | 'subtle'
}

export function GlassCard({ children, className, variant = 'default' }: GlassCardProps) {
  const variants = {
    default: {
      bg: "bg-white/25",
      blur: "backdrop-blur-2xl",
      border: "border border-white/40",
      shadow: "shadow-2xl",
      style: {
        backdropFilter: 'blur(40px) saturate(200%)',
        WebkitBackdropFilter: 'blur(40px) saturate(200%)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.6)',
      }
    },
    strong: {
      bg: "bg-white/35",
      blur: "backdrop-blur-3xl",
      border: "border border-white/50",
      shadow: "shadow-2xl",
      style: {
        backdropFilter: 'blur(60px) saturate(200%)',
        WebkitBackdropFilter: 'blur(60px) saturate(200%)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.7)',
      }
    },
    subtle: {
      bg: "bg-white/15",
      blur: "backdrop-blur-xl",
      border: "border border-white/30",
      shadow: "shadow-xl",
      style: {
        backdropFilter: 'blur(30px) saturate(180%)',
        WebkitBackdropFilter: 'blur(30px) saturate(180%)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.5)',
      }
    }
  }

  const variantStyles = variants[variant]

  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden",
        variantStyles.bg,
        variantStyles.blur,
        variantStyles.border,
        variantStyles.shadow,
        "before:absolute before:inset-0 before:rounded-2xl",
        "before:bg-gradient-to-br before:from-white/40 before:via-white/15 before:to-transparent",
        "before:opacity-80 before:pointer-events-none",
        "after:absolute after:inset-0 after:rounded-2xl",
        "after:bg-gradient-to-t after:from-black/10 after:via-transparent after:to-transparent",
        "after:pointer-events-none",
        className
      )}
      style={variantStyles.style}
    >
      <div className="relative z-10">{children}</div>
    </div>
  )
}

