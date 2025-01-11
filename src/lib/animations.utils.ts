export const getReverseAnimation = (animation: string): string => {
  const reverseAnimation: Record<string, string> = {
    'slide-left': 'slide-right',
    'slide-right': 'slide-left',
    'slide-up': 'slide-down',
    'slide-down': 'slide-up',
  }

  return reverseAnimation[animation]
}
