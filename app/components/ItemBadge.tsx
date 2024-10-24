import { Category } from '@prisma/client'
import { Badge } from '@radix-ui/themes'
import React from 'react'

const categoryMap: Record<Category, { label: string, color: 'mint' | 'yellow' | 'indigo' }> = {
  OPP: { label: 'OPP', color: 'mint' },
  BTR: { label: 'BTR', color: 'yellow' },
  NXY: { label: 'NXY', color: 'indigo' }
};

const ItemBadge = ({ category }: { category: Category }) => {
  return (
    <Badge variant={'surface'} radius={'large'} highContrast={true} color={categoryMap[category].color}>
      <span className='font-bold text-xs'>{categoryMap[category].label}</span>
    </Badge>
  )
}

export default ItemBadge