const badgeVariants = cva("badge", {
  variants: {
    type: {
      default: {
        switchCore: {
          primary:
            "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl bg-primary-25 px-3 text-xs font-medium text-primary-300",
          secondary:
            "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl bg-secondary-25 px-3 text-xs font-medium text-secondary-800",
          tertiary:
            "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl bg-orange-25 px-3 text-xs font-medium text-orange-700",
        },
      },
      success: {
        outline: {
          true: {
            opacity: {
              true: "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl border border-success-600 bg-success-50 px-3 text-xs font-medium text-success-600",
              false:
                "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl border border-success-600 px-3 text-xs font-medium text-success-600",
            },
          },
          false: {
            opacity: {
              true: "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl bg-success-50 px-3 text-xs font-medium text-success-600",
              false:
                "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl bg-success-600 px-3 text-xs font-medium text-gray-white",
            },
          },
        },
      },
      warning: {
        outline: {
          true: {
            opacity: {
              true: "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl border border-orange-500 bg-orange-50 px-3 text-xs font-medium text-orange-500",
              false:
                "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl border border-orange-500 px-3 text-xs font-medium text-orange-500",
            },
          },
          false: {
            opacity: {
              true: "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl bg-orange-50 px-3 text-xs font-medium text-orange-500",
              false:
                "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl bg-orange-500 px-3 text-xs font-medium text-black",
            },
          },
        },
      },
      danger: {
        outline: {
          true: {
            opacity: {
              true: "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl border border-error-600 bg-error-50 px-3 text-xs font-medium text-error-600",
              false:
                "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl border border-error-600 px-3 text-xs font-medium text-error-600",
            },
          },
          false: {
            opacity: {
              true: "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl bg-error-50 px-3 text-xs font-medium text-error-600",
              false:
                "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl bg-error-600 px-3 text-xs font-medium text-gray-white",
            },
          },
        },
      },
    },
  },
});