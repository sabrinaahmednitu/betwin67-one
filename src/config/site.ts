export const siteConfig = {
  siteName: 'Betwin67',
  casinoUrl: 'https://betwin67.com/#/register?invitationCode=490141113916',
  whatsappNumber: '8801824941728',
  whatsappMessage: 'হ্যালো, আপনার প্ল্যাটফর্ম সম্পর্কে আমি আরও তথ্য জানতে চাই।',
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`
