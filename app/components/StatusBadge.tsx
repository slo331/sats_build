import { Status } from '@prisma/client'
import { Badge } from '@radix-ui/themes'
import React from 'react'

const statusMap: Record<Status, { label: string, color: 'red' | 'indigo' | 'green' }> = {
  OPEN: { label: 'OPEN', color: 'red' },
  IN_PROGRESS: { label: 'IN PROGRESS', color: 'indigo' },
  CLOSED: { label: 'CLOSED', color: 'green' }
}

const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <Badge variant={'surface'} radius={'large'} color={statusMap[status].color} size={'3'}>
      <span className='p-1 font-medium'>{statusMap[status].label}</span>
    </Badge>
  )
}

export default StatusBadge